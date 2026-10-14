import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  readonly personalInfo = PERSONAL_INFO;

  pillars = [
    {
      icon: 'layers',
      title: 'Full-Stack Architecture',
      desc: 'Reactive Angular SPAs coupled with robust Java Spring Boot and PostgreSQL microservices.'
    },
    {
      icon: 'zap',
      title: 'Multi-Client & Multi-Auth Systems',
      desc: 'Resilient multi-client data routing paired with dynamic multi-auth strategies (OAuth2, Md5Query, MultiHeaderAuth, HMAC).'
    },
    {
      icon: 'activity',
      title: 'Cloud Infrastructure & Secrets',
      desc: 'Automated Render deployments, secure API secrets, Docker containers, and dedicated SFTP servers.'
    },
    {
      icon: 'check-circle',
      title: 'Full Ownership & Agile Delivery',
      desc: 'End-to-end technical leadership from zero-to-one codebase architecture through agile Trello sprints.'
    }
  ];
}
