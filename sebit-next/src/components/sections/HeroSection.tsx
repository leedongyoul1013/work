'use client';

import Link from 'next/link';
import { STATS } from '@/data/company';
import CountUp from '@/components/ui/CountUp';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        // 배경 이미지: /public/hero-bg.jpg (또는 .png) 에 이미지를 넣으세요
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0F1E3D', // 이미지 로드 전 fallback
      }}
    >
      {/* 어두운 오버레이 */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(10, 20, 50, 0.6)' }}
      />

      {/* 메인 콘텐츠 */}
      <div
        className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-[60px]"
        style={{ paddingTop: '160px', paddingBottom: '220px' }}
      >
        {/* 배지 */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#ffffff',
            animation: 'fade-up 0.6s ease both',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#00C9E0' }}
          />
          Smarter IT Solution Provider
        </div>

        {/* 타이틀 */}
        <h1
          className="font-black leading-[1.15] tracking-tight mb-6 text-white"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
            letterSpacing: '-0.02em',
            animation: 'fade-up 0.6s 0.1s ease both',
          }}
        >
          기술로 연결하고<br />
          혁신을 설계합니다
        </h1>

        {/* 서브텍스트 */}
        <p
          className="text-base leading-relaxed mb-12 max-w-[500px]"
          style={{
            color: 'rgba(255,255,255,0.78)',
            animation: 'fade-up 0.6s 0.2s ease both',
          }}
        >
          세현아이씨티는 SI 개발·GIS 솔루션·IT 컨설팅 전문 기업입니다.<br />
          고객의 문제를 정확히 이해하고, 최적의 기술로 해결합니다.
        </p>

        {/* CTA 버튼 */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: 'fade-up 0.6s 0.3s ease both' }}
        >
          <Link href="/service" className="btn-primary">
            서비스 보기 →
          </Link>
          <Link href="/#contact" className="btn-outline">
            무료 상담하기
          </Link>
        </div>
      </div>

      {/* 통계 바 */}
      <div
        className="absolute bottom-0 left-0 right-0 grid grid-cols-2 lg:grid-cols-4 z-10"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(5, 15, 40, 0.65)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="px-8 py-6"
            style={{
              borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}
          >
            <div
              className="font-black text-[2rem] leading-none mb-1 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <CountUp end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
