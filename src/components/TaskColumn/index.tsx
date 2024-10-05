import { FC } from "react";
import { Button, Card, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { TaskItem } from "@/components/TaskItem";
import { Task } from "@/types";

type Props = {
  title: string;
  tasks: Task[];
  onAddTask: () => void;
  onStatusChange: (id: string, status: Task['status']) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

/** 任务栏组件 */
export const TaskColumn: FC<Props> = ({
  title,
  tasks,
  onAddTask,
  onStatusChange,
  onEditTask,
  onDeleteTask,
}) => {
  return (
    <Card
      title={title}
      extra={
        <Button type="primary" icon={<PlusOutlined />} onClick={onAddTask}>
          添加任务
        </Button>
      }
      bodyStyle={{
        height: 'calc(100% - 58px)', // 减去卡片头部的高度
        overflowY: 'auto', // 添加垂直滚动
        padding: '0 16px' // 减少内边距以增加可用空间
      }}
    >
      <List
        dataSource={tasks}
        renderItem={(task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        )}
      />
    </Card>
  );
};