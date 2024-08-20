import { STATUS_TASK } from '../tasks.model';

export interface CreatTaskDTO {
  value: number;
  title: string;
  desc: string;
}

export interface UpdateTaskDTO {
  value: number;
  title: string;
  desc: string;
  status: STATUS_TASK;
}

export interface ResponseUpdateTaskDTO {
  update_id: string;
  update_task: UpdateTaskDTO;
  old_task: UpdateTaskDTO;
}
