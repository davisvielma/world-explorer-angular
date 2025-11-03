import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { RESTCountry } from '../interfaces/rest-countrys';
import { CountryMapper } from '../mappers/country.mapper';
import { Region } from '../types/region';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient)
  private queryCacheCapital = new Map<string, Country[]>()
  private queryCacheCountry = new Map<string, Country[]>()
  private queryCacheRegion = new Map<Region, Country[]>()

  searchByCapital = (query: string): Observable<Country[]> => {
    const queryLower = query.toLowerCase()

    if (this.queryCacheCapital.has(queryLower)) return of(this.queryCacheCapital.get(queryLower) ?? [])

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${queryLower}`)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        tap((countries) => this.queryCacheCapital.set(queryLower, countries)),
        // catchError((err) => {
        //   return throwError(() => new Error(`No se encontro un pais con esa capital ${query}`))
        // })
      )
  }

  searchByCountry = (query: string): Observable<Country[]> => {
    const queryLower = query.toLowerCase()

    if (this.queryCacheCountry.has(queryLower)) return of(this.queryCacheCountry.get(queryLower) ?? [])

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${queryLower}`)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        tap((countries) => this.queryCacheCountry.set(queryLower, countries)),
        // catchError((err) => {
        //   return throwError(() => new Error(`No se encontro un pais con ese nombre ${query}`))
        // })
      )
  }

  searchByRegion = (region: Region): Observable<Country[]> => {
    if (this.queryCacheRegion.has(region)) return of(this.queryCacheRegion.get(region) ?? [])

    return this.http.get<RESTCountry[]>(`${API_URL}/region/${region}`)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        tap((countries) => this.queryCacheRegion.set(region, countries)),
        // catchError((err) => {
        //   return throwError(() => new Error(`No se encontro un pais con esa region ${region}`))
        // })
      )
  }

  searchCountryByAlphaCode = (code: string) => {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        map((countries) => countries.at(0)),
        catchError((err) => {
          return throwError(() => new Error(`No se encontro un pais con el codigo ${code}`))
        })
      )
  }
}
