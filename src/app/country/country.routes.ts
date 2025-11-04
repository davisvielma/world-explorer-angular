import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/contry-layout/country-layout';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryPage } from './pages/country-page/country-page';
import { ByContryPage } from './pages/by-contry-page/by-contry-page';
import { FavoritePage } from './pages/favorite-page/favorite-page';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage
      },
      {
        path: 'by-country',
        component: ByContryPage
      },
      {
        path: 'by-region',
        component: ByRegionPage
      },
      {
        path: 'by/:code',
        component: CountryPage
      },
      {
        path: 'favorite-countries',
        component: FavoritePage
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  }
];

export default countryRoutes
