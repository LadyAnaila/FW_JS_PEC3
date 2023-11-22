/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

import { TodoService } from "./todo.service";
import { TodoView } from "./todo.views";

export class TodoController {
  view: TodoView;
  service: TodoService;

  onTodoListChanged: (todos: any) => void;
  handleAddTodo: (todoText: any) => void;
  handleEditTodo: (id: any, todoText: any) => void;
  handleDeleteTodo: (id: any) => void;
  handleToggleTodo: (id: any) => void;

  constructor(service: TodoService, view: TodoView) {
    this.service = service;
    this.view = view;

    // Bind methods
    this.onTodoListChanged = (todos) => {
      this.view.displayTodos(todos);
    };

    this.handleAddTodo = (todoText) => {
      this.service.addTodo(todoText);
    };

    this.handleEditTodo = (id, todoText) => {
      this.service.editTodo(id, todoText);
    };

    this.handleDeleteTodo = (id) => {
      this.service.deleteTodo(id);
    };

    this.handleToggleTodo = (id) => {
      this.service.toggleTodo(id);
    };

    // Bind events after methods are defined
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Initial display of todos
    this.onTodoListChanged(this.service.todos);
  }
}
