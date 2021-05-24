import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [''],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly storageService: StorageService
  ) {}

  ngOnInit(): void {
    if (!!this.authService.user.value) {
      this.router.navigate(['home']);
    }

    const credentials = this.storageService.getSessionItem('remember');

    if (credentials) {
      this.form.patchValue({
        email: credentials.email,
        password: credentials.password,
        remember: true,
      });
    }
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      const { email, password, remember } = this.form.value;

      if (remember) {
        this.storageService.setSessionItem('remember', {
          email,
          password,
        });
      } else {
        this.storageService.removeSessionItem('remember');
      }

      await this.authService.signIn({ email, password });

      // TODO:: remove it and test
      if (!!this.authService.user.value) {
        this.router.navigate(['home']);
      }
    } else {
      alert('Incorrect email or password');
    }
  }

  googleSignIn(): void {
    this.authService.signInWithGoogle();
  }
}
