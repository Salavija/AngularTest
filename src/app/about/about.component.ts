import { Component, OnInit } from '@angular/core';
import {Model, TodoItem} from './model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // implements OnInit
  model = new Model();

  // constructor() { }
  //
  // ngOnInit() {
  // }

  getName() {
    return this.model.user;
  }
  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }
  addItem(newItem) {
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }


}
