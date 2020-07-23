import {
  BrowserModule
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgModule
} from '@angular/core';

import {
  HttpClientModule
} from '@angular/common/http';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  FormsModule
} from '@angular/forms';

import {
  DatePipe, registerLocaleData 
} from '@angular/common';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { CookieService } from 'ngx-cookie-service';

import { NgxLoadingModule } from 'ngx-loading';

import localeNl from '@angular/common/locales/nl';
import {
  VulserService
} from './vulser.service';

import {
  AppComponent
} from './app.component';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  SiteComponent
} from './site/site.component';
import {
  EditorComponent
} from './editor/editor.component';
import { AdminComponent } from './admin/admin.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

const appRoutes: Routes = [
  {
    path: 'site',
    component: SiteComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    redirectTo: '/site/',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: SiteComponent
  }
];

registerLocaleData(localeNl,'nl');

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    EditorComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {
        useHash: false,
        onSameUrlNavigation: 'reload'
      }, // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxLoadingModule.forRoot({}),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  providers: [VulserService, CookieService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
