import { ThemeService } from '@/core/services/theme.service';
import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ChevronDown, LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'navbar-themes-dropdown',
  imports: [LucideAngularModule, TitleCasePipe],
  templateUrl: './navbar-themes-dropdown.html',
})
export class NavbarThemesDropdown {
  themeService = inject(ThemeService)

  ChevronDown = ChevronDown

  onThemeChange = (newTheme: string) => {
    this.themeService.setTheme(newTheme)
  }
}
