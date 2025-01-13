import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Person } from '../app.component';
import { PersonComponent } from '../person/person.component';

@Component( {
  selector: 'app-people',
  standalone: true,
  imports: [
    CommonModule,
    PersonComponent
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
} )
export class PeopleComponent {
  // #region Properties (1)

  @Input() public people!: Person[];

  // #endregion Properties (1)

  // #region Public Methods (1)

  public deletePerson( index: number ) {
    this.people.splice( index, 1 );
  }

  // #endregion Public Methods (1)
}
