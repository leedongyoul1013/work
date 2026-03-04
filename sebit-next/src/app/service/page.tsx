import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { SERVICES } from '@/data/services';

export const metadata: Metadata = {
  title: '서비스 — SEHYUN ICT',
  description: 'SI 개발, GIS 공간정보 솔루션, IT 컨설팅 서비스 상세 안내',
};

export default function ServicePage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* 히어로 배너 */}
      <div
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          minHeight: '360px',
          background: 'linear-gradient(135deg, #0F1E40 0%, #060D1F 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '80px 24px',
        }}
      >
        {/* 배경 그리드 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(58,138,224,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(58,138,224,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        <div className="relative z-10">
          <SectionLabel>Our Services</SectionLabel>
          <h1
            className="font-black mt-2"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize:   'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.02em',
            }}
          >
            세현아이씨티 서비스 영역
          </h1>
          <p className="mt-4 text-base max-w-[480px] mx-auto leading-relaxed" style={{ color: '#C0CEEA' }}>
            20년 기술 역량으로 SI·GIS·컨설팅 전 분야를 커버합니다.
          </p>
        </div>
      </div>

      {/* 서비스 상세 섹션 */}
      <div className="section-padding" style={{ background: '#060D1F' }}>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* 카드 비주얼 */}
              <RevealWrapper>
                <div className="card-base card-accent-top p-10 h-full">
                  <div
                    className="font-black leading-none mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize:   '3.5rem',
                      color:      'rgba(255,255,255,0.04)',
                    }}
                  >
                    {svc.number}
                  </div>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
                    style={{ background: svc.iconBg }}
                  >
                    {svc.icon}
                  </div>
                  <h2
                    className="font-bold text-2xl mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {svc.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded text-xs font-medium"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border:     '1px solid var(--card-border)',
                          color:      '#8899BB',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealWrapper>

              {/* 텍스트 상세 */}
              <RevealWrapper delay={100}>
                <div>
                  <p className="text-base leading-relaxed mb-6 whitespace-pre-line" style={{ color: '#C0CEEA' }}>
                    {svc.longDesc}
                  </p>
                  <ul className="flex flex-col gap-3 mb-8">
                    {svc.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm" style={{ color: '#F0F5FF' }}>
                        <span style={{ color: '#00C9E0' }}>✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link href="/#contact" className="btn-primary inline-flex">
                    이 서비스 문의하기 →
                  </Link>
                </div>
              </RevealWrapper>
            </div>
          ))}
        </div>
      </div>

      {/* CTA 배너 */}
      <div
        className="text-center section-padding"
        style={{
          background:  'linear-gradient(135deg, #0B1630, #060D1F)',
          borderTop:   '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="max-w-[600px] mx-auto">
          <h2
            className="font-black text-3xl mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            어떤 서비스가 필요하신가요?
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#C0CEEA' }}>
            복잡한 요구사항도 환영합니다. 먼저 이야기해 보세요.
          </p>
          <Link href="/#contact" className="btn-primary">
            무료 상담 신청하기
          </Link>
        </div>
      </div>
    </div>
  );
}
