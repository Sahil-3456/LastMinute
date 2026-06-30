import { useState, useEffect } from 'react';
import { Task } from './types/task';
import { computeTaskScore, generateId } from './utils/taskUtils';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DemoSection } from './components/DemoSection';
import { Architecture } from './components/Architecture';
import { Footer } from './components/Footer';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleAddTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleLoadSample = () => {
    const now = new Date();

    const sampleTasks: Omit<Task, 'id' | 'score' | 'completed' | 'createdAt'>[] = [
      {
        title: 'Prepare interview answers',
        deadline: new Date(now.getTime() + 14 * 60 * 60 * 1000).toISOString().slice(0, 16),
        importance: 5,
        effort: 3,
        category: 'Interview',
        notes: 'Focus on behavioral answers, project discussion, and final revision.',
      },
      {
        title: 'Pay electricity bill',
        deadline: new Date(now.getTime() + 36 * 60 * 60 * 1000).toISOString().slice(0, 16),
        importance: 4,
        effort: 1,
        category: 'Payment',
        notes: 'Avoid late fee and keep utility account in good standing.',
      },
      {
        title: 'Finish startup pitch deck',
        deadline: new Date(now.getTime() + 72 * 60 * 60 * 1000).toISOString().slice(0, 16),
        importance: 5,
        effort: 5,
        category: 'Project',
        notes: 'Complete problem, solution, market, and traction slides.',
      },
    ];

    const newTasks = sampleTasks.map((taskData) => ({
      ...taskData,
      id: generateId(),
      score: computeTaskScore(taskData),
      completed: false,
      createdAt: new Date(),
    }));

    setTasks(newTasks);
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  const handleComplete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleTryDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-text font-sans bg-gradient-radial">
      <Navbar activeSection={activeSection} />
      <Hero onTryDemo={handleTryDemo} />
      <Features />
      <DemoSection
        tasks={tasks}
        onAddTask={handleAddTask}
        onLoadSample={handleLoadSample}
        onClearAll={handleClearAll}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
      <Architecture />
      <Footer />
    </div>
  );
}

export default App;
