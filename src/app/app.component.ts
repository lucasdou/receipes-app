import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent } from './component/list-item/list-item.component';
import { DataService } from './service/receipe/data.service';
import { MyListComponent } from './component/my-list/my-list.component';
import { Receipe } from './object/Receipe';
import { NavbarComponent } from './navbar/navbar.component';
import { MyListService } from './service/mylist/my-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemComponent, MyListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'receipes-app';
}
