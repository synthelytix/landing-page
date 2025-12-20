'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Download() {
  const [activeTab, setActiveTab] = useState('browser');

  const downloadOptions = {
    browser: [
      {
        name: 'Windows (64-bit)',
        version: 'v124.0 Synthelytix',
        size: '92 MB',
        download: '#',
      },
      {
        name: 'macOS (Intel)',
        version: 'v124.0 Synthelytix',
        size: '110 MB',
        download: '#',
      },
      {
        name: 'macOS (Apple Silicon)',
        version: 'v124.0 Synthelytix',
        size: '105 MB',
        download: '#',
      },
      {
        name: 'Linux (x86)',
        version: 'v124.0 Synthelytix',
        size: '88 MB',
        download: '#',
      },
    ],
    mobile: [
      {
        name: 'iOS',
        version: 'v124.0 Synthelytix',
        size: 'App Store',
        download: '#',
      },
      {
        name: 'Android',
        version: 'v124.0 Synthelytix',
        size: 'Google Play',
        download: '#',
      },
      {
        name: 'iPad',
        version: 'v124.0 Synthelytix',
        size: 'App Store',
        download: '#',
      },
    ],
  };

  const currentDownloads =
    activeTab === 'browser' ? downloadOptions.browser : downloadOptions.mobile;

  return (
    <main className="min-h-screen bg-[#0F0F1A]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-prompt mb-6">
            Download Synthelytix
          </h1>
          <p className="text-lg text-[#7784A0] max-w-2xl mx-auto">
            Get the latest nightly build for your platform
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex gap-4 mb-12 border-b border-white/5">
            {['browser', 'mobile'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? 'border-[#6067F9] text-white'
                    : 'border-transparent text-[#7784A0] hover:text-white'
                }`}
              >
                {tab === 'browser' ? '🌐 Browser' : '📱 Mobile'}
              </button>
            ))}
          </div>

          {/* Download Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {currentDownloads.map((option, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 border border-white/5 rounded-2xl hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {option.name}
                    </h3>
                    <p className="text-sm text-[#7784A0]">{option.version}</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-[#7784A0]">
                    {option.size}
                  </span>
                </div>
                <button className="w-full px-6 py-3 bg-[#6067F9] hover:bg-[#5058E8] text-white rounded-lg font-medium transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-6 md:p-8 border border-white/5 rounded-2xl bg-white/[0.02]">
            <h3 className="text-lg font-semibold text-white mb-4">System Requirements</h3>
            <ul className="space-y-2 text-[#7784A0]">
              <li>✓ Windows 10 or later (64-bit)</li>
              <li>✓ macOS 10.15 or later</li>
              <li>✓ Linux with glibc 2.17 or later</li>
              <li>✓ At least 2GB of available disk space</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
