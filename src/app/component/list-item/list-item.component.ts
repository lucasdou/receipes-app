import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receipe } from '../../object/Receipe';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() receipesList: Array<Receipe>;
  @Output() addObjectRequest = new EventEmitter<Receipe>();
  @Output() deleteObjectRequest = new EventEmitter<number>();

  constructor() {
    this.receipesList = new Array<Receipe>();
  }

  requestAddObject() {
    const newObject: Receipe = { name: 'receipe1', description: 'description1',  ingredients: ['ingredients1', 'inredient2'], instructions: 'instructions1'};
    this.addObjectRequest.emit(newObject);
  }

  requestDeleteObject(id: number) {
    this.deleteObjectRequest.emit(id);
  }
}
