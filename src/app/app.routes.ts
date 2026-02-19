import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Munich } from './pages/munich/munich';
import { Prishtina } from './pages/prishtina/prishtina';
import { Login } from './pages/login/login';
import { SubmitPaper } from './pages/submit-paper/submit-paper';
import { Tickets } from './pages/tickets/tickets';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', component: Home },                     // Homepage
  { path: 'munich', component: Munich },
  { path: 'prishtina', component: Prishtina },
  { path: 'login', component: Login },

  // Submit Paper only for logged-in users
  { path: 'submit-paper', component: SubmitPaper, canActivate: [authGuard] },
  { path: 'tickets', component: Tickets, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }                     // Fallback
];
