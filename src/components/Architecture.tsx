import { Cloud, Server, Database, Calendar, Zap, Globe } from 'lucide-react';

const techStack = [
  { name: 'Gemini API', icon: Zap },
  { name: 'Firebase Auth', icon: Server },
  { name: 'Firestore', icon: Database },
  { name: 'Firebase Hosting', icon: Globe },
  { name: 'Cloud Functions', icon: Cloud },
  { name: 'Google Calendar API', icon: Calendar },
  { name: 'Cloud Run', icon: Cloud },
];

export function Architecture() {
  return (
    <section id="architecture" className="py-12 md:py-20 px-4 md:px-6">
      <div className="w-full max-w-max mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Suggested Google technology stack
          </h2>
          <p className="text-text-muted max-w-[680px] leading-relaxed">
            If you want to present this as a hackathon-ready solution, this is a
            strong architecture narrative for the judges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-card border border-line rounded-DEFAULT p-6 shadow-DEFAULT">
            <h3 className="text-xl font-bold mb-4">Proposed architecture</h3>
            <p className="text-text-muted leading-relaxed mb-5">
              The frontend captures tasks, deadlines, and user context. Gemini powers
              prioritization explanations, task breakdowns, and conversational planning.
              Firebase stores users, tasks, reminders, and completion history.
              Calendar integration syncs deadlines and available time windows.
            </p>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-line text-[#dbe3ff] text-sm font-bold"
                >
                  <tech.icon className="w-4 h-4 text-primary" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card border border-line rounded-DEFAULT p-6 shadow-DEFAULT">
            <h3 className="text-xl font-bold mb-4">Why judges may like this</h3>
            <p className="text-text-muted leading-relaxed">
              It is practical, clearly useful, easy to understand, and shows strong
              agentic potential. The product demonstrates how AI can help users make
              better decisions and finish work instead of merely notifying them.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-text-muted">Clear problem-solution fit</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary-2" />
                <span className="text-text-muted">Agentic AI approach</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-text-muted">Real-world applicability</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-warning" />
                <span className="text-text-muted">Technical depth with simplicity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}