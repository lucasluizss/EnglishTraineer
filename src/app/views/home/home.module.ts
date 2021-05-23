import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const ROUTES: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  exports: [HomeComponent],
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
