import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent} from './recipes/component/list-item/list-item.component';
import { MyListComponent } from './recipes/component/my-list/my-list.component';
import { NavbarComponent } from './recipes/component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemComponent, MyListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'recipes-app';
}
