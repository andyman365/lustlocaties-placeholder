'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import MetricsStrip from '@/components/MetricsStrip';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={darkMode ? 'dark' : ''}>
      {/* Background */}
      <div className="min-h-screen bg-neutral-900 dark:bg-neutral-900 transition-colors duration-300">
        {/* Hero Background with Overlay */}
        <div 
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/80" />

          {/* Top Navigation */}
          <nav className="relative z-10 flex justify-between items-center px-container py-6 max-w-container-lg mx-auto w-full">
            <div className="text-primary-500 font-serif text-2xl font-bold">Lust</div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-full bg-glass glass text-neutral-200 hover:text-primary-400 transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-container py-section text-center">
            {/* Main Title */}
            <h1 className="font-serif text-hero-lg md:text-hero-lg text-neutral-50 mb-6 glow-text-primary max-w-4xl leading-tight">
              Find Your Perfect Private Escape
            </h1>

            {/* Subtitle with Script Styling */}
            <div className="mb-12 relative inline-block">
              <div className="absolute -top-4 left-0 right-0 h-1 bg-gradient-secondary rounded-full blur-md opacity-60" />
              <p className="font-script text-xl md:text-2xl text-secondary-400 glow-text-secondary relative z-10 tracking-wide">
                Where privacy meets passion
              </p>
            </div>

            {/* Descriptive Subtitle */}
            <p className="text-lg md:text-lg text-neutral-300 max-w-2xl mb-12 leading-relaxed">
              Discover vetted accommodations perfect for couples seeking discreet, judgment-free comfort. 
              Privacy-rated stays with verified amenities.
            </p>

            {/* Search Bar Component */}
            <SearchBar />

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
              <div className="text-neutral-400 text-sm mb-2">Scroll to explore</div>
              <svg 
                className="w-6 h-6 animate-bounce text-primary-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Strip Section */}
      <MetricsStrip />
    </main>
  );
}
