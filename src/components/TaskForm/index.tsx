import { FC, useEffect } from "react";
import { Form, Input, Select, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '@/types';

import './index.css';

type Props = {
  task?: Task;
  onSave: (task: Task) => void;
  onCancel: () => void;
}

const { TextArea } = Input;
const { Option } = Select;

/** 新增/编辑任务表单 */
export const TaskForm: FC<Props> = ({
  task,
  onSave,
  onCancel,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(task || { priority: 1, status: 'planned' });
  }, [form, task]);

  const handleSubmit = (values: any) => {
    onSave({
      id: task?.id || uuidv4(),
      ...values,
      createdAt: task?.createdAt || Date.now(),
    });
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item name="title" label="任务标题" rules={[{ required: true, message: '请输入任务标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="任务描述">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item name="priority" label="优先级">
        <Select>
          <Option value={1}>低</Option>
          <Option value={2}>中</Option>
          <Option value={3}>高</Option>
        </Select>
      </Form.Item>
      <Form.Item name="status" label="状态">
        <Select>
          <Option value="planned">计划中</Option>
          <Option value="in-progress">进行中</Option>
          <Option value="completed">已完成</Option>
        </Select>
      </Form.Item>
      <div className="task-form-btn">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
          <Button onClick={onCancel} style={{ marginLeft: 8 }}>
            取消
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};