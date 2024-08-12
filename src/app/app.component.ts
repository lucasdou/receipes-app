import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent } from './component/list-item/list-item.component';
import { DataService } from './service/data.service';
import { MyListComponent } from './component/my-list/my-list.component';
import { Receipe } from './object/Receipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemComponent, MyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'receipes-app';

  public myDataService: DataService;
  public receipesList: Array<Receipe>;

  constructor(private dataService: DataService) {
    this.myDataService = this.dataService;
    this.receipesList = this.dataService.getReceipesList();
  }

  addObject(newReceipe: Receipe) {
    this.receipesList = this.myDataService.addObject(newReceipe);
  }

  deleteObject(id: number) {
    this.receipesList = this.myDataService.deleteObjectById(id);
  }
}
