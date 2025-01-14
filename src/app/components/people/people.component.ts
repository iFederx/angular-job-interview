import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Person } from '../../app.component';

@Component( {
  selector: 'app-people',
  imports: [ CommonModule ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
} )
export class PeopleComponent {
  // #region Properties (1)

  @Input() public people!: Person[];

  // #endregion Properties (1)
}
