import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'receipes-app';
  public myDataService : any;
  public myData : any;


constructor(private dataService: DataService) {}

ngOnInit(): void {
  this.myDataService = this.dataService;
  this.myData = this.dataService.getObject();
}

addObject(newObject: any) {
  this.myDataService.addObject(newObject);
}
}


