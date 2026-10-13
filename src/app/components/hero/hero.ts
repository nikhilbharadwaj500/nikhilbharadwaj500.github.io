import { Component, OnInit, OnDestroy, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  readonly personalInfo = PERSONAL_INFO;

  readonly currentRoleText = signal('');
  private currentRoleIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typeTimeout: any;

  readonly photos = [
    { src: 'images/myself.jpg', alt: 'Nikhil Bharadwaj on motorcycle' },
    { src: 'images/myself-alt.jpg', alt: 'Nikhil Bharadwaj portrait' }
  ];
  readonly activePhotoIndex = signal(0);
  readonly isHovered = signal(false);
  private photoInterval: any;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.typeLoop();
      this.startPhotoCycle();
    } else {
      this.currentRoleText.set(this.personalInfo.roles[0]);
    }
  }

  ngOnDestroy(): void {
    if (this.typeTimeout) {
      clearTimeout(this.typeTimeout);
    }
    if (this.photoInterval) {
      clearInterval(this.photoInterval);
    }
  }

  private startPhotoCycle(): void {
    // Automatically crossfade between photos every 4.5 seconds when not hovered
    this.photoInterval = setInterval(() => {
      if (!this.isHovered()) {
        this.activePhotoIndex.update(idx => (idx === 0 ? 1 : 0));
      }
    }, 4500);
  }

  onPhotoMouseEnter(): void {
    this.isHovered.set(true);
    this.activePhotoIndex.set(1);
  }

  onPhotoMouseLeave(): void {
    this.isHovered.set(false);
    this.activePhotoIndex.set(0);
  }

  togglePhoto(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.activePhotoIndex.update(idx => (idx === 0 ? 1 : 0));
  }

  private typeLoop(): void {
    const roles = this.personalInfo.roles;
    const currentRole = roles[this.currentRoleIndex];

    if (this.isDeleting) {
      this.currentCharIndex--;
      this.currentRoleText.set(currentRole.substring(0, this.currentCharIndex));
    } else {
      this.currentCharIndex++;
      this.currentRoleText.set(currentRole.substring(0, this.currentCharIndex));
    }

    let typeSpeed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.currentCharIndex === currentRole.length) {
      // Pause at full word
      typeSpeed = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % roles.length;
      typeSpeed = 400;
    }

    this.typeTimeout = setTimeout(() => this.typeLoop(), typeSpeed);
  }
}
