export interface Task {
  id: string;
  title: string;
  deadline: string;
  importance: number;
  effort: number;
  category: string;
  notes: string;
  score: number;
  completed: boolean;
  createdAt: Date;
}

export type TaskFormData = Omit<Task, 'id' | 'score' | 'completed' | 'createdAt'>;

export interface ActionPlan {
  intro: string;
  strategy: string;
  bullets: string[];
}
