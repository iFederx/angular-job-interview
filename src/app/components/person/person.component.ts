import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../app.component';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-person',
  imports: [
    MatIcon,
    MatIconButton
  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input() person!: Person;
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter();

  public deletePerson(id: string) {
    this.deleteEvent.emit(id);
  }
}
