import { Injectable } from '@angular/core';
import { Receipe } from '../../object/Receipe';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyListService {

  public myReceipesList: Array<Receipe> = new Array<Receipe>();

  private myListSubject = new BehaviorSubject<Receipe[]>(this.myReceipesList);

  myList$ = this.myListSubject.asObservable();


  getMyReceipesList() {
    return this.myReceipesList;
  }

  addToMyList(receipe: Receipe) : Array<Receipe> {
    this.myReceipesList.push(receipe);
    this.myListSubject.next(this.myReceipesList);
    return this.myReceipesList;
  }

  deleteObjectById(id: number) : Array<Receipe>{
    this.myReceipesList = this.myReceipesList.filter((item) => item.id !== id);
    this.myListSubject.next(this.myReceipesList);
    return this.myReceipesList;
  }
}
