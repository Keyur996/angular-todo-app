import { Todo } from './../models/todo.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Learn PHP',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '222',
        title: 'Learn React',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '333',
        title: 'Learn Angular',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo): void {
    this.todos.map((t) => {
      if (t.id === todo.id) t.isCompleted = !t.isCompleted;
    });
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) this.todos.splice(index, 1);
  }
}
