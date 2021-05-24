import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { environment } from '../environments/environment';
import { LoaderModule } from './components/loader/loader.module';
import { AppHttpInterceptor } from './app.http.interceptor';
import { LoaderInterceptor } from './components/loader/loader.interceptor';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    LoaderModule,
    LayoutsModule,
    HttpClientModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {
      initialNavigation: 'enabled',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
