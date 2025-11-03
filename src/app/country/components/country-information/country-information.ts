import { Country } from '@/country/interfaces/country';
import { DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
})
export class CountryInformation {
  country = input.required<Country>()
  currentYear = computed(() => new Date().getFullYear())
}
