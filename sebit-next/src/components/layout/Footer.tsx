import Link from 'next/link';
import { COMPANY, CONTACT, NAV_ITEMS } from '@/data/company';

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 lg:px-[60px] py-12"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* 로고 + 설명 */}
          <div>
            <div
              className="text-base font-black tracking-wider mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              SEHYUN<span style={{ color: '#00C9E0' }}>ICT</span>
            </div>
            <p className="text-xs" style={{ color: '#8899BB' }}>
              {COMPANY.tagline}
            </p>
          </div>

          {/* 네비게이션 */}
          <nav className="hidden md:flex gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="footer-link text-xs"
                style={{ color: '#8899BB' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 연락처 */}
          <div className="text-xs space-y-1" style={{ color: '#8899BB' }}>
            <p>{CONTACT.address}</p>
            <p>{CONTACT.phone} · {CONTACT.email}</p>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: '#8899BB' }}
        >
          <span>© {new Date().getFullYear()} SEHYUN ICT Co., Ltd. All rights reserved.</span>
          <span>사업자등록번호: 구현 전 확인 필요</span>
        </div>
      </div>
    </footer>
  );
}
