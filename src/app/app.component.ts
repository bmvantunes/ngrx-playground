import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <h1>Welcome to this ngrx Demo!</h1>
      <a routerLink="/counter/multiple" routerLinkActive="active">Multiple Counter</a>
      <a routerLink="/counter/single" routerLinkActive="active">Single Counter</a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .active {
      background-color: green;
      color: white;
    }
  `]
})
export class AppComponent { }
