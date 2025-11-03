import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { PagesTitles } from "@/shared/components/pages-titles/pages-titles";
import { Region } from '@/country/types/region';
import { CountryService } from '@/country/services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, of, tap } from 'rxjs';
import { CountryList } from "@/country/components/country-list/country-list";

const validateQueryParam = (queryParam: string): Region => {
  const queryLower = queryParam.toLowerCase()

  const validRegions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic',
  }

  return validRegions[queryLower] ?? 'Americas'
}

@Component({
  selector: 'app-by-region-page',
  imports: [PagesTitles, CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  contryService = inject(CountryService)
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  errorCountry = signal<string | null>(null)

  queryParams = this.activatedRoute.snapshot.queryParamMap.get('region') ?? ''
  selectedRegion = linkedSignal<Region>(() => validateQueryParam(this.queryParams))

  regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selectRegion = (region: Region) => {
    this.selectedRegion.set(region)
  }

  countryResource = rxResource({
    params: () => ({ region: this.selectedRegion() }),
    defaultValue: [],
    stream: ({ params }) => {
      if (!params.region) return of([])

      this.router.navigate(['/country/by-region'], {
        queryParams: {
          region: params.region
        }
      })

      return this.contryService.searchByRegion(params.region)
        .pipe(
          tap(() => this.errorCountry.set(null)),
          catchError(() => {
            this.errorCountry.set(`No se encontro un pais con esa region ${params.region}`);
            return of([]);
          })
        )
    }
  })

  errorMessage = computed(() => {
    return this.errorCountry() || this.countryResource.error();
  })
}
