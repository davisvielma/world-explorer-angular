import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pages-titles',
  imports: [TitleCasePipe],
  templateUrl: './pages-titles.html',
})
export class PagesTitles {
  title = input.required<string>()
  subtitle = input<string>('')
}
