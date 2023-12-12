import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'



@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <h1>Aula de Services</h1>
      <app-card></app-card>
      <router-outlet></router-outlet>
  `,
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CardComponent, HttpClientModule, FormsModule]
})
export class AppComponent {
  title = 'angular-pokedex';
}
