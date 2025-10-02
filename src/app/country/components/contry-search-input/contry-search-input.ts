import { Component, input } from '@angular/core';

@Component({
  selector: 'contry-search-input',
  imports: [],
  templateUrl: './contry-search-input.html',
})
export class ContrySearchInput {
  placeholder = input.required<string>()
}
