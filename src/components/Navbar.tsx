import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'features', label: 'Features' },
    { id: 'demo', label: 'Live Demo' },
    { id: 'architecture', label: 'Architecture' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/60 border-b border-line">
      <div className="w-full max-w-max mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between min-h-[74px] gap-5">
          <div className="flex items-center gap-3 font-extrabold tracking-tight">
            <img src="logo.png" alt="Logo" className="w-20   h-20" />

            <span className="text-sm md:text-base">The Last-Minute Life Saver</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-5 text-text-muted text-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors hover:text-text ${
                  activeSection === link.id ? 'text-text' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-muted hover:text-text"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-text-muted text-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-2 transition-colors hover:text-text ${
                  activeSection === link.id ? 'text-text' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
