import { TaskItem } from './components/TaskItem';
import { Task } from './types';

import './App.css';

// 模拟任务数据
const mockTask: Task = {
  id: '1',
  title: '任务1',
  description: '任务1描述',
  status: 'planned',
  createdAt: Date.now(),
  priority: 1,
}

function App() {
  return (
    <>
      <TaskItem
        task={mockTask}
        onStatusChange={() => { }}
        onEdit={() => { }}
        onDelete={() => { }}
      />
    </>
  );
}

export default App;
