import { Injectable, NotFoundException } from '@nestjs/common';
import { STATUS_TASK, Task, tasks } from './tasks.model';
import {
  CreatTaskDTO,
  ResponseUpdateTaskDTO,
  UpdateTaskDTO,
} from './DTO/tasks.dto';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class TasksService {
  getAllTasks(): Task[] {
    return tasks;
  }

  getTaskById(id: string): Task {
    const task = tasks.find((task) => task.id === id);
    if (!task) {
      // Throwing a NotFoundException instead of returning a string
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  createNewTask(createTaskDTO: CreatTaskDTO): Task {
    const { title, desc, value } = createTaskDTO;
    const valueNumber = Number(value);

    const newTask: Task = {
      id: uuid4(),
      value: valueNumber,
      title,
      desc,
      status: STATUS_TASK.OPEN,
    };

    tasks.push(newTask);

    return newTask;
  }

  updateTaskById(
    id: string,
    updateTaskDTO: UpdateTaskDTO,
  ): ResponseUpdateTaskDTO {
    const { value, title, desc, status } = updateTaskDTO;

    const task: Task = tasks.find((task) => task.id === id);

    if (!task) {
      throw new Error('Task not found');
    }

    const updateTask = {
      update_id: id,
      update_task: {
        value,
        title,
        desc,
        status,
      },
      old_task: {
        value: task.value,
        title: task.title,
        desc: task.desc,
        status: task.status,
      },
    };

    task.value = value ?? task.value;
    task.title = title ?? task.title;
    task.desc = desc ?? task.desc;
    task.status = status ?? task.status;

    return updateTask;
  }

  deleteTaskById(id: string): Task {
    const leftOverTasks = tasks.filter((task) => task.id !== id);
    const deleteTask = tasks.find((task) => task.id === id);
    tasks.length = 0;
    tasks.push(...leftOverTasks);

    return deleteTask;
  }
}
