import { Country } from '@/country/interfaces/country';
import { FavoritesService } from '@/country/services/favorites.service';
import { DecimalPipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { HeartIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe, LucideAngularModule],
  templateUrl: './country-information.html',
})
export class CountryInformation {
  favoritesServices = inject(FavoritesService)
  country = input.required<Country>()
  currentYear = computed(() => new Date().getFullYear())

  HeartIcon = HeartIcon

  isFavorite = computed(() => this.favoritesServices.isCountryFavorite(this.country()))
}
