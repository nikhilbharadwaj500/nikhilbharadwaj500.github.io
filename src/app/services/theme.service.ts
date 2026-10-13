import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly currentTheme = signal<Theme>('dark');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme-preference') as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        this.currentTheme.set(savedTheme);
      } else {
        // Dark theme by default as preferred
        this.currentTheme.set('dark');
      }

      effect(() => {
        const theme = this.currentTheme();
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme-preference', theme);
      });
    }
  }

  toggleTheme(): void {
    this.currentTheme.update(prev => (prev === 'dark' ? 'light' : 'dark'));
  }
}
