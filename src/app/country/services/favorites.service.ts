import { Injectable, signal } from '@angular/core';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'app-favorite-countries'

  private getInitialFavoriteCountries = (): Country[] => {
    const savedFavoriteCountries = localStorage.getItem(this.storageKey)
    return savedFavoriteCountries ? JSON.parse(savedFavoriteCountries) : []
  }

  favoriteCountries = signal<Country[]>(this.getInitialFavoriteCountries())

  private saveToLocalStorage = (countries: Country[]) => {
    localStorage.setItem(this.storageKey, JSON.stringify(countries));
  }

  isCountryFavorite = (country: Country): boolean => {
    return this.favoriteCountries()
      .some((fav) => fav.name === country.name)
  }

  toggleFavoriteCountry = (country: Country) => {
    const currentFavorites = this.favoriteCountries()
    const isCurrentlyFavorite = this.isCountryFavorite(country)

    let updatedFavorites: Country[]

    if (isCurrentlyFavorite) {
      updatedFavorites = currentFavorites
        .filter((fav) => fav.name !== country.name)
    } else {
      updatedFavorites = [...currentFavorites, country];
    }

    this.favoriteCountries.set(updatedFavorites);
    this.saveToLocalStorage(updatedFavorites);
  }
}
