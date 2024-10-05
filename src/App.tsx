import { TaskColumn } from './components/TaskColumn';
import { Task } from './types';

import './App.css';

// 模拟任务数据
const mockTasks: Task[] = [
  {
    id: '1',
    title: '任务1',
    description: '任务1描述',
    status: 'planned',
    createdAt: Date.now(),
    priority: 1,
  },
  {
    id: '2',
    title: '任务2',
    description: '任务2描述',
    status: 'in-progress',
    createdAt: Date.now(),
    priority: 2,
  },
]

function App() {
  return (
    <>
      <TaskColumn
        title="计划中"
        tasks={mockTasks}
        onAddTask={() => { }}
        onStatusChange={() => { }}
        onEditTask={() => { }}
        onDeleteTask={() => { }}
      />
    </>
  );
}

export default App;
