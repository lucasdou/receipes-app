import { Injectable } from '@angular/core';
import { Recipe } from '../../object/Recipe';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public recipesList: Array<Recipe>;

  constructor() {
    this.recipesList = [
      {
        id: 0,
        name: 'Recipe 1',
        description: 'Description1',
        ingredients: ['ingredients1', 'inredient2'],
        instructions: 'instructions1',
      },
      {
        id: 1,
        name: 'Recipe 2',
        description: 'Description2',
        ingredients: ['ingredients2', 'inredient3'],
        instructions: 'instructions2',
      },
      {
        id: 2,
        name: 'Recipe 3',
        description: 'Description3',
        ingredients: ['ingredients1', 'inredient3'],
        instructions: 'instructions3',
      },
    ];
  }

  getRecipesList() {
    return this.recipesList;
  }

  addObject(newRecipe: Recipe) : Array<Recipe>{
    newRecipe.id = this.recipesList.length
    this.recipesList.push(newRecipe);
    return this.recipesList;
  }

  deleteObjectById(id: number) : Array<Recipe>{
    this.recipesList = this.recipesList.filter((item) => item.id !== id);
    return this.recipesList;
  }
}
