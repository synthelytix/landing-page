'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Introducing WebGPU Support',
      excerpt: 'Experience faster graphics rendering with our new WebGPU implementation',
      category: 'Features',
      date: 'Dec 10, 2024',
      image: '🎨',
    },
    {
      id: 2,
      title: 'Security Update: Critical Patches',
      excerpt: "We've released critical security patches to protect your browsing",
      category: 'Security',
      date: 'Dec 8, 2024',
      image: '🔐',
    },
    {
      id: 3,
      title: 'Performance Improvements',
      excerpt: 'New optimizations deliver 30% faster page load times',
      category: 'Performance',
      date: 'Dec 5, 2024',
      image: '⚡',
    },
    {
      id: 4,
      title: 'Mobile App Update',
      excerpt: 'iOS and Android versions now sync bookmarks in real-time',
      category: 'Mobile',
      date: 'Dec 1, 2024',
      image: '📱',
    },
    {
      id: 5,
      title: 'Developer Tools Enhancement',
      excerpt: 'Powerful new debugging features for modern web development',
      category: 'Development',
      date: 'Nov 28, 2024',
      image: '🛠️',
    },
    {
      id: 6,
      title: 'Dark Mode Improvements',
      excerpt: 'Better contrast and readability in dark mode across all platforms',
      category: 'UI/UX',
      date: 'Nov 25, 2024',
      image: '🌙',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0F0F1A]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-prompt mb-6">
            Nightly Blog
          </h1>
          <p className="text-lg text-[#7784A0] max-w-2xl mx-auto">
            Stay updated with the latest news, features, and insights from our team
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-[#6067F9]/20 to-transparent flex items-center justify-center text-5xl">
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs px-3 py-1 bg-[#6067F9]/20 text-[#6067F9] rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#7784A0]">{post.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#6067F9] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#7784A0] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button className="text-sm text-[#6067F9] hover:text-[#707AFF] font-medium transition-colors inline-flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
