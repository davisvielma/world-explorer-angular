import { Component, input } from '@angular/core';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
})
export class CountryList {
  countries = input()
  // countries = input.required<Country[]>()

  errorMessage = input<string | unknown | null>()
  isLoading = input<boolean>(false)
  isEmpty = input<boolean>(false)
}
