import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ScheduleDay {
  date: string;
  events: ScheduleEvent[];
}

export interface ScheduleEvent {
  time: string;
  title: string;
  speaker: string;
  room: string;
}

@Component({
  selector: 'app-schedule',
  standalone: true,                      // 🔥 REQUIRED for standalone components
  templateUrl: './schedule.html',
  styleUrls: ['./schedule.css'],
  imports: [CommonModule]               // 🔥 REQUIRED for *ngFor, *ngIf, pipes
})
export class ScheduleComponent {
  @Input() schedule: ScheduleDay[] = [];
}

