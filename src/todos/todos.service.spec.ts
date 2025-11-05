import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todos.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Belajar NestJS', status: 'pending' },
    { id: 2, title: 'Kerjakan tugas', status: 'done' },
    { id: 3, title: 'Belajar html', status: 'done' },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo)
      throw new NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
    return todo;
  }

  create(todo: Todo): Todo {
    const newTodo = { ...todo, id: this.todos.length + 1 };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, updatedTodo: Partial<Todo>): Todo {
    const todo = this.findOne(id);
    Object.assign(todo, updatedTodo);
    return todo;
  }

  remove(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1)
      throw new NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
    this.todos.splice(index, 1);
  }
}
