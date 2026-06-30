import { ArrowRight, Brain, Target, Zap } from 'lucide-react';

interface HeroProps {
  onTryDemo: () => void;
}

export function Hero({ onTryDemo }: HeroProps) {
  return (
    <header className="py-12 md:py-20 px-4 md:px-6">
      <div className="w-full max-w-max mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-full bg-primary/12 border border-primary/30 text-[#d9e3ff] mb-5">
            <Brain className="w-4 h-4" />
            AI-powered productivity companion
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight font-extrabold mb-5">
            Stop missing deadlines before they become emergencies.
          </h1>

          <p className="text-text-muted text-lg leading-relaxed max-w-[660px] mb-6">
            A proactive AI system for students, professionals, and entrepreneurs that
            plans work, prioritizes tasks, predicts urgency, and pushes users toward
            meaningful action — not passive reminders.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={onTryDemo}
              className="flex items-center gap-2 px-5 py-3 rounded-sm font-bold bg-gradient-to-r from-primary to-primary-2 text-[#08101b] shadow-DEFAULT hover:-translate-y-0.5 hover:brightness-105 transition-all"
            >
              Try the interactive demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-card border border-line rounded-lg p-5 shadow-DEFAULT">
              <strong className="block text-2xl mb-2 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary-2" />
                Smart
              </strong>
              <span className="text-text-muted text-sm">
                Prioritizes tasks using urgency, impact, and effort.
              </span>
            </div>
            <div className="bg-card border border-line rounded-lg p-5 shadow-DEFAULT">
              <strong className="block text-2xl mb-2 flex items-center gap-2">
                <Brain className="w-6 h-6 text-primary" />
                Agentic
              </strong>
              <span className="text-text-muted text-sm">
                Suggests the next best action automatically.
              </span>
            </div>
            <div className="bg-card border border-line rounded-lg p-5 shadow-DEFAULT">
              <strong className="block text-2xl mb-2 flex items-center gap-2">
                <Zap className="w-6 h-6 text-warning" />
                Actionable
              </strong>
              <span className="text-text-muted text-sm">
                Breaks large work into deadline-safe steps.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-white/10 to-white-[0.06] border border-line rounded-[28px] p-5 shadow-DEFAULT relative overflow-hidden">
          <div className="absolute -top-[40%] -left-[20%] w-[280px] h-[280px] bg-radial-circle opacity-25 pointer-events-none" />

          <div className="flex gap-2 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="bg-white/[0.06] border border-white/10 rounded-lg p-4">
              <div className="flex justify-between items-center gap-3 mb-3">
                <strong className="text-sm">AI Rescue Dashboard</strong>
                <span className="text-xs px-2.5 py-1 rounded-full text-[#08101b] bg-gradient-to-r from-primary-2 to-[#a5f3dc] font-extrabold">
                  Live Priority Engine
                </span>
              </div>
              <div className="flex justify-between gap-3 items-center text-sm text-text-muted mb-2">
                <span>Interview preparation</span>
                <strong className="text-danger">Due in 14h</strong>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-2" style={{ width: '82%' }} />
              </div>
            </div>

            <div className="bg-white/[0.06] border border-white/10 rounded-lg p-4">
              <strong className="text-sm block mb-2">Suggested next step</strong>
              <p className="text-text-muted text-sm leading-relaxed">
                Spend 25 minutes on high-impact questions, then schedule a 10-minute
                mock interview recap.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-white/10 rounded-lg p-4">
              <strong className="text-sm block mb-2">Context-aware intervention</strong>
              <p className="text-text-muted text-sm leading-relaxed">
                You have 3 pending items due within 48 hours. Completing one medium task
                now prevents tomorrow's overload.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}