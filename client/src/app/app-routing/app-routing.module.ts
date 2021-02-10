import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { EditPageComponent } from '../components/edit-page/edit-page.component';
import { CreatePageComponent } from '../components/create-page/create-page.component';
import { LoginComponent } from '../components/user/login/login.component';
import { AuthGuardService } from '../guards/auth.guard';
import { RegisterComponent } from '../components/user/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit/:id',
    component: EditPageComponent,
    data: { animation: 'isLeft' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'create',
    component: CreatePageComponent,
    data: { animation: 'isRight' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animation: 'isRight' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
