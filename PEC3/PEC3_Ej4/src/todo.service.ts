/**
 * @class Service
 *
 * Manages the data of the application.
 */


import { Todo } from "./todo.model";



export class TodoService {
  todos: Todo[] = [];
  onTodoListChanged: (todos: Todo[]) => void = () => {}; 

  constructor() {
    try {
      this.todos = (JSON.parse(localStorage.getItem("todos")!) || []).map(todo => new Todo(todo));
    } catch (error) {
      console.error("Error al analizar los todos desde localStorage:", error);
      this.todos = [];
    }
  }

  bindTodoListChanged(callback: (todos: Todo[])=> void) {
    this.onTodoListChanged = callback;
  }

  _commit(todos) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string): void {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id: string): void {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
