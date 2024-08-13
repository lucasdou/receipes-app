import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receipe } from '../../object/Receipe';
import { MyListService } from '../../service/mylist/my-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css',
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

  exportListInATxtFile() {
    let mapOfIngredients: Map<string, number> = new Map<string, number>();

    this.myList.forEach((item) => {
      item.ingredients.forEach((ingredient) => {
        if (mapOfIngredients.has(ingredient)) {
          const currentValue = mapOfIngredients.get(ingredient);
          if (currentValue !== undefined) {
            mapOfIngredients.set(ingredient, currentValue + 1);
          }
        } else {
          mapOfIngredients.set(ingredient, 1);
        }
      });
    });

    const listOfItemsToBuy: string[] = [];
    mapOfIngredients.forEach((value, key) => {
      listOfItemsToBuy.push(`${key}: ${value}`);
    });

    const fileContent: string = listOfItemsToBuy.join('\n');
    const blob: Blob = new Blob([fileContent], { type: 'text/plain' });
    const url: string = window.URL.createObjectURL(blob);
    const myListTxtFile: HTMLAnchorElement = document.createElement('a');
    myListTxtFile.href = url;
    myListTxtFile.download = 'list.txt';
    document.body.appendChild(myListTxtFile);
    myListTxtFile.click();
    document.body.removeChild(myListTxtFile);
    window.URL.revokeObjectURL(url);
  }
}
