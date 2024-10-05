import { useState } from 'react';
import { Col, Layout, Modal, Row } from 'antd';
import { TaskColumn } from './components/TaskColumn';
import { TaskForm } from './components/TaskForm';
import { Task } from './types';

import './App.css';

const { Content } = Layout;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);

  const handleAddOrEditTask = () => {
    setIsModalVisible(true);
  };

  return (
    <Layout className='layout'>
      <Content style={{ padding: '24px' }}>
        <Row gutter={16} style={{ height: 'calc(100vh - 200px)' }}>
          <Col span={8} style={{ height: '100%' }}>
            <TaskColumn
              title="⏰ 计划中"
              tasks={[]}
              onAddTask={() => {
                setEditingTask(undefined);
                setIsModalVisible(true);
              }}
              onStatusChange={() => { }}
              onEditTask={(task) => {
                setEditingTask(task);
                setIsModalVisible(true);
              }}
              onDeleteTask={() => { }}
            />
          </Col>
          <Col span={8} style={{ height: '100%' }}>
            <TaskColumn
              title="⚡️ 进行中"
              tasks={[]}
              onAddTask={() => {
                setEditingTask(undefined);
                setIsModalVisible(true);
              }}
              onStatusChange={() => { }}
              onEditTask={(task) => {
                setEditingTask(task);
                setIsModalVisible(true);
              }}
              onDeleteTask={() => { }}
            />
          </Col>
          <Col span={8} style={{ height: '100%' }}>
            <TaskColumn
              title="✅ 已完成"
              tasks={[]}
              onAddTask={() => {
                setEditingTask(undefined);
                setIsModalVisible(true);
              }}
              onStatusChange={() => { }}
              onEditTask={(task) => {
                setEditingTask(task);
                setIsModalVisible(true);
              }}
              onDeleteTask={() => { }}
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
