"use strict";
/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
var TodoController = /** @class */ (function () {
    function TodoController(service, view) {
        var _this = this;
        this.service = service;
        this.view = view;
        // Bind methods
        this.onTodoListChanged = function (todos) {
            _this.view.displayTodos(todos);
        };
        this.handleAddTodo = function (todoText) {
            _this.service.addTodo(todoText);
        };
        this.handleEditTodo = function (id, todoText) {
            _this.service.editTodo(id, todoText);
        };
        this.handleDeleteTodo = function (id) {
            _this.service.deleteTodo(id);
        };
        this.handleToggleTodo = function (id) {
            _this.service.toggleTodo(id);
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
    return TodoController;
}());
exports.TodoController = TodoController;
