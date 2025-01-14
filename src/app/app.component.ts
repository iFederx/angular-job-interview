import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

// #region Interfaces (1)

export interface Person {
  // #region Properties (3)

  id: string;
  name: string;
  surname: string;

  // #endregion Properties (3)
}

// #endregion Interfaces (1)

// #region Classes (1)

@Component( {
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
} )
export class AppComponent {
  // #region Properties (2)

  public people: Person[] = [
    { name: 'Mario', surname: 'Rossi', id: '1' },
    { name: 'Paolo', surname: 'Bianchi', id: '2' },
    { name: 'Davide', surname: 'Verdi', id: '3' },
    { name: 'Luca', surname: 'Gialli', id: '4' },
    { name: 'Giuseppe', surname: 'Neri', id: '5' },
    { name: 'Luca', surname: 'Marrone', id: '6' },
    { name: 'Laura', surname: 'Bianchi', id: '7' }
  ]
  public title = 'job-interview-ex1';

  // #endregion Properties (2)
}

// #endregion Classes (1)
