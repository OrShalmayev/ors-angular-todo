import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as feather from 'feather-icons';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
})
export class CreatePageComponent implements OnInit {
  content = new FormControl('', [Validators.required]);
  showMessage: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    feather.replace();

    
  }

  setShowMessage() {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }

  onSubmit() {
    if (this.content.valid) {
      this.todoService.addTodo({ content: this.content.value });
      this.content.reset();
      this.setShowMessage();
    }
  }
}
