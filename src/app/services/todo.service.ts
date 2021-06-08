import { Todo } from './../models/todo.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {
    this.todos = this.getData('todos');
  }

  getTodos() {
    return this.getData('todos');
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.setData('todos', this.todos);
  }

  changeStatus(todo: Todo): void {
    this.todos.map((t) => {
      if (t.id === todo.id) t.isCompleted = !t.isCompleted;
    });
    this.setData('todos', this.todos);
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.setData('todos', this.todos);
    }
  }

  private getData(key: string) {
    let data = JSON.parse(localStorage.getItem(key)!);
    return data ? data : [];
  }

  private setData(key: string, value: Todo[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
