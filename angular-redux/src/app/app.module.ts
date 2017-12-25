import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentService } from './studentService';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './app.effects';
import { StoreModule } from '@ngrx/store';
import { student, studentInfo, reducerToken } from './app.reducers';
import { HttpClientModule } from '@angular/common/http';

Object.assign(reducerToken, student);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(studentInfo),
    EffectsModule.forRoot([StudentEffects])
  ],
  providers: [
    StudentService,
    HttpClientModule,
    { provide: reducerToken, useValue: studentInfo }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
