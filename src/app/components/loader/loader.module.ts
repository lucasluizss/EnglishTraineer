import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderComponent } from './loader.component';

@NgModule({
  exports: [LoaderComponent],
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
})
export class LoaderModule {}
