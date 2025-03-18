import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component'; // Import AppComponent
import { TodoComponent } from './todo/todo.component'; // Correct import path for TodoComponent

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, TodoComponent], // Declare AppComponent and TodoComponent
      imports: [FormsModule] // Import FormsModule
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});