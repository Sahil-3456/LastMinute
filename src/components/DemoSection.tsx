import { Task } from '../types/task';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import { AIInsight } from './AIInsight';

interface DemoSectionProps {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onLoadSample: () => void;
  onClearAll: () => void;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function DemoSection({
  tasks,
  onAddTask,
  onLoadSample,
  onClearAll,
  onComplete,
  onDelete,
}: DemoSectionProps) {
  const sortedTasks = [...tasks].sort((a, b) => b.score - a.score);
  const topTask = sortedTasks[0] || null;

  return (
    <section id="demo" className="py-12 md:py-20 px-4 md:px-6">
      <div className="w-full max-w-max mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Interactive productivity demo
          </h2>
          <p className="text-text-muted max-w-[680px] leading-relaxed">
            Add tasks, assign deadlines, and let the AI engine rank them. The app
            also generates a suggested action plan for the top-priority item.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-start">
          <TaskForm
            onAddTask={onAddTask}
            onLoadSample={onLoadSample}
            onClearAll={onClearAll}
          />

          <div className="bg-card border border-line rounded-DEFAULT p-6 shadow-DEFAULT">
            <h3 className="text-xl font-bold mb-2">AI priority board</h3>
            <p className="text-text-muted mb-4">
              Tasks are ranked by a combined score of urgency, impact, and effort.
              The assistant then recommends the best next step.
            </p>

            <TaskList
              tasks={sortedTasks}
              onComplete={onComplete}
              onDelete={onDelete}
            />

            <AIInsight task={topTask} />
          </div>
        </div>
      </div>
    </section>
  );
}