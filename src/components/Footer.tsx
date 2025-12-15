'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Download', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Status', href: '#' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'License', href: '#' },
      { label: 'Branding', href: '/branding' },
    ],
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#0F0F1A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              Nightly
            </Link>
            <p className="text-sm text-[#7784A0] leading-relaxed">
              Experience tomorrow's web technology today.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {['Twitter', 'GitHub', 'Discord', 'Reddit'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-[#7784A0] hover:text-white transition-colors"
                  aria-label={social}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#7784A0] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-[#7784A0]">
            © {currentYear} Nightly. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#7784A0] hover:text-white transition-colors">
              Status
            </a>
            <a href="#" className="text-[#7784A0] hover:text-white transition-colors">
              Security
            </a>
            <a href="#" className="text-[#7784A0] hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
