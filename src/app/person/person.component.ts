import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input() person: Person | undefined;
  @Output() deleteEvent!: EventEmitter<boolean>;

  public deletePerson() {
    this.deleteEvent.emit(true);
  }
}
