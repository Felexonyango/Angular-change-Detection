import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestAComponent } from './modules/test-a/test-a.component';
import { TestBComponent } from './modules/test-b/test-b.component';


@NgModule({
  declarations: [
    AppComponent,
    TestAComponent,
    TestBComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({}),
    FormlyBootstrapModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [,],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
