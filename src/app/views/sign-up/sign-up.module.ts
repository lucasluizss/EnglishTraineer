import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [{ path: '', component: SignUpComponent }];

@NgModule({
  exports: [SignUpComponent],
  declarations: [SignUpComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class SignUpModule {}
