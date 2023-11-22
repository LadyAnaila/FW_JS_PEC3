/**
 * @class View
 *
 * Visual representation of the model.
 */

export class TodoView {
  private app: HTMLElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private submitButton: HTMLButtonElement;
  private title: HTMLHeadingElement;
  private todoList: HTMLUListElement;
  private _temporaryTodoText: string;

  

  constructor() {
    this.app = this.getElement("#root");
    this.form = this.createElement("form") as HTMLFormElement;
    this.input = this.createElement("input") as HTMLInputElement;
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    this.submitButton = this.createElement("button") as HTMLButtonElement;
    this.submitButton.textContent = "Submit";
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement("h1") as HTMLInputElement;
    this.title.textContent = "Todos";
    this.todoList = this.createElement("ul", "todo-list") as HTMLUListElement;
    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText = "";
    this._initLocalListeners();
  }

private  get _todoText() {
    return this.input.value;
  }

  private  _resetInput() {
    this.input.value = "";
  }

  private  createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }

  private  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

public displayTodos(todos: any[]) {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create nodes
      todos.forEach(todo => {
        const li = this.createElement("li");
        li.id = todo.id;
      
        const checkbox = this.createElement("input") as HTMLInputElement;  // Explicit cast to HTMLInputElement
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;
      
        const span = this.createElement("span") as HTMLSpanElement;  // Explicit cast to HTMLSpanElement
        span.contentEditable = "true";
        span.classList.add("editable");
      
        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }
      
        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);
      
        // Append nodes
        this.todoList.append(li);
      });
          }

    // Debugging
    console.log(todos);
  }

  _initLocalListeners(): void {
    this.todoList.addEventListener("input", (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.className === "editable") {
        this._temporaryTodoText = target.innerText;
      }
    });
  }
  
  public bindAddTodo(handler) {
    this.form.addEventListener("submit", event => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  
  public bindDeleteTodo(handler: (id: any) => void): void {
    this.todoList.addEventListener("click", (event) => {
      const target = event.target as HTMLButtonElement;
      if (target.className === "delete" && target.parentElement) {
        const id = target.parentElement.id;

        if (id) {
          handler(id);
        }
      }
    });
  }


public bindEditTodo(handler): void {
  this.todoList.addEventListener("focusout", (event: Event) => {
    const target = event.target as HTMLElement;
    if (this._temporaryTodoText && target.parentElement) {
      const id = target.parentElement.id;
      handler(id, this._temporaryTodoText);
      this._temporaryTodoText = "";
    }
  });
}


public bindToggleTodo(handler): void {
  this.todoList.addEventListener("change", (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (target && target.type === "checkbox" && target.parentElement) {
      const id = target.parentElement.id;

      handler(id);
    }
  });
}
}
