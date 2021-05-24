import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      const { email, password } = this.form.value;

      await this.authService.signUp({ email, password });
      await this.authService.signIn({ email, password });

      // TODO:: remove it and test
      if (!!this.authService.user.value) {
        this.router.navigate(['home']);
      }
    } else {
      alert(this.form.errors);
    }
  }
}
