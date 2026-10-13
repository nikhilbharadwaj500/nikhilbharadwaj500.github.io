import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  readonly personalInfo = PERSONAL_INFO;
  readonly currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
