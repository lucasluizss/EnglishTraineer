import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in.component';

const ROUTES: Routes = [{ path: '', component: SignInComponent }];

@NgModule({
  exports: [SignInComponent],
  declarations: [SignInComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class SignInModule {}
