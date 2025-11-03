import { Component, computed, effect, inject, linkedSignal, signal } from '@angular/core';
import { ContrySearchInput } from "@/country/components/contry-search-input/contry-search-input";
import { PagesTitles } from "@/shared/components/pages-titles/pages-titles";
import { CountryList } from "@/country/components/country-list/country-list";
import { CountryService } from '@/country/services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [ContrySearchInput, PagesTitles, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
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

      this.router.navigate(['/country/by-capital'], {
        queryParams: {
          query: params.query
        }
      })

      return this.contryService.searchByCapital(params.query)
        .pipe(
          tap(() => this.errorCountry.set(null)),
          catchError((err) => {
            this.errorCountry.set(`No se encontró un país con esa capital: ${params.query}`);
            return of([]);
          })
        )
    },
  })

  errorMessage = computed(() => {
    return this.errorCountry() || this.countryResource.error();
  });
}
