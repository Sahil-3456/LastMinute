import { Sparkles } from 'lucide-react';
import { Task } from '../types/task';
import { getActionPlan } from '../utils/taskUtils';

interface AIInsightProps {
  task: Task | null;
}

export function AIInsight({ task }: AIInsightProps) {
  if (!task) {
    return (
      <div className="bg-white/[0.05] border border-white/10 rounded-lg p-5 mt-4">
        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary-2" />
          AI action plan
        </h4>
        <p className="text-text-muted">
          No tasks yet. Add a task or load sample tasks to see the assistant in action.
        </p>
      </div>
    );
  }

  const plan = getActionPlan(task);

  return (
    <div className="bg-white/[0.05] border border-white/10 rounded-lg p-5 mt-4">
      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary-2" />
        AI action plan
      </h4>
      <p className="mb-3">
        <strong className="text-text">{plan.intro}</strong>{' '}
        <span className="text-text-muted">{plan.strategy}</span>
      </p>
      <ul className="space-y-2 pl-5">
        {plan.bullets.map((bullet, index) => (
          <li key={index} className="text-text-muted list-disc">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
