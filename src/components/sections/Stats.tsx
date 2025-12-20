'use client';

import React from 'react';

export default function Stats() {
  const stats = [
    { number: 'Lead Ops', label: 'Lead qualification and automated CRM updates', suffix: '' },
    { number: 'Reporting', label: 'Automated data collection and reporting', suffix: '' },
    { number: 'Support', label: 'Customer support workflow automation', suffix: '' },
    { number: 'Marketing', label: 'Marketing and growth operations automation', suffix: '' },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0F0F1A] to-[#161622]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-prompt mb-6">
            Common automation use cases
          </h2>
          <p className="text-lg text-[#7784A0] max-w-2xl mx-auto">
            Built with reliability and security in mind. Designed for real operational workflows with
            human-in-the-loop controls and secure, privacy-first data handling.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 text-center border border-white/5 rounded-2xl hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#6067F9] mb-3 font-prompt">
                {stat.number}
              </div>
              <p className="text-[#7784A0] text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#6067F9] hover:bg-[#5058E8] text-white rounded-lg font-medium transition-colors text-lg">
            See Use Cases
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
