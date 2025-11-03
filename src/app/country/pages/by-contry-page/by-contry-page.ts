import { Component } from '@angular/core';
import { PagesTitles } from "@/shared/components/pages-titles/pages-titles";
import { ContrySearchInput } from "@/country/components/contry-search-input/contry-search-input";
import { CountryList } from "@/country/components/country-list/country-list";

@Component({
  selector: 'app-by-contry-page',
  imports: [PagesTitles, ContrySearchInput, CountryList],
  templateUrl: './by-contry-page.html',
})
export class ByContryPage {

}
