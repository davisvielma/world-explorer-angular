import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nabvar } from "@/shared/components/nabvar/nabvar";
import { Footer } from "@/shared/components/footer/footer";

@Component({
  selector: 'app-contry-layout',
  imports: [RouterOutlet, Nabvar, Footer],
  templateUrl: './country-layout.html',
})
export class CountryLayout {

}
