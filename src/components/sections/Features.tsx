'use client';

import React from 'react';

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our latest optimizations',
    },
    {
      icon: '🔐',
      title: 'Enhanced Security',
      description: 'Your privacy and security are our top priority',
    },
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Beautiful and intuitive user interface',
    },
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'Stay ahead with cutting-edge web technologies',
    },
    {
      icon: '🔄',
      title: 'Regular Updates',
      description: 'New features and improvements every week',
    },
    {
      icon: '📱',
      title: 'Cross Platform',
      description: 'Seamlessly sync across all your devices',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#0F0F1A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-prompt mb-6">
            Powerful Features
          </h2>
          <p className="text-lg text-[#7784A0] max-w-2xl mx-auto">
            Everything you need for the best browsing experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 border border-white/5 rounded-2xl hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#F7F7F7]">
                {feature.title}
              </h3>
              <p className="text-[#7784A0] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
