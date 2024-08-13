import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receipe } from '../../object/Receipe';
import { MyListService } from '../../service/mylist/my-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css'
})
export class MyListComponent {
  public myListService: MyListService;

  myList: Array<Receipe>;
  private subscription: Subscription;

  constructor(listService: MyListService) {
    this.myListService = listService;
    this.myList = this.myListService.getMyReceipesList();
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.myListService.myList$.subscribe(
      (list: Array<Receipe>) => {
        this.myList = list;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  deleteObject(id: number) {
    this.myListService.deleteObjectById(id);
  }
}
