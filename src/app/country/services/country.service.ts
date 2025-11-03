import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { RESTCountry } from '../interfaces/rest-countrys';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient)
  private queryCacheCapital = new Map<string, Country[]>()

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
}
