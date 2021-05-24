import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from '@services/auth.service';
import { ModuleService } from '@services/module.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css'],
})
export class AppNavComponent implements OnInit {
  user: string;
  list: any;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly authService: AuthService,
    private readonly moduleService: ModuleService
  ) {}

  ngOnInit() {
    this.user =
      this.authService.user.value?.name ?? this.authService.user.value?.email;

    this.moduleService.all().subscribe((res) => {
      this.list = res.map((item: any) => ({
        ...item.payload.doc.data(),
        id: item.payload.doc.id,
      }));
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
