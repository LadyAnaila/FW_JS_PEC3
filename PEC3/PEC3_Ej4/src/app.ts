import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { TodoView } from "./todo.views";

const app = new TodoController(new TodoService(), new TodoView());