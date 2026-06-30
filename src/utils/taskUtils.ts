import { Task, ActionPlan } from '../types/task';

export function hoursUntil(deadline: string): number {
  const now = new Date();
  const due = new Date(deadline);
  return (due.getTime() - now.getTime()) / (1000 * 60 * 60);
}

export function formatTimeLeft(deadline: string): string {
  const hrs = hoursUntil(deadline);

  if (isNaN(hrs)) return 'No deadline';
  if (hrs < 0) return 'Overdue';

  if (hrs < 1) {
    const mins = Math.max(1, Math.round(hrs * 60));
    return `Due in ${mins} min`;
  }

  if (hrs < 24) return `Due in ${Math.round(hrs)}h`;

  const days = Math.round(hrs / 24);
  return `Due in ${days} day${days > 1 ? 's' : ''}`;
}

export function urgencyScore(deadline: string): number {
  const hrs = hoursUntil(deadline);

  if (isNaN(hrs)) return 20;
  if (hrs <= 0) return 100;
  if (hrs <= 6) return 95;
  if (hrs <= 12) return 85;
  if (hrs <= 24) return 75;
  if (hrs <= 48) return 60;
  if (hrs <= 72) return 50;
  if (hrs <= 168) return 35;
  return 20;
}

export function computeTaskScore(task: Pick<Task, 'deadline' | 'importance' | 'effort'>): number {
  const importance = Number(task.importance) * 14;
  const effort = Number(task.effort) * 6;
  const urgency = urgencyScore(task.deadline);
  return urgency + importance + effort;
}

export function getRiskLevel(deadline: string): string {
  const hrs = hoursUntil(deadline);
  if (hrs <= 0) return 'Critical';
  if (hrs <= 12) return 'High';
  if (hrs <= 48) return 'Elevated';
  return 'Stable';
}

export function getActionPlan(task: Task): ActionPlan {
  const hrs = hoursUntil(task.deadline);
  const effort = Number(task.effort);
  const importance = Number(task.importance);

  let intro = `Focus on "${task.title}" first.`;
  let strategy = '';
  let bullets: string[] = [];

  if (hrs <= 0) {
    strategy = 'This task is overdue, so the best move is immediate recovery action.';
    bullets = [
      'Start a 15-minute rescue sprint right now.',
      'Complete the most submission-critical portion first.',
      'Send an update or partial progress note if external stakeholders are involved.',
    ];
  } else if (hrs <= 12) {
    strategy = 'This deadline is close. Avoid context switching and finish the highest-value deliverable first.';
    bullets = [
      'Block the next uninterrupted work session for this task only.',
      'Ignore lower-impact tasks until the core output is complete.',
      'Use a quick review pass before submission or delivery.',
    ];
  } else if (hrs <= 48) {
    strategy = 'This task is approaching risk. Break it into milestones before it becomes urgent.';
    bullets = [
      'Finish the hardest subtask first while you still have margin.',
      'Set a personal deadline earlier than the actual deadline.',
      'Prepare any files, notes, or dependencies in advance.',
    ];
  } else {
    strategy = 'You still have time, which makes this the best moment for proactive progress.';
    bullets = [
      'Complete a meaningful first chunk today.',
      'Turn the task into 2 to 3 smaller checkpoints.',
      'Schedule a follow-up block to avoid last-minute pressure.',
    ];
  }

  if (effort >= 4) {
    bullets.push('Because this is a heavy task, split it into deep-work blocks with short breaks.');
  }

  if (importance >= 4) {
    bullets.push('Its importance is high, so protect time for it before less critical work.');
  }

  return { intro, strategy, bullets };
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
