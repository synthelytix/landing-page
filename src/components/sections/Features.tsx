'use client';

import React from 'react';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      icon: { src: '/icons/workflow-analysis.svg', alt: 'Workflow analysis icon' },
      title: 'Workflow Analysis',
      description: 'Identify automation opportunities inside your existing operations.',
    },
    {
      icon: { src: '/icons/custom-design.svg', alt: 'Custom automation design icon' },
      title: 'Custom Automation Design',
      description: 'Built to match your business logic and processes.',
    },
    {
      icon: { src: '/icons/ai-execution.svg', alt: 'AI-powered execution icon' },
      title: 'AI-Powered Execution',
      description: 'Automate repetitive work and data processing reliably.',
    },
    {
      icon: { src: '/icons/system-integration.svg', alt: 'System integration icon' },
      title: 'System Integration',
      description: 'Connect CRMs, databases, APIs, and internal tools.',
    },
    {
      icon: { src: '/icons/human-oversight.svg', alt: 'Human oversight icon' },
      title: 'Human Oversight',
      description: 'Designed for real workflows with human-in-the-loop controls.',
    },
    {
      icon: { src: '/icons/secure-handling.svg', alt: 'Secure data handling icon' },
      title: 'Secure Data Handling',
      description: 'Privacy-first architecture that protects sensitive information.',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#0F0F1A]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-10 left-10 w-64 h-64 opacity-20"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M142.4 54.8C170.4 82.8 185.3 122.5 168.6 150.1C151.9 177.6 103.6 193 66 185.7C28.5 178.4 1.6 148.5 0.1 116.4C-1.4 84.3 22.5 49.9 55.1 29.8C87.6 9.7 117.4 26.8 142.4 54.8Z"
            fill="url(#bg-shape-1)"
          />
          <defs>
            <linearGradient id="bg-shape-1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6067F9" />
              <stop offset="1" stopColor="#5058E8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute bottom-0 right-12 w-72 h-72 opacity-15"
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="110" cy="110" r="90" stroke="#6067F9" strokeWidth="1.5" strokeDasharray="12 12" />
          <circle cx="110" cy="110" r="60" stroke="#6067F9" strokeOpacity="0.5" strokeWidth="1" />
          <circle cx="110" cy="110" r="30" fill="#6067F9" fillOpacity="0.2" />
        </svg>
        <Image
          src="/background-svg/grad-blob-1.svg"
          alt="Decorative gradient background shape"
          width={320}
          height={320}
          className="absolute top-32 -left-20 opacity-30 mix-blend-screen"
        />
        <Image
          src="/background-svg/rings-1.svg"
          alt="Decorative rings background"
          width={360}
          height={360}
          className="absolute -bottom-20 left-1/2 opacity-20 mix-blend-screen"
        />
        <Image
          src="/background-svg/Orbit.svg"
          alt="Decorative orbit graphic"
          width={420}
          height={420}
          className="absolute top-10 right-1/3 opacity-15 mix-blend-lighten"
        />
      </div>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-prompt mb-6">
            A practical automation solution built for real businesses
          </h2>
          <p className="text-lg text-[#7784A0] max-w-2xl mx-auto">
            We don't sell generic software. We build automation systems tailored to your workflows,
            tools, and goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 border border-white/5 rounded-2xl hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon.src}
                  alt={feature.icon.alt}
                  width={48}
                  height={48}
                  className="drop-shadow-lg"
                />
              </div>
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
