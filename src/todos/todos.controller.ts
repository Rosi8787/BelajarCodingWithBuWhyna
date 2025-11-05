import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TodoService } from './todos.service';
import { Todo } from './todos.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodoService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(Number(id));
  }

  @Post()
  create(@Body() todo: Todo) {
    return this.todosService.create(todo);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() todo: Partial<Todo>) {
    return this.todosService.update(Number(id), todo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(Number(id));
  }
}
