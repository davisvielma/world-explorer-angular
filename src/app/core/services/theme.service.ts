import { DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';
import { THEMES } from '@/core/config';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT)
  private storageKey = 'app-theme'

  private getInitialTheme = (): string => {
    const savedTheme = localStorage.getItem(this.storageKey)

    if (savedTheme) return savedTheme

    return 'light'
  }

  currentTheme = signal<string>(this.getInitialTheme())

  availableThemes = THEMES

  themeEffect = effect(() => {
    const theme = this.currentTheme()
    this.applyTheme(theme)
  });

  private applyTheme = (theme: string): void => {
    this.document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(this.storageKey, theme)
  }

  setTheme = (theme: string): void => {
    if (this.availableThemes.includes(theme)) this.currentTheme.set(theme)
  }
}
