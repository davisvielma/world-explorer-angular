import { THEMES } from '@/core/config';
import { Component } from '@angular/core';
import { ChevronDown, LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'navbar-themes-dropdown',
  imports: [LucideAngularModule],
  templateUrl: './navbar-themes-dropdown.html',
})
export class NavbarThemesDropdown {
  themes = THEMES
  readonly ChevronDown = ChevronDown
}
