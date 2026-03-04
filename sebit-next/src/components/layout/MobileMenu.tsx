'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { NAV_ITEMS } from '@/data/company';

interface MobileMenuProps {
  isOpen:  boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* 오버레이 */}
      <div
        className="fixed inset-0 z-40 lg:hidden"
        style={{
          background: 'rgba(6,13,31,0.7)',
          backdropFilter: 'blur(4px)',
          opacity:    isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        onClick={onClose}
      />

      {/* 슬라이드 패널 */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 w-[280px] lg:hidden flex flex-col"
        style={{
          background:  '#0B1630',
          borderLeft:  '1px solid rgba(255,255,255,0.08)',
          transform:   isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition:  'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span
            className="text-base font-black tracking-wider"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            SEHYUN<span style={{ color: '#00C9E0' }}>ICT</span>
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: '#8899BB' }}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              style={{ color: '#C0CEEA' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#F0F5FF';
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#C0CEEA';
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pb-8">
          <Link
            href="/#contact"
            onClick={onClose}
            className="block text-center py-3 rounded-lg font-bold text-sm tracking-wide"
            style={{ background: '#00C9E0', color: '#060D1F' }}
          >
            문의하기
          </Link>
        </div>
      </div>
    </>
  );
}
