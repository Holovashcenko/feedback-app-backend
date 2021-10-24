import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private tasksRepo: Repository<Task>) {}
  create(body: any) {
    const newTask = this.tasksRepo.create(body);
    return this.tasksRepo.save(newTask);
  }
}
