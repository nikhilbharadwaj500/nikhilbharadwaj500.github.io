import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACHIEVEMENTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss'
})
export class AchievementsComponent {
  readonly achievements = ACHIEVEMENTS;
}
