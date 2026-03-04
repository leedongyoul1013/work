import SectionLabel from '@/components/ui/SectionLabel';
import Badge from '@/components/ui/Badge';
import RevealWrapper from '@/components/ui/RevealWrapper';

const POINTS = [
  {
    icon: '🎯',
    title: '도메인 특화 전문성',
    desc:  '공공행정·지리정보·금융·물류 등 분야별 도메인 지식을 바탕으로 실효성 있는 솔루션을 설계합니다.',
  },
  {
    icon: '⚡',
    title: '검증된 기술 역량',
    desc:  'Java·Python·GIS 엔진부터 클라우드·API 연동까지 폭넓은 기술 스택으로 복잡한 요구사항을 해결합니다.',
  },
  {
    icon: '🤝',
    title: '납기 준수와 품질 보증',
    desc:  '체계적인 프로젝트 관리로 일정과 품질을 동시에 지키며, 오픈 후에도 지속적인 유지보수를 지원합니다.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ background: '#0B1630' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* 비주얼 카드 */}
        <RevealWrapper>
          <div className="relative">
            <div className="card-base card-accent-top p-10 overflow-hidden">
              <div
                className="font-black leading-none mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize:   '5rem',
                  color:      'rgba(0,201,224,0.1)',
                }}
              >
                2003
              </div>
              <h3
                className="font-bold text-xl leading-snug mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                IT 기술 기반의<br />스마트 솔루션 파트너
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#C0CEEA' }}>
                세현아이씨티는 공공·금융·민간 분야에서 20년 이상 쌓아온 기술 역량과 실전
                경험으로, 고객의 비즈니스 목표를 실현하는 최적의 IT 솔루션을 제공합니다.
              </p>
              <div className="flex gap-2 flex-wrap mt-6">
                <Badge>ISO 인증</Badge>
                <Badge>공공 SI 전문</Badge>
                <Badge>GIS 특화</Badge>
              </div>
            </div>

            {/* 플로팅 카드 */}
            <div
              className="absolute -bottom-5 -right-5 rounded-xl px-6 py-5 shadow-2xl"
              style={{
                background:  'linear-gradient(135deg, #1A4FA0, #0D3A7A)',
                border:      '1px solid rgba(58,138,224,0.3)',
              }}
            >
              <div
                className="font-black text-3xl leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                200<span style={{ color: '#00C9E0' }}>+</span>
              </div>
              <div className="text-xs mt-1" style={{ color: '#C0CEEA' }}>수행 프로젝트</div>
            </div>
          </div>
        </RevealWrapper>

        {/* 텍스트 콘텐츠 */}
        <div>
          <SectionLabel>About Us</SectionLabel>
          <RevealWrapper>
            <h2
              className="font-black leading-tight mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize:   'clamp(1.8rem, 3vw, 2.6rem)',
                letterSpacing: '-0.02em',
              }}
            >
              신뢰를 쌓고<br />함께 성장합니다
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#C0CEEA' }}>
              단순한 개발 파트너를 넘어, 고객의 비즈니스를 깊이 이해하고 장기적인 성장을
              함께 설계하는 IT 전략 파트너입니다.
            </p>
          </RevealWrapper>

          <div className="flex flex-col gap-6">
            {POINTS.map((point, i) => (
              <RevealWrapper key={point.title} delay={((i + 1) * 100) as 100 | 200 | 300}>
                <div className="flex gap-5 items-start">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                  >
                    {point.icon}
                  </div>
                  <div>
                    <div
                      className="font-bold mb-1.5"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {point.title}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#C0CEEA' }}>
                      {point.desc}
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
