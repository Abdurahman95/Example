import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
model = new Model ();

getName(){
  return this.model.user;
}

getTodoItems(){
  return this.model.items.filter(function(item) {return !item.done});
}

addItem(newItem){
  if (newItem != ""){
    this.model.items.push(new TodoItem(newItem , false));
  }
}
  constructor() { 

  }

  ngOnInit() {
  }

}
