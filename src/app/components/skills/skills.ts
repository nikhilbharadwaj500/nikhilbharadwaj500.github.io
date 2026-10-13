import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_CATEGORIES } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  readonly skillCategories = SKILL_CATEGORIES;
}
