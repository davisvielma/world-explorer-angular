import { Country } from '@/country/interfaces/country';
import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Loader } from "@/shared/components/loader/loader";

@Component({
  selector: 'country-list',
  imports: [RouterLink, DecimalPipe, Loader],
  templateUrl: './country-list.html',
})
export class CountryList {
  countries = input.required<Country[]>()

  errorMessage = input<Error | string | unknown | null>()
  isLoading = input<boolean>(false)
  isEmpty = input<boolean>(false)
}
