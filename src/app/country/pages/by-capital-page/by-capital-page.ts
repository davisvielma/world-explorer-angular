import { Component, effect, signal } from '@angular/core';
import { ContrySearchInput } from "@/country/components/contry-search-input/contry-search-input";
import { PagesTitles } from "@/shared/components/pages-titles/pages-titles";
import { CountryList } from "@/country/components/country-list/country-list";

@Component({
  selector: 'app-by-capital-page',
  imports: [ContrySearchInput, PagesTitles, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  query = signal<string>('')
}
