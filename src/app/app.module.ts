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

import {
  NgxDatatableModule
} from '@swimlane/ngx-datatable';



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
import {
  WysigComponent
} from './wysig/wysig.component';
import { AdminComponent } from './admin/admin.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {
  NgxUploaderModule
} from 'ngx-uploader';
// ngx bootstrap comps imports
import {
  TypeaheadModule
} from 'ngx-bootstrap/typeahead';
import {
  AccordionModule
} from 'ngx-bootstrap/accordion';
import {
  ModalModule
} from 'ngx-bootstrap/modal';
import {
  ProgressbarModule
} from 'ngx-bootstrap/progressbar';
import {
  CarouselModule
} from 'ngx-bootstrap/carousel';
import {
  NgxPaginationModule
} from 'ngx-pagination';
import {
  ColorPickerModule
} from 'ngx-color-picker';
import {
  CollapseModule
} from 'ngx-bootstrap/collapse';
import {
  TabsModule
} from 'ngx-bootstrap/tabs';
import {
  AlertModule
} from 'ngx-bootstrap/alert';
import {
  DpDatePickerModule
} from 'ng2-date-picker';
import {
  BsDatepickerModule
} from 'ngx-bootstrap/datepicker';

import {
  PageNotFoundComponent
} from './page-not-found/page-not-found.component';
// CUSTOM WYSIG PIPE
import {
  WysigPipe
} from './wysig-pipe.pipe';


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
    component: PageNotFoundComponent
  }
];

registerLocaleData(localeNl,'nl');

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    EditorComponent,
    WysigComponent,
    AdminComponent,
    PageNotFoundComponent,
    WysigPipe
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
   /*  CKEditorModule, */
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxLoadingModule.forRoot({}),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AlertModule.forRoot(),
    TypeaheadModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgxUploaderModule,
    DpDatePickerModule,
    ColorPickerModule,
    NgxDatatableModule,
    NgxPaginationModule
  ],
  providers: [VulserService, CookieService, DatePipe, WysigPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
