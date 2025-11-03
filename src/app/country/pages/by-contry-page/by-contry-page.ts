import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { PagesTitles } from "@/shared/components/pages-titles/pages-titles";
import { ContrySearchInput } from "@/country/components/contry-search-input/contry-search-input";
import { CountryList } from "@/country/components/country-list/country-list";
import { CountryService } from '@/country/services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-by-contry-page',
  imports: [PagesTitles, ContrySearchInput, CountryList],
  templateUrl: './by-contry-page.html',
})
export class ByContryPage {
  contryService = inject(CountryService)
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  errorCountry = signal<string | null>(null);

  queryParams = this.activatedRoute.snapshot.queryParamMap.get('query') ?? ''
  query = linkedSignal(() => this.queryParams)

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    defaultValue: [],
    stream: ({ params }) => {
      if (!params.query) return of([])

      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: params.query
        }
      })

      return this.contryService.searchByCountry(params.query)
        .pipe(
          tap(() => this.errorCountry.set(null)),
          catchError(() => {
            this.errorCountry.set(`No se encontro un pais con ese nombre: ${params.query}`);
            return of([]);
          })
        )
    },
  })

  errorMessage = computed(() => {
    return this.errorCountry() || this.countryResource.error();
  })
}
