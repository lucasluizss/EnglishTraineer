import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.navigate(['user']);
  }

  onSubmit(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
