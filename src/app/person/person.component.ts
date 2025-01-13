import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../app.component';

@Component( {
  selector: 'app-person',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
} )
export class PersonComponent {
  // #region Properties (2)

  @Output() public deleteEvent: EventEmitter<boolean> = new EventEmitter();
  @Input() public person!: Person;

  // #endregion Properties (2)

  // #region Public Methods (1)

  public deletePerson() {
    this.deleteEvent.emit( true );
  }

  // #endregion Public Methods (1)
}
