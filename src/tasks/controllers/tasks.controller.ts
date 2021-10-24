import { Body, Controller, Post } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';

@Controller('api/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body() body: any) {
    return this.tasksService.create(body);
  }
}
