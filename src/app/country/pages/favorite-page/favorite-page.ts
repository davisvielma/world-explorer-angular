import { FavoritesService } from '@/country/services/favorites.service';
import { Component, inject } from '@angular/core';
import { PagesTitles } from "@/shared/components/pages-titles/pages-titles";
import { RouterLink } from "@angular/router";
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-favorite-page',
  imports: [PagesTitles, RouterLink, DecimalPipe],
  templateUrl: './favorite-page.html',
})
export class FavoritePage {
  favoritesServices = inject(FavoritesService)

  favoritesCountries = this.favoritesServices.favoriteCountriesList()
}
