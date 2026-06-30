import { useState } from 'react';
import { Plus, Layers, Trash2 } from 'lucide-react';
import { Task, TaskFormData } from '../types/task';
import { computeTaskScore, generateId } from '../utils/taskUtils';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
  onLoadSample: () => void;
  onClearAll: () => void;
}

export function TaskForm({ onAddTask, onLoadSample, onClearAll }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [importance, setImportance] = useState('3');
  const [effort, setEffort] = useState('3');
  const [category, setCategory] = useState('Assignment');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Please enter a task title.');
      return;
    }

    if (!deadline) {
      alert('Please select a deadline.');
      return;
    }

    const taskData: TaskFormData = {
      title: title.trim(),
      deadline,
      importance: Number(importance),
      effort: Number(effort),
      category,
      notes: notes.trim(),
    };

    const task: Task = {
      ...taskData,
      id: generateId(),
      score: computeTaskScore(taskData),
      completed: false,
      createdAt: new Date(),
    };

    onAddTask(task);

    setTitle('');
    setDeadline('');
    setImportance('3');
    setEffort('3');
    setCategory('Assignment');
    setNotes('');
  };

  return (
    <div className="bg-card border border-line rounded-DEFAULT p-6 shadow-DEFAULT">
      <h3 className="text-xl font-bold mb-2">Create a task</h3>
      <p className="text-text-muted mb-5">
        Enter a task below to simulate how the assistant prioritizes and responds proactively.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="taskTitle" className="block text-sm text-[#d6ddfa] mb-2 font-bold">
            Task title
          </label>
          <input
            id="taskTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Finish machine learning assignment"
            className="w-full border border-line bg-white/[0.06] text-text rounded-sm px-4 py-3 outline-none focus:border-primary/65 focus:ring-4 focus:ring-primary/15 transition-all"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="taskDeadline" className="block text-sm text-[#d6ddfa] mb-2 font-bold">
              Deadline
            </label>
            <input
              id="taskDeadline"
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full border border-line bg-white/[0.06] text-text rounded-sm px-4 py-3 outline-none focus:border-primary/65 focus:ring-4 focus:ring-primary/15 transition-all"
            />
          </div>

          <div>
            <label htmlFor="taskPriority" className="block text-sm text-[#d6ddfa] mb-2 font-bold">
              Importance
            </label>
            <select
              id="taskPriority"
              value={importance}
              onChange={(e) => setImportance(e.target.value)}
              className="w-full border border-line bg-white/[0.06] text-text rounded-sm px-4 py-3 outline-none focus:border-primary/65 focus:ring-4 focus:ring-primary/15 transition-all"
            >
              <option value="5">Critical</option>
              <option value="4">High</option>
              <option value="3">Medium</option>
              <option value="2">Low</option>
              <option value="1">Very Low</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="taskEffort" className="block text-sm text-[#d6ddfa] mb-2 font-bold">
              Estimated effort
            </label>
            <select
              id="taskEffort"
              value={effort}
              onChange={(e) => setEffort(e.target.value)}
              className="w-full border border-line bg-white/[0.06] text-text rounded-sm px-4 py-3 outline-none focus:border-primary/65 focus:ring-4 focus:ring-primary/15 transition-all"
            >
              <option value="1">Quick — under 30 min</option>
              <option value="2">Light — 30 to 60 min</option>
              <option value="3">Moderate — 1 to 3 hours</option>
              <option value="4">Heavy — 3 to 6 hours</option>
              <option value="5">Deep work — 6+ hours</option>
            </select>
          </div>

          <div>
            <label htmlFor="taskCategory" className="block text-sm text-[#d6ddfa] mb-2 font-bold">
              Category
            </label>
            <select
              id="taskCategory"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-line bg-white/[0.06] text-text rounded-sm px-4 py-3 outline-none focus:border-primary/65 focus:ring-4 focus:ring-primary/15 transition-all"
            >
              <option>Assignment</option>
              <option>Meeting</option>
              <option>Interview</option>
              <option>Payment</option>
              <option>Project</option>
              <option>Habit</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="taskNotes" className="block text-sm text-[#d6ddfa] mb-2 font-bold">
            Notes
          </label>
          <textarea
            id="taskNotes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Need final slides, summary notes, and submission check."
            rows={3}
            className="w-full border border-line bg-white/[0.06] text-text rounded-sm px-4 py-3 outline-none focus:border-primary/65 focus:ring-4 focus:ring-primary/15 transition-all resize-y min-h-[110px]"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-3 rounded-sm font-bold bg-gradient-to-r from-primary to-primary-2 text-[#08101b] shadow-DEFAULT hover:-translate-y-0.5 hover:brightness-105 transition-all"
          >
            <Plus className="w-4 h-4" />
            Add task
          </button>
          <button
            type="button"
            onClick={onLoadSample}
            className="flex items-center gap-2 px-5 py-3 rounded-sm font-bold bg-white/6 text-text border border-line hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            <Layers className="w-4 h-4" />
            Load sample tasks
          </button>
          <button
            type="button"
            onClick={onClearAll}
            className="flex items-center gap-2 px-5 py-3 rounded-sm font-bold bg-white/6 text-text border border-line hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            <Trash2 className="w-4 h-4" />
            Clear all
          </button>
        </div>
      </form>
    </div>
  );
}