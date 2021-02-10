import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';
import * as feather from 'feather-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cardSlide } from 'src/app/animations/card-animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  animations: [cardSlide],
})
export class TodoListComponent implements OnInit {
  unfinished: Observable<Todo[]>;
  finished: Observable<Todo[]>;
  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    //icons
    feather.replace();
    this.todoService.fetchTodos();

    this.finished = this.todoService.todos.pipe(
      map((todos) => todos.filter((todo) => todo.complete === true))
    );
    this.unfinished = this.todoService.todos.pipe(
      map((todos) => todos.filter((todo) => todo.complete === false))
    );
  }
}
