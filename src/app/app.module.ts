import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { OneSmartComponent } from 'app/one-smart.component';
import { AppComponent } from './app.component';
import { metaReducers } from './meta.reducer';
import { MultipleSmartComponent } from './multiple-smart.component';
import { OneDummyComponent } from './one-dummy.component';
import { counterArrayReducer, counterReducer } from './reducer';

@NgModule({
  declarations: [
    OneDummyComponent,
    OneSmartComponent,
    MultipleSmartComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
      counterArray: counterArrayReducer
    }, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
