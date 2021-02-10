import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as feather from 'feather-icons';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
})
export class TodoCardComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    feather.replace();
  }

  onDeleteClick() {
    this.todoService.deleteTodo(this.todo);
  }

  onToggleComplete() {
    this.todoService.toggleComplete({
      content: this.todo.content,
      _id: this.todo._id,
      complete: !this.todo.complete,
    });
  }
}
