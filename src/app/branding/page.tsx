'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Branding() {
  const brandAssets = [
    {
      title: 'Logo',
      description: 'Official Nightly logo in various formats',
      formats: ['SVG', 'PNG', 'PDF'],
    },
    {
      title: 'Color Palette',
      description: 'Brand colors and approved color combinations',
      formats: ['Adobe CC', 'Figma', 'CSS'],
    },
    {
      title: 'Typography',
      description: 'Font guidelines and usage rules',
      formats: ['Prompt', 'Poppins'],
    },
    {
      title: 'Icons',
      description: 'Complete icon set in multiple sizes',
      formats: ['SVG', 'PNG', 'Icon Font'],
    },
  ];

  const colors = [
    { name: 'Primary', hex: '#6067F9', rgb: 'rgb(96, 103, 249)' },
    { name: 'Secondary', hex: '#707AFF', rgb: 'rgb(112, 122, 255)' },
    { name: 'Dark', hex: '#0F0F1A', rgb: 'rgb(15, 15, 26)' },
    { name: 'Light', hex: '#F7F7F7', rgb: 'rgb(247, 247, 247)' },
  ];

  return (
    <main className="min-h-screen bg-[#0F0F1A]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-prompt mb-6">
            Branding Guidelines
          </h1>
          <p className="text-lg text-[#7784A0] max-w-2xl mx-auto">
            Use our brand assets consistently to maintain a cohesive look and feel
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-12">Logo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] flex items-center justify-center min-h-[200px]"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#6067F9] mb-4">N</div>
                  <p className="text-sm text-[#7784A0]">Logo Variant {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-12">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colors.map((color) => (
              <div key={color.hex} className="space-y-3">
                <div
                  className="h-32 rounded-lg border border-white/10"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <h3 className="font-semibold text-white">{color.name}</h3>
                  <p className="text-sm text-[#7784A0]">{color.hex}</p>
                  <p className="text-xs text-[#7784A0]">{color.rgb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-12">Brand Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandAssets.map((asset, index) => (
              <div
                key={index}
                className="p-6 md:p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {asset.title}
                </h3>
                <p className="text-[#7784A0] mb-4">{asset.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {asset.formats.map((format) => (
                    <span
                      key={format}
                      className="text-xs px-3 py-1 bg-[#6067F9]/20 text-[#6067F9] rounded-full"
                    >
                      {format}
                    </span>
                  ))}
                </div>
                <button className="text-[#6067F9] hover:text-[#707AFF] font-medium text-sm transition-colors inline-flex items-center gap-2">
                  Download Assets
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-12">Usage Guidelines</h2>
          <div className="space-y-4">
            <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
              <h3 className="font-semibold text-white mb-2">✓ Do's</h3>
              <ul className="space-y-2 text-[#7784A0] text-sm">
                <li>• Use the primary blue (#6067F9) for all interactive elements</li>
                <li>• Maintain clear space around the logo</li>
                <li>• Use approved fonts (Prompt for headings, Poppins for body)</li>
                <li>• Ensure sufficient contrast for accessibility</li>
              </ul>
            </div>
            <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
              <h3 className="font-semibold text-white mb-2">✗ Don'ts</h3>
              <ul className="space-y-2 text-[#7784A0] text-sm">
                <li>• Don't modify or distort the logo</li>
                <li>• Don't use unauthorized colors</li>
                <li>• Don't apply gradient effects to the logo</li>
                <li>• Don't use the logo at sizes smaller than 64px</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
