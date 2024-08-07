import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public receipes = [
    {name: 'receipe1', description: 'description1', ingredients: 'ingredients1', instructions: 'instructions1'},
    {name: 'receipe2', description: 'description2', ingredients: 'ingredients2', instructions: 'instructions2'},
    {name: 'receipe3', description: 'description3', ingredients: 'ingredients3', instructions: 'instructions3'}
];

  getObject() {
    return this.receipes;
  }

  addObject(newObject: any) {
    this.receipes.push(newObject);
  }

  setObject(newObject: any) {
    this.receipes = newObject;
  }
}
