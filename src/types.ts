/** 任务类型 */
export type Task = {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed';
  createdAt: number;
  priority: number;
};