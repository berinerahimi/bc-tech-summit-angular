import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../core/firebase.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  isSubmitting = false;
  error: string | null = null;
  mode: 'login' | 'register' = 'login';

  constructor(private firebase: FirebaseService, private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  onSubmit(form: NgForm) {
    // when fields arent correct: dont event try
    if (form.invalid) {
      this.error = 'Please fill out all required fields.';
      return;
    }

    this.isSubmitting = true;
    this.error = null;

    // choose action depending on mode
    const action =
      this.mode === 'login'
        ? this.firebase.login(this.email, this.password)
        : this.firebase.register(this.email, this.password);

    action
      .then(() => {
        // sucess: continue to destination
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '';
        return this.router.navigateByUrl(returnUrl);
      })
      .catch((err: any) => {
        console.error('Auth error:', err);

        const code = err?.code ?? '';
        const msg = err?.message ?? 'Authentication failed.';

        if (code === 'auth/invalid-credential' || code === 'auth/wrong-password') {
          this.error = 'E-mail or password is incorrect.';
        } else if (code === 'auth/user-not-found') {
          this.error = 'No user found with this e-mail.';
        } else if (code === 'auth/email-already-in-use') {
          this.error = 'This e-mail is already registered.';
        } else if (code === 'auth/invalid-email') {
          this.error = 'Please enter a valid e-mail address.';
        } else {
          this.error = msg;
        }
        // Force UI update in case the callback runs outside Angular
        this.cdr.detectChanges();
      })
      .finally(() => {
        // for sucess and error: reset button
        this.isSubmitting = false;

        // Force UI update in case the callback runs outside Angular
        this.cdr.detectChanges();
      });
  }

  toggleMode() {
    this.mode = this.mode === 'login' ? 'register' : 'login';
    this.error = null;
  }
}
