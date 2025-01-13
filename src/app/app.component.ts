import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// #region Interfaces (1)

export interface Person {
  // #region Properties (2)

  name: string;
  surname: string;

  // #endregion Properties (2)
}

// #endregion Interfaces (1)

// #region Classes (1)

@Component( {
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
} )
export class AppComponent {
  // #region Properties (2)

  public people: Person[] = [
    { name: 'Mario', surname: 'Rossi' },
    { name: 'Giuseppe', surname: 'Neri' },
    { name: 'Luca', surname: 'Marrone' },
    { name: 'Laura', surname: 'Bianchi' }
  ]
  public title = 'job-interview-ex1';

  // #endregion Properties (2)
}

// #endregion Classes (1)
