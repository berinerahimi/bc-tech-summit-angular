import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FirebaseService } from './firebase.service';

export const authGuard: CanActivateFn = (route, state) => {
  const firebase = inject(FirebaseService);
  const router = inject(Router);

  if (firebase.currentUser()) return true;

  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
