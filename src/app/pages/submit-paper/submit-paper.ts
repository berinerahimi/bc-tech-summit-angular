import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FirebaseService } from '../../core/firebase.service';

@Component({
  selector: 'app-submit-paper',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './submit-paper.html',
  styleUrl: './submit-paper.css'
})
export class SubmitPaper {
  isSubmitting = false;
  submitStatus: string | null = null;

  paper = {
    title: '',
    author: '',
    email: '',
    city: '',
    abstract: '',
    url: ''
  };

  constructor(private firebase: FirebaseService) {}

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      this.submitStatus = 'Please fill out all required fields correctly.';
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = null;

    try {
      await this.firebase.addPaper({
        ...this.paper,
        createdAt: new Date(),
      });

      this.submitStatus = 'Your paper has been submitted successfully 🎉';

      // reset form, city empty
      form.resetForm({ city: '' });

    } catch (err) {
      console.error(err);
      this.submitStatus = 'An error occurred while submitting your paper. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
