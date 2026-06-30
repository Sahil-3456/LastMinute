import { Target, Calendar, Brain, Bell, Mic, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Intelligent task prioritization',
    description:
      'Scores every task using deadline proximity, importance, effort, and completion risk to bring the most critical work to the top.',
  },
  {
    icon: Calendar,
    title: 'AI scheduling assistance',
    description:
      'Converts vague to-do lists into practical action plans with time blocks, mini-deadlines, and focused work sessions.',
  },
  {
    icon: Brain,
    title: 'Personalized productivity coaching',
    description:
      'Recommends when to start, what to tackle first, and how to break down overwhelming tasks based on urgency and workload.',
  },
  {
    icon: Bell,
    title: 'Context-aware reminders',
    description:
      'Sends intervention-style prompts when risk rises, such as when multiple deadlines cluster or large tasks remain untouched.',
  },
  {
    icon: Mic,
    title: 'Voice-ready assistant flow',
    description:
      'Designed for easy voice integration so users can quickly capture tasks, ask for plans, and get instant AI guidance.',
  },
  {
    icon: TrendingUp,
    title: 'Goal and habit momentum',
    description:
      'Tracks progress trends, completed actions, and consistency to reduce last-minute stress over time.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 md:py-20 px-4 md:px-6">
      <div className="w-full max-w-max mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Core features built for real action
          </h2>
          <p className="text-text-muted max-w-[680px] leading-relaxed">
            This product goes beyond reminders by actively helping users decide,
            schedule, and execute what matters most before deadlines are missed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-line rounded-DEFAULT p-6 shadow-DEFAULT hover:bg-card-strong transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl grid place-items-center mb-5 bg-gradient-to-br from-primary/20 to-primary-2/20 border border-white/10">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}