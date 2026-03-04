import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { SERVICES } from '@/data/services';

export default function ServiceSection() {
  return (
    <section id="service" className="section-padding" style={{ background: '#060D1F' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* 헤더 */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-14">
          <div>
            <SectionLabel>Our Services</SectionLabel>
            <RevealWrapper>
              <h2
                className="font-black leading-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize:   'clamp(1.8rem, 3vw, 2.6rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                전문 서비스 영역
              </h2>
            </RevealWrapper>
          </div>
          <RevealWrapper>
            <p className="text-base leading-relaxed max-w-[360px]" style={{ color: '#C0CEEA' }}>
              고객의 규모와 목적에 맞는 최적의 서비스 조합을 제안합니다.
            </p>
          </RevealWrapper>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <RevealWrapper key={svc.id} delay={((i * 100) % 300) as 0 | 100 | 200 | 300}>
              <div
                className="card-hover relative rounded-2xl p-10 overflow-hidden cursor-default"
                style={{
                  background: 'var(--card-bg)',
                  border:     '1px solid var(--card-border)',
                }}
              >
                {/* 번호 */}
                <div
                  className="font-black leading-none mb-[-10px]"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize:   '3.5rem',
                    color:      'rgba(255,255,255,0.04)',
                  }}
                >
                  {svc.number}
                </div>

                {/* 아이콘 */}
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: svc.iconBg, width: '52px', height: '52px' }}
                >
                  {svc.icon}
                </div>

                {/* 타이틀 */}
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {svc.title}
                </h3>

                {/* 설명 */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#C0CEEA' }}>
                  {svc.shortDesc}
                </p>

                {/* 태그 */}
                <div className="flex flex-wrap gap-2 mb-6">
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

                {/* 화살표 */}
                <Link
                  href={`/service#${svc.id}`}
                  className="arrow-btn absolute bottom-8 right-8 w-9 h-9 rounded-full flex items-center justify-center text-sm"
                  style={{
                    border: '1px solid var(--card-border)',
                    color:  '#8899BB',
                  }}
                >
                  →
                </Link>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
