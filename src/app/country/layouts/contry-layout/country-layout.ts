import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nabvar } from "@/shared/components/nabvar/nabvar";

@Component({
  selector: 'app-contry-layout',
  imports: [RouterOutlet, Nabvar],
  templateUrl: './country-layout.html',
})
export class CountryLayout {

}
