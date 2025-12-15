'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-32 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-b from-[#6067F9]/20 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-[#6067F9]/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-gradient-to-l from-[#6067F9]/15 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <span className="w-2 h-2 bg-[#6067F9] rounded-full" />
            <span className="text-xs md:text-sm text-[#7784A0]">
              Latest version available
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-prompt leading-tight">
              <span className="bg-gradient-to-b from-[#F7F7F7] to-[#7784A0] bg-clip-text text-transparent">
                Experience Tomorrow
              </span>
              <br />
              <span className="text-[#6067F9]">Today</span>
            </h1>

            <p className="text-base md:text-lg text-[#7784A0] max-w-2xl mx-auto leading-relaxed">
              Get early access to the latest browser and mobile features. Nightly builds keep you
              on the cutting edge of web technology.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 bg-[#6067F9] hover:bg-[#5058E8] text-white rounded-lg font-medium transition-colors">
              Download Browser
            </button>
            <button className="px-8 py-3 border border-white/10 hover:border-white/20 text-white rounded-lg font-medium transition-colors">
              Download Mobile
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {['Latest Features', 'Bleeding Edge', 'Open Source', 'Cross Platform'].map((feature) => (
              <div
                key={feature}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-[#DFDFDF] hover:bg-white/10 transition-colors"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-[#7784A0]">
          <span className="text-xs">Scroll to explore</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
