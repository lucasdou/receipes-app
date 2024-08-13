import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receipe } from '../../object/Receipe';
import { MyListService } from '../../service/mylist/my-list.service';
import { DataService } from '../../service/receipe/data.service';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  public receipesList: Array<Receipe> = new Array<Receipe>();

  public myDataService: DataService;
  public myListService: MyListService;

  constructor(dataService: DataService, listService: MyListService) {
    this.myDataService = dataService
    this.myListService = listService;
    
    this.receipesList = this.myDataService.getReceipesList();
  }

  //Action for receipe list item//

  // Receipe object is created and emitted to the parent component
  requestAddObject() {
    const newReceipe: Receipe = { name: 'receipe1', description: 'description1',  ingredients: ['ingredients1', 'inredient2'], instructions: 'instructions1'};
    this.receipesList = this.myDataService.addObject(newReceipe);
  }

  // Delete request for a receipe with it's id is emitted to the parent component
  requestDeleteObject(id: number) {
    this.myListService.deleteObjectById(id);
    this.receipesList = this.myDataService.deleteObjectById(id);
  }

  //Action for "my list" list item//

  // 
  requestReceipeToMyList(receipe: Receipe) {
    this.myListService.addToMyList(receipe);
  }

  removeReceipeFromMyList(id: number) {
    this.myListService.deleteObjectById(id);
  }

  isInMyList(receipe: Receipe) {
    return this.myListService.getMyReceipesList().includes(receipe);
  }
}
