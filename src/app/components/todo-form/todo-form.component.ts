import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  title: string = '';
  constructor(
    private _todoService: TodoService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  addTodo(title: string) {
    if (title.trim() !== '') {
      const todo: Todo = {
        id: uuidv4(),
        title: title,
        isCompleted: false,
        date: new Date(),
      };

      console.log(todo, title);
      this._todoService.addTodo(todo);
      this._toastr.success('Todo added Successfully');
    } else {
      this._toastr.warning('Title cannot be empty');
    }
    this.title = '';
  }
}
