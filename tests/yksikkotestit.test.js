import { describe, expect, it } from 'vitest';
import { createTask } from '../public/taskStore.js';

describe('createTask', () => {
  it('creates a new task with the supplied details and timestamps', () => {
    const task = createTask(
      {
        topic: 'Write tests',
        priority: 'high',
        status: 'todo',
        description: 'Check the unit test setup',
      },
      12345,
    );

    expect(task).toMatchObject({
      topic: 'Write tests',
      priority: 'high',
      status: 'todo',
      description: 'Check the unit test setup',
      completed: false,
      createdAt: 12345,
      updatedAt: 12345,
    });
    expect(task.id).toMatch(/^t_/);
  });
});