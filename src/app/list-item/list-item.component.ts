import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() data: any;
  @Output() addObjectRequest = new EventEmitter<any>();

  requestAddObject() {
    const newObject = { name: 'receipe1', description: 'description1', ingredients: 'ingredients1', instructions: 'instructions1'};
    this.addObjectRequest.emit(newObject);
  }
}
