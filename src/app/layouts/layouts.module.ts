import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MainLayoutComponent } from './main/main.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { PublicLayoutComponent } from './public/public.component';

@NgModule({
  declarations: [AppNavComponent, MainLayoutComponent, PublicLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
})
export class LayoutsModule {}
