import { useEffect, useState } from 'react';
import { Col, Layout, Modal, Row } from 'antd';
import { TaskColumn } from './components/TaskColumn';
import { TaskForm } from './components/TaskForm';
import { Task } from './types';

import './App.css';

const { Content } = Layout;

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  }); // 任务列表
  const [isModalVisible, setIsModalVisible] = useState(false); // 是否显示弹窗
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined); // 编辑任务

  /** 新增/编辑任务 */
  const handleAddOrEditTask = (task: Task) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, task]);
    }
    setIsModalVisible(false);
    setEditingTask(undefined);
  };

  /** 删除任务 */
  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /** 修改任务状态 */
  const handleStatusChange = (id: string, status: Task['status']) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)));
  };

  /** 根据状态过滤任务 */
  const filteredTasks = (status: Task['status']) => tasks.filter((task) => task.status === status);

  // 保存任务到 localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Layout className='layout'>
      <Content style={{ padding: '24px' }}>
        <Row gutter={16} style={{ height: 'calc(100vh - 200px)' }}>
          <Col span={8} style={{ height: '100%' }}>
            <TaskColumn
              title="⏰ 计划中"
              tasks={filteredTasks('planned')}
              onAddTask={() => {
                setEditingTask(undefined);
                setIsModalVisible(true);
              }}
              onStatusChange={handleStatusChange}
              onEditTask={(task) => {
                setEditingTask(task);
                setIsModalVisible(true);
              }}
              onDeleteTask={handleDeleteTask}
            />
          </Col>
          <Col span={8} style={{ height: '100%' }}>
            <TaskColumn
              title="⚡️ 进行中"
              tasks={filteredTasks('in-progress')}
              onAddTask={() => {
                setEditingTask(undefined);
                setIsModalVisible(true);
              }}
              onStatusChange={handleStatusChange}
              onEditTask={(task) => {
                setEditingTask(task);
                setIsModalVisible(true);
              }}
              onDeleteTask={handleDeleteTask}
            />
          </Col>
          <Col span={8} style={{ height: '100%' }}>
            <TaskColumn
              title="✅ 已完成"
              tasks={filteredTasks('completed')}
              onAddTask={() => {
                setEditingTask(undefined);
                setIsModalVisible(true);
              }}
              onStatusChange={handleStatusChange}
              onEditTask={(task) => {
                setEditingTask(task);
                setIsModalVisible(true);
              }}
              onDeleteTask={handleDeleteTask}
            />
          </Col>
        </Row>
      </Content>
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
    </Layout>
  );
}

export default App;
