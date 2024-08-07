import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public receipes = [
    {id: 0, name: 'receipe1', description: 'description1', ingredients: 'ingredients1', instructions: 'instructions1'},
    {id: 1, name: 'receipe2', description: 'description2', ingredients: 'ingredients2', instructions: 'instructions2'},
    {id: 2, name: 'receipe3', description: 'description3', ingredients: 'ingredients3', instructions: 'instructions3'}
];

private index = 2;

  getObject() {
    return this.receipes;
  }

  addObject(newObject: any) {
    newObject.id = this.index++;
    console.log(this.index); // Corrected from print to console.log
    this.receipes.push(newObject);
  }

  deleteObjectById(id: number) {
    console.log(id);
    this.receipes = this.receipes.filter((item) => item.id !== id);
    console.log(this.receipes);
  }

  setObject(newObject: any) {
    this.receipes = newObject;
  }
}
