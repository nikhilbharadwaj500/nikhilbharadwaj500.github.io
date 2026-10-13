import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES } from '../../data/portfolio.data';
import { ExperienceItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCES;
  readonly selectedExp = signal<ExperienceItem | null>(null);

  openModal(exp: ExperienceItem, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.selectedExp.set(exp);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedExp.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    if (this.selectedExp()) {
      this.closeModal();
    }
  }
}
