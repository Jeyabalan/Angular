import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentService } from './studentService';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducerToken, reducers } from './app.reducers';
import { HttpClientModule } from '@angular/common/http';
import { StudentEffects } from './student/student.effects';
import { initialState } from './app.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducerToken, { initialState }),
    EffectsModule.forRoot([StudentEffects])
  ],
  providers: [
    StudentService,
    HttpClientModule,
    { provide: reducerToken, useValue: reducers }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
