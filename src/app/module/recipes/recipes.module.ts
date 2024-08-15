import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListComponent } from './component/my-list/my-list.component';
import { ListItemComponent } from './component/list-item/list-item.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RecipeService } from './service/recipe/recipe.service';
import { MyListService } from './service/mylist/my-list.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MyListComponent,
    ListItemComponent,
    NavbarComponent
  ],
  providers: [
    RecipeService,
    MyListService
  ]
})
export class RecipesModule { }
