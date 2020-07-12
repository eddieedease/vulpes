import {
  BrowserModule
} from '@angular/platform-browser';
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
  DatePipe
} from '@angular/common';



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
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VulserService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
