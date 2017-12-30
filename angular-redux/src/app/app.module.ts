import { BrowserModule} from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentService } from './studentService';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducerToken, { initialState }),
    StoreDevtoolsModule.instrument(),
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
