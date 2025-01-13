import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PeopleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'job-interview-ex1';
  public people: Person[] = [
    { name: 'Mario', surname: 'Rossi' },
    { name: 'Giuseppe', surname: 'Neri' },
    { name: 'Luca', surname: 'Marrone' },
    { name: 'Laura', surname: 'Bianchi' }
  ];
}

export type Person = {
  name: string;
  surname: string;
}