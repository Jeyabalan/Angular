import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentService } from './studentService';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './app.effects';
import { StoreModule } from '@ngrx/store';
import { student, studentInfo } from './app.reducers';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
