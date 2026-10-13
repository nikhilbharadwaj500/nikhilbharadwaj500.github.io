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
      title: 'Multi-Tenant Integrations & Scale',
      desc: 'Real-time multi-client sync connecting Cin7, Shopify, MYOB, and CartonCloud 3PL networks.'
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
