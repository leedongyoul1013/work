'use client';

import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { STATS } from '@/data/company';

function StatCell({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const count = useCountUp(visible ? value : 0, 1800);

  return (
    <div
      ref={ref}
      className="p-10"
      style={{
        background: 'var(--card-bg)',
        border:     '1px solid var(--card-border)',
      }}
    >
      <div
        className="font-black text-[3rem] leading-none mb-2"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {count}
        <span style={{ color: '#00C9E0' }}>{suffix}</span>
      </div>
      <div className="text-sm font-medium" style={{ color: '#8899BB' }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="section-padding"
      style={{
        background:   'linear-gradient(135deg, #0F1E40 0%, #081428 100%)',
        borderTop:    '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 items-center">
        {/* 왼쪽 텍스트 */}
        <div>
          <SectionLabel>Track Record</SectionLabel>
          <RevealWrapper>
            <h2
              className="font-black leading-tight mt-2 mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize:   'clamp(1.8rem, 3vw, 2.6rem)',
                letterSpacing: '-0.02em',
              }}
            >
              숫자로 증명하는<br />세현아이씨티
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <p className="text-base leading-relaxed" style={{ color: '#C0CEEA' }}>
              20년 이상의 현장 경험과 200건이 넘는 수행 실적이 우리의 경쟁력입니다.
            </p>
          </RevealWrapper>
        </div>

        {/* 오른쪽 통계 그리드 */}
        <div className="grid grid-cols-2 rounded-xl overflow-hidden" style={{ gap: '2px', background: '#1A2A4A' }}>
          {STATS.map((stat) => (
            <StatCell
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
