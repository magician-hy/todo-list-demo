import { useState } from 'react';
import { Modal } from 'antd';
import { TaskColumn } from './components/TaskColumn';
import { TaskForm } from './components/TaskForm';
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);

  const handleAddOrEditTask = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <TaskColumn
        title="计划中"
        tasks={mockTasks}
        onAddTask={handleAddOrEditTask}
        onStatusChange={() => { }}
        onEditTask={handleAddOrEditTask}
        onDeleteTask={() => { }}
      />
      <Modal
        title={editingTask ? "编辑任务" : "添加新任务"}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        footer={null}
      >
        <TaskForm
          task={editingTask}
          onSave={handleAddOrEditTask}
          onCancel={() => {
            setIsModalVisible(false);
          }}
        />
      </Modal>
    </>
  );
}

export default App;
