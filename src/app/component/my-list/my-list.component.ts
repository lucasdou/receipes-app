import { Component, Input } from '@angular/core';
import { Receipe } from '../../object/Receipe';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css',
})
export class MyListComponent {
  myList: Array<Receipe>;
  @Input() myListItem?: Receipe;

  constructor() {
    this.myList = new Array<Receipe>();
  }

  requestAddObject() {
    const newObject: Receipe = {
      id: this.myList.length,
      name: 'receipe1',
      description: 'description1',
      ingredients: ['ingredients1', 'inredient2'],
      instructions: 'instructions1',
    };
    this.myList.push(newObject);
    console.log('deleteObject');
  }

  deleteObject(id: number) {
    console.log('deleteObject', id);
    this.myList = this.myList.filter((item) => item.id !== id);
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
