import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FirebaseService } from './core/firebase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(
    public firebase: FirebaseService,
    private router: Router
  ) {}

  async logout() {
    await this.firebase.logout();
    this.router.navigate(['/']);   // back to homepage after logout
  }
}
