import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Juan';
  animales: string[] = [
    'Perro',
    'Gato',
    'Cocodrilo',
    'Oso',
    'Pato',
    'Leon',
    'Tiburon'
  ]
}
