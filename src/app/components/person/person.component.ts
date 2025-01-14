import { Component, Input } from '@angular/core';
import { Person } from '../../app.component';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input() person!: Person;
}
