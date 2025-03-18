import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component'; // Import TodoComponent

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent // Declare TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }