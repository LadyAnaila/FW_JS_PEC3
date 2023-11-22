"use strict";
/**
 * @class Model
 *
 * Manages the data of the application.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
var Todo = /** @class */ (function () {
    function Todo(_a) {
        var _b = _a === void 0 ? { text: '', complete: false } : _a, text = _b.text, complete = _b.complete;
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete || false;
    }
    Todo.prototype.uuidv4 = function () {
        return Date.now().toString();
    };
    return Todo;
}());
exports.Todo = Todo;
