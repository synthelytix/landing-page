'use client';

import React from 'react';

export default function CTA() {
  return (
    <section className="relative py-20 md:py-32 bg-[#0F0F1A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Large CTA Card */}
        <div className="relative group p-8 md:p-12 lg:p-16 border border-white/10 rounded-3xl bg-gradient-to-br from-[#6067F9]/10 to-transparent overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6067F9]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-prompt">
              Let's automate your operations
            </h2>
            <p className="text-lg text-[#7784A0] max-w-2xl">
              Tell us about your workflow. We'll design an automation that fits your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-8 py-3 bg-[#6067F9] hover:bg-[#5058E8] text-white rounded-lg font-medium transition-colors">
                Start Discussion
              </button>
              <button className="px-8 py-3 border border-white/10 hover:border-white/20 text-white rounded-lg font-medium transition-colors">
                Contact Us
              </button>
            </div>

            {/* Trust Badge */}
            <div className="flex flex-wrap justify-center gap-4 pt-8 text-sm text-[#7784A0]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#6067F9]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Analyze workflows and bottlenecks</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#6067F9]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Design and deploy automation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#6067F9]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Monitor and optimize performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
