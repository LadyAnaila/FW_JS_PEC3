/**
 * @class Model
 *
 * Manages the data of the application.
 */


export class Todo {
  id: string;
  text: string;
  complete: boolean;

  constructor({ text, complete }: { text: string; complete?: boolean } = { text: '', complete: false }) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete || false;
  }

  private uuidv4(): string {
    return Date.now().toString();
  }
}

export type Todos = Todo[];
