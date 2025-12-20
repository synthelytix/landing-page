'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Automation Plans', href: '#' },
      { label: 'Workflow Design', href: '#' },
      { label: 'Implementation', href: '#' },
      { label: 'Ongoing Support', href: '#' },
    ],
    Resources: [
      { label: 'Process Overview', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Pricing Guide', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Insights', href: '/blog' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Compliance', href: '/branding' },
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
              <span className="inline-flex items-center gap-3">
                <Image src="/synthelytix-mark.svg" alt="Synthelytix logo" width={36} height={36} />
                <span>Synthelytix</span>
              </span>
            </Link>
            <p className="text-sm text-[#7784A0] leading-relaxed">
              AI automation solutions for growing businesses.
            </p>
            <p className="text-sm text-[#7784A0] mt-4">
              Email us at{' '}
              <a href="mailto:dev@synthelytix.com" className="text-white hover:text-[#6067F9] transition-colors">
                dev@synthelytix.com
              </a>{' '}
              for detailed pricing and architecture blueprints.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email for detailed pricing"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-[#7784A0] focus:outline-none focus:border-[#6067F9]"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-[#6067F9] hover:bg-[#5058E8] rounded-lg text-sm font-medium text-white transition-colors"
              >
                Send
              </button>
            </form>
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
            © YourCompany — Automation built for scale
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#7784A0] hover:text-white transition-colors">
              Security
            </a>
            <a href="#" className="text-[#7784A0] hover:text-white transition-colors">
              Compliance
            </a>
            <a href="#" className="text-[#7784A0] hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
