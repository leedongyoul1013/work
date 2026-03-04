'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { NAV_ITEMS } from '@/data/company';
import MobileMenu from './MobileMenu';

export default function Header() {
  const scrolled   = useScrolled(20);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 lg:px-[60px] h-[72px] transition-all duration-300"
        style={{
          background:    scrolled ? 'rgba(6,13,31,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom:  scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        }}
      >
        {/* 로고 */}
        <Link
          href="/"
          className="flex items-center gap-2 font-black text-lg tracking-wider select-none"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: '#00C9E0',
              boxShadow: '0 0 8px #00C9E0',
              animation: 'pulse-dot 2s cubic-bezier(0.4,0,0.6,1) infinite',
            }}
          />
          SEHYUN<span style={{ color: '#00C9E0' }}>ICT</span>
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden lg:flex items-center gap-9">
          <ul className="flex gap-9 list-none">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium tracking-wider transition-colors"
                  style={{ color: '#C0CEEA' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#F0F5FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#C0CEEA')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className="px-5 py-2 rounded text-sm font-bold tracking-wider transition-opacity hover:opacity-90"
            style={{ background: '#00C9E0', color: '#060D1F' }}
          >
            문의하기
          </Link>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg"
          style={{ color: '#C0CEEA' }}
          onClick={() => setMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <Menu size={20} />
        </button>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
