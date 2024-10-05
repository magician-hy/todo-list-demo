import { FC } from "react";
import { Button, Popconfirm, Select, Space, Tag, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Task } from "@/types";

import "./index.css";

type Props = {
  task: Task;
  onStatusChange: (id: string, status: Task['status']) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const { Text, Paragraph } = Typography;
const { Option } = Select;

/** 任务组件 */
export const TaskItem: FC<Props> = ({ task, onStatusChange, onEdit, onDelete }) => {
  const priorityColors = ['green', 'orange', 'red'];
  const priorityLabels = ['低', '中', '高'];

  return (
    <div className="task-item">
      <div className="task-item-title">
        <Text strong style={{ fontSize: '16px' }}>{task.title}</Text>
        <Tag color={priorityColors[task.priority - 1]}>
          优先级: {priorityLabels[task.priority - 1]}
        </Tag>
      </div>
      <Paragraph
        ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
        style={{ marginBottom: '8px' }}
      >
        {task.description}
      </Paragraph>
      <Space>
        <Select
          value={task.status}
          onChange={(value) => onStatusChange(task.id, value)}
          style={{ width: 120 }}
        >
          <Option value="planned">计划中</Option>
          <Option value="in-progress">进行中</Option>
          <Option value="completed">已完成</Option>
        </Select>
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => onEdit(task)}
          >
            编辑
          </Button>
          <Popconfirm
            title="确定要删除这个任务吗？"
            onConfirm={() => onDelete(task.id)}
            okText="是"
            cancelText="否"
          >
            <Button icon={<DeleteOutlined />} danger>
              删除
            </Button>
          </Popconfirm>
        </Space>
      </Space>
    </div>
  );
};