import { Check, Trash2 } from 'lucide-react';
import { Task } from '../types/task';
import { formatTimeLeft, getRiskLevel, hoursUntil } from '../utils/taskUtils';

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onComplete, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-text-muted text-center py-8">
        No tasks yet. Add a task or load sample tasks to see the assistant in action.
      </p>
    );
  }

  return (
    <div className="space-y-3 mt-4">
      {tasks.map((task) => {
        const isUrgent = hoursUntil(task.deadline) <= 24;

        return (
          <div
            key={task.id}
            className={`bg-white/[0.06] border rounded-lg p-4 space-y-2 ${
              isUrgent
                ? 'border-danger/40 shadow-[inset_0_0_0_1px_rgba(255,123,138,0.12)]'
                : 'border-white/10'
            }`}
          >
            <div className="flex justify-between items-start gap-3 flex-wrap">
              <strong className="text-sm font-semibold">{task.title}</strong>
              <span className="text-sm font-extrabold px-3 py-1.5 rounded-full text-[#08101b] bg-gradient-to-r from-warning to-[#ffe89e]">
                Score {task.score}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1.5 rounded-full bg-white/[0.08] text-[#dce5ff] border border-white/10">
                {task.category}
              </span>
              <span className="text-xs px-2.5 py-1.5 rounded-full bg-white/[0.08] text-[#dce5ff] border border-white/10">
                {formatTimeLeft(task.deadline)}
              </span>
              <span className="text-xs px-2.5 py-1.5 rounded-full bg-white/[0.08] text-[#dce5ff] border border-white/10">
                Risk: {getRiskLevel(task.deadline)}
              </span>
              <span className="text-xs px-2.5 py-1.5 rounded-full bg-white/[0.08] text-[#dce5ff] border border-white/10">
                Importance: {task.importance}/5
              </span>
              <span className="text-xs px-2.5 py-1.5 rounded-full bg-white/[0.08] text-[#dce5ff] border border-white/10">
                Effort: {task.effort}/5
              </span>
            </div>

            <p className="text-sm text-text-muted">
              {task.notes || 'No notes added.'}
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => onComplete(task.id)}
                className="flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-sm border border-line bg-white/[0.05] text-text hover:bg-white/10 transition-colors"
              >
                <Check className="w-4 h-4 text-success" />
                Mark complete
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-sm border border-line bg-white/[0.05] text-text hover:bg-white/10 transition-colors"
              >
                <Trash2 className="w-4 h-4 text-danger" />
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}