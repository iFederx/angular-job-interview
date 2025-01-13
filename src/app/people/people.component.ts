import { Component, Input } from '@angular/core';
import { Person } from '../app.component';
import { CommonModule } from '@angular/common';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    CommonModule,
    PersonComponent
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {
  @Input() people: Person[] = [];

  public deletePerson(index: number) {
    this.people.splice(index, 1);
  }
}
