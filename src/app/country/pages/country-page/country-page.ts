import { CountryService } from '@/country/services/country.service';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NotFound } from "@/shared/components/not-found/not-found";
import { Loader } from "@/shared/components/loader/loader";
import { CountryInformation } from "@/country/components/country-information/country-information";

@Component({
  selector: 'app-contry-page',
  imports: [NotFound, Loader, CountryInformation],
  templateUrl: './country-page.html',
})
export class CountryPage {
  contryService = inject(CountryService)
  activatedRoute = inject(ActivatedRoute)

  contryCode = this.activatedRoute.snapshot.params['code']

  countryResource = rxResource({
    params: () => ({ code: this.contryCode }),
    stream: ({ params }) => {
      return this.contryService.searchCountryByAlphaCode(params.code)
    }
  })
}
