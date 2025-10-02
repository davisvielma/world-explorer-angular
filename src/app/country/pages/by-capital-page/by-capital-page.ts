import { Component } from '@angular/core';
import { ContrySearchInput } from "@/country/components/contry-search-input/contry-search-input";
import { PagesTitles } from "@/shared/components/pages-titles/pages-titles";

@Component({
  selector: 'app-by-capital-page',
  imports: [ContrySearchInput, PagesTitles],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

}
