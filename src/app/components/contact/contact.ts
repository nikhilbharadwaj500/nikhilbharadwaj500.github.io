import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  readonly personalInfo = PERSONAL_INFO;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isCopied = signal(false);
  isSubmitted = signal(false);

  copyEmail(): void {
    navigator.clipboard.writeText(this.personalInfo.email).then(() => {
      this.isCopied.set(true);
      setTimeout(() => this.isCopied.set(false), 2500);
    });
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    const subject = encodeURIComponent(this.formData.subject || `Portfolio Message from ${this.formData.name}`);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    );

    // Open mail client
    window.location.href = `mailto:${this.personalInfo.email}?subject=${subject}&body=${body}`;

    this.isSubmitted.set(true);
    setTimeout(() => {
      this.formData = { name: '', email: '', subject: '', message: '' };
      this.isSubmitted.set(false);
    }, 4000);
  }
}
