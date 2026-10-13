import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
  readonly personalInfo = PERSONAL_INFO;
  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);
  readonly activeSection = signal('home');

  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 20);

    const sections = this.navLinks.map(link => link.href.substring(1));
    const scrollPos = window.scrollY + 120;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionEl = document.getElementById(sections[i]);
      if (sectionEl && sectionEl.offsetTop <= scrollPos) {
        this.activeSection.set(sections[i]);
        break;
      }
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
