import type { Metadata } from 'next';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectFilter from '@/components/project/ProjectFilter';

export const metadata: Metadata = {
  title: '수행 실적 — SEHYUN ICT',
  description: '세현아이씨티의 공공·금융·민간·GIS 분야 수행 프로젝트 포트폴리오',
};

export default function ProjectPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* 히어로 배너 */}
      <div
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          minHeight: '320px',
          background: 'linear-gradient(135deg, #0F1E40 0%, #060D1F 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '72px 24px',
        }}
      >
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
          <SectionLabel>Portfolio</SectionLabel>
          <h1
            className="font-black mt-2"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize:   'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.02em',
            }}
          >
            주요 수행 실적
          </h1>
          <p className="mt-4 text-base max-w-[480px] mx-auto leading-relaxed" style={{ color: '#C0CEEA' }}>
            공공·금융·민간·GIS 분야에 걸친 200여 건의 프로젝트 수행 경험
          </p>
        </div>
      </div>

      {/* 프로젝트 필터 + 그리드 (클라이언트 컴포넌트) */}
      <div className="section-padding" style={{ background: '#0B1630' }}>
        <div className="max-w-[1200px] mx-auto">
          <ProjectFilter />
        </div>
      </div>
    </div>
  );
}
