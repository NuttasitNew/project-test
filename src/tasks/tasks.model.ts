export interface Task {
  id: string;
  value: number;
  title: string;
  desc: string;
  status: STATUS_TASK;
}

export enum STATUS_TASK {
  OPEN = 'OPEN',
  IN_PROCESS = 'IN_PROCESS',
  DONE = 'DONE',
}

export const tasks: Task[] = [
  {
    id: '1',
    value: 5,
    title: 'Learn something',
    desc: 'Do it every day',
    status: STATUS_TASK.DONE,
  },
  {
    id: '2',
    value: 12,
    title: 'Exercise',
    desc: 'Go for a run',
    status: STATUS_TASK.OPEN,
  },
  {
    id: '3',
    value: 7,
    title: 'Read a book',
    desc: 'Read at least 20 pages',
    status: STATUS_TASK.IN_PROCESS,
  },
  {
    id: '4',
    value: 3,
    title: 'Practice coding',
    desc: 'Solve a coding problem',
    status: STATUS_TASK.OPEN,
  },
  {
    id: '5',
    value: 8,
    title: 'Cook a meal',
    desc: 'Try a new recipe',
    status: STATUS_TASK.DONE,
  },
  {
    id: '6',
    value: 14,
    title: 'Meditate',
    desc: 'Spend 10 minutes meditating',
    status: STATUS_TASK.DONE,
  },
];
