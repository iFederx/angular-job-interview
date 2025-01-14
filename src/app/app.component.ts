import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { take, tap } from 'rxjs';

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
    MatIconModule,
    PeopleComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
} )
export class AppComponent {
  constructor(
    private http: HttpClient
  ) {}
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
  public newPersonForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    surname: new FormControl<string>('', Validators.required),
  })

  public addPerson() {
    const newPerson: Person = {
      name: this.newPersonForm.controls['name'].value,
      surname: this.newPersonForm.controls['surname'].value,
      id: this.newPersonForm.controls['name'].value+this.newPersonForm.controls['surname'].value
    };
    this.people.push(newPerson);
    this.newPersonForm.reset();
  }

  public getNewUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    this.http.get(url)
      .pipe(
        take(1),
        tap(resp => {
          if (Array.isArray(resp)) {
            for (const user of resp) {
              const newUser: Person = {
                name: user?.name,
                surname: user?.name,
                id: user?.name
              }

              this.people.push(newUser);
            }
          }
        })
      )
      .subscribe();
  }

  // #endregion Properties (2)
}

// #endregion Classes (1)
