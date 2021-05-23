import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppNavComponent } from './app-nav.component';

@NgModule({
  exports: [AppNavComponent],
  declarations: [AppNavComponent],
  imports: [
    CommonModule,

  ],
})
export class AppNavModule {}
