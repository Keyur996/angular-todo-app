import { Todo } from './../../models/todo.model';
import { TodoService } from './../../services/todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  faTrashAlt = faTrashAlt;
  private _sub!: Subscription;

  constructor(public _todoService: TodoService) {}

  ngOnInit(): void {}

  changeCompleted(todo: Todo) {
    this._todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo) {
    this._todoService.deleteTodo(todo);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
