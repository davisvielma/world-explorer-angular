import { DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';
import { THEMES } from '@/core/config';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT)
  private storageKey = 'app-theme'

  currentTheme = signal<string>(this.getInitialTheme())

  availableThemes = THEMES

  themeEffect = effect(() => {
    const theme = this.currentTheme()
    this.applyTheme(theme)
  });

  private getInitialTheme(): string {
    const savedTheme = localStorage.getItem(this.storageKey)

    if (savedTheme) return savedTheme

    return 'light'
  }

  private applyTheme(theme: string): void {
    this.document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(this.storageKey, theme)
  }

  public setTheme(theme: string): void {
    if (this.availableThemes.includes(theme)) this.currentTheme.set(theme)
  }
}
