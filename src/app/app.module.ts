import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { metaReducers } from './shared/meta.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CounterModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/counter', pathMatch: 'full' },
      {
        path: 'counter',
        loadChildren: './counter/counter.module#CounterModule',
      },
    ]),
    StoreModule.forRoot([], { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
