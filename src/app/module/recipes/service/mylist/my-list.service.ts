import { Injectable } from '@angular/core';
import { Recipe } from '../../object/Recipe';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyListService {

  public myRecipesList: Array<Recipe> = new Array<Recipe>();

  private myListSubject = new BehaviorSubject<Recipe[]>(this.myRecipesList);

  myList$ = this.myListSubject.asObservable();


  getMyRecipesList() {
    return this.myRecipesList;
  }

  addToMyList(Recipe: Recipe) : Array<Recipe> {
    this.myRecipesList.push(Recipe);
    this.myListSubject.next(this.myRecipesList);
    return this.myRecipesList;
  }

  deleteObjectById(id: number) : Array<Recipe>{
    this.myRecipesList = this.myRecipesList.filter((item) => item.id !== id);
    this.myListSubject.next(this.myRecipesList);
    return this.myRecipesList;
  }
}
