import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreatTaskDTO, UpdateTaskDTO } from './DTO/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createNewTask(@Body() createTaskDTO: CreatTaskDTO): Task {
    return this.taskService.createNewTask(createTaskDTO);
  }

  @Patch('/:id')
  updateTaskById(
    @Param('id') id: string,
    @Body() updateTaskDTO: UpdateTaskDTO,
  ) {
    return this.taskService.updateTaskById(id, updateTaskDTO);
  }
}
