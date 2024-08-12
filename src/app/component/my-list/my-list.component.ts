import { Component, Input } from '@angular/core';
import { Receipe } from '../../object/Receipe';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css'
})
export class MyListComponent {
  myList: Array<Receipe>;
  @Input() myListItem?: Receipe;

  constructor() {
    this.myList = new Array<Receipe>();
  }

  requestAddObject() {
    const newObject: Receipe = { id: this.myList.length, name: 'receipe1', description: 'description1', ingredients: ['ingredients1', 'inredient2'], instructions: 'instructions1'};
    this.myList.push(newObject);
    console.log('deleteObject');
  }
}
