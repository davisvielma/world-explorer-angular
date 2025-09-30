import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarThemesDropdown } from './navbar-themes-dropdown/navbar-themes-dropdown';
import { NavbarMenuDesktop } from "./navbar-menu-desktop/navbar-menu-desktop";
import { NavbarMenuMobile } from './navbar-menu-mobile/navbar-menu-mobile';
import { NAVBAR_LINKS } from '@/core/config';

@Component({
  selector: 'app-nabvar',
  imports: [RouterLink, NavbarThemesDropdown, NavbarMenuDesktop, NavbarMenuMobile],
  templateUrl: './nabvar.html',
})
export class Nabvar {
  links = NAVBAR_LINKS
}
