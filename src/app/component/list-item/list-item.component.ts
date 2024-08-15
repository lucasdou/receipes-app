import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../object/Recipe';
import { MyListService } from '../../service/mylist/my-list.service';
import { DataService } from '../../service/recipe/data.service';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  public RecipesList: Array<Recipe> = new Array<Recipe>();

  public myDataService: DataService;
  public myListService: MyListService;

  constructor(dataService: DataService, listService: MyListService) {
    this.myDataService = dataService
    this.myListService = listService;
    
    this.RecipesList = this.myDataService.getRecipesList();
  }

  //Action for Recipe list item//

  // Recipe object is created and emitted to the parent component
  requestAddObject() {
    const newRecipe: Recipe = { name: 'Recipe1', description: 'description1',  ingredients: ['ingredients1', 'inredient2'], instructions: 'instructions1'};
    this.RecipesList = this.myDataService.addObject(newRecipe);
  }

  // Delete request for a Recipe with it's id is emitted to the parent component
  requestDeleteObject(id: number) {
    this.myListService.deleteObjectById(id);
    this.RecipesList = this.myDataService.deleteObjectById(id);
  }

  //Action for "my list" list item//

  // 
  requestRecipeToMyList(Recipe: Recipe) {
    this.myListService.addToMyList(Recipe);
  }

  removeRecipeFromMyList(id: number) {
    this.myListService.deleteObjectById(id);
  }

  isInMyList(Recipe: Recipe) {
    return this.myListService.getMyRecipesList().includes(Recipe);
  }
}
