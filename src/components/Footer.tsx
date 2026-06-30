import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 text-text-muted">
      <div className="w-full max-w-max mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-4 p-5 bg-white/[0.05] border border-line rounded-lg">
          <div>
            <div className="flex items-center gap-2 text-text font-bold mb-1">
              <Zap className="w-4 h-4 text-primary-2" />
              The Last-Minute Life Saver
            </div>
            <div className="text-sm">AI that turns deadline panic into structured action.</div>
          </div>
          <div className="text-sm">
            <span className="text-text font-bold">Built for impact, agentic depth, and usability.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
