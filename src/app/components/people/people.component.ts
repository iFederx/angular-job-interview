import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Person } from '../../app.component';
import { PersonComponent } from '../person/person.component';

@Component( {
  selector: 'app-people',
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

  public deletePerson(id: string) {
    const indexToDelete = this.people.findIndex(p => p.id === id);
    if (indexToDelete > -1) {
      this.people.splice(indexToDelete, 1);
    }
  }

  // #endregion Properties (1)
}
