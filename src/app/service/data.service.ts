import { Injectable } from '@angular/core';
import { Receipe } from '../object/Receipe';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public receipesList: Array<Receipe>;

  constructor() {
    this.receipesList = [
      {
        id: 0,
        name: 'receipe1',
        description: 'description1',
        ingredients: ['ingredients1', 'inredient2'],
        instructions: 'instructions1',
      },
      {
        id: 1,
        name: 'receipe2',
        description: 'description2',
        ingredients: ['ingredients2', 'inredient3'],
        instructions: 'instructions2',
      },
      {
        id: 2,
        name: 'receipe3',
        description: 'description3',
        ingredients: ['ingredients1', 'inredient3'],
        instructions: 'instructions3',
      },
    ];
  }

  getReceipesList() {
    return this.receipesList;
  }

  addObject(newReceipe: Receipe) {
    newReceipe.id = this.receipesList.length
    this.receipesList.push(newReceipe);
    return this.receipesList;
  }

  deleteObjectById(id: number) {
    this.receipesList = this.receipesList.filter((item) => item.id !== id);
    return this.receipesList;
  }
}
