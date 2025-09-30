import { NavLink } from '@/core/types';
import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu} from 'lucide-angular';

@Component({
  selector: 'navbar-menu-mobile',
  imports: [RouterLink, RouterLinkActive, TitleCasePipe, LucideAngularModule],
  templateUrl: './navbar-menu-mobile.html',
})
export class NavbarMenuMobile {
  links = input.required<NavLink[]>()
  readonly Menu = Menu
}
