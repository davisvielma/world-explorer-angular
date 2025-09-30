import { NavLink } from '@/core/types';
import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar-menu-desktop',
  imports: [RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './navbar-menu-desktop.html',
})
export class NavbarMenuDesktop {
  links = input.required<NavLink[]>()
}
