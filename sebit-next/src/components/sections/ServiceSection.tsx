import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { SERVICES } from '@/data/services';

export default function ServiceSection() {
  return (
    <section id="service" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="max-w-[1200px] mx-auto">

        {/* 섹션 헤더 */}
        <div className="mb-14 max-w-[600px]">
          <SectionLabel>Our Services</SectionLabel>
          <RevealWrapper>
            <h2
              className="font-black leading-tight mt-3"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize:   'clamp(1.8rem, 3vw, 2.6rem)',
                letterSpacing: '-0.02em',
                color: '#0F1E3D',
              }}
            >
              전문 서비스 영역
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <p className="text-base leading-relaxed mt-4" style={{ color: '#5A6A85' }}>
              고객의 규모와 목적에 맞는 최적의 서비스 조합을 제안합니다.
            </p>
          </RevealWrapper>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <RevealWrapper key={svc.id} delay={((i * 100) % 300) as 0 | 100 | 200 | 300}>
              <div
                className="card-hover rounded-xl p-8 h-full flex flex-col"
                style={{
                  background: '#F4F7FC',
                  border: '1px solid #E2E8F0',
                }}
              >
                {/* 아이콘 */}
                <div className="text-3xl mb-5">{svc.icon}</div>

                {/* 타이틀 */}
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: '#0F1E3D' }}
                >
                  {svc.title}
                </h3>

                {/* 설명 */}
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#5A6A85' }}>
                  {svc.shortDesc}
                </p>

                {/* 태그 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(26,79,160,0.08)',
                        color: '#1A4FA0',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 링크 */}
                <Link
                  href={`/service#${svc.id}`}
                  className="text-sm font-semibold"
                  style={{ color: '#1A4FA0' }}
                >
                  자세히 보기 →
                </Link>
              </div>
            </RevealWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}
