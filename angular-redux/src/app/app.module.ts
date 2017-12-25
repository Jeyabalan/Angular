import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentService } from './studentService';
import { EffectsModule } from '@ngrx/effects/src/effects_module';
import { StudentEffects } from './app.effects';
import { StoreModule } from '@ngrx/store/src/store_module';
import { student, studentInfo } from './app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([StudentEffects]),
    StoreModule.forRoot(studentInfo)
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
