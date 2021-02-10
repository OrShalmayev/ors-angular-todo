import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/user/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './guards/auth.guard';
import { RegisterComponent } from './components/user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavBarComponent,
    EditPageComponent,
    CreatePageComponent,
    TodoCardComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
