import { Component } from '@angular/core';

import { LoaderService } from './loader.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'loader',
  template: '<mat-spinner *ngIf="loading | async"></mat-spinner>',
})
export class LoaderComponent {
  public readonly loading = this.loaderService.isLoading;
  constructor(private readonly loaderService: LoaderService) {}
}
