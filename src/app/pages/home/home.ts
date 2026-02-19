import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousel } from './carousel/carousel';
import { Sessions } from './sessions/sessions';
import { Statistics } from './statistics/statistics';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel, Sessions, Statistics, RouterLink],   // <<--- ADD THIS
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit, OnDestroy {

  // ------------------- TIMER -------------------
  countdown: string = '';
  private intervalId: any;

  private readonly targetDate = new Date('Dec 19 , 2025 14:37:25').getTime();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance <= 0) {
      this.countdown = 'EXPIRED';
      clearInterval(this.intervalId);
      this.cdr.detectChanges();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    this.cdr.detectChanges();
  }

}


