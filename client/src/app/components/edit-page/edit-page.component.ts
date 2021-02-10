import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as feather from 'feather-icons';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
})
export class EditPageComponent implements OnInit {
  content = new FormControl('', [Validators.required]);
  todo: Observable<Todo>;
  todoID: string;
  showMessage: boolean = false;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    feather.replace();

    const routeParams = this.route.snapshot.paramMap;
    this.todoID = routeParams.get('id');

  

    //get single todo from param id & populate input value
    this.todo = this.todoService
      .getSingleTodo(this.todoID)
      .pipe(tap((todo) => this.content.patchValue(todo.content)));
  }

  setShowMessage() {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 1700);
  }

 

  onSubmit = () => {
    if (this.content.valid) {
      this.setShowMessage();

      this.todoService.updateTodo({
        content: this.content.value,
        _id: this.todoID,
      });
    }
  };
}
