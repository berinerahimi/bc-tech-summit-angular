import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Speaker {
  name: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-speakers',
  standalone: true,
  templateUrl: './speakers.html',
  styleUrls: ['./speakers.css'],
  imports: [CommonModule]
})
export class SpeakersComponent {
  @Input() speakers: Speaker[] = [];
}
