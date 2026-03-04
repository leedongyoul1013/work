import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';
import ContactForm from '@/components/forms/ContactForm';
import { CONTACT, COMPANY } from '@/data/company';

const INFO_ROWS = [
  { icon: '📞', label: '전화',   value: CONTACT.phone },
  { icon: '✉️', label: '이메일', value: CONTACT.email },
  { icon: '📍', label: '주소',   value: CONTACT.address },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding" style={{ background: '#0B1630' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start">

        {/* 왼쪽 정보 */}
        <div>
          <SectionLabel>Contact Us</SectionLabel>
          <RevealWrapper>
            <h2
              className="font-black leading-tight mt-2 mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize:   'clamp(1.8rem, 3vw, 2.6rem)',
                letterSpacing: '-0.02em',
              }}
            >
              함께 시작할 준비가<br />되어 있습니다
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#C0CEEA' }}>
              프로젝트 규모에 관계없이 먼저 이야기 나눠보세요.<br />
              빠르게 검토 후 연락드립니다.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'var(--card-bg)',
                border:     '1px solid var(--card-border)',
              }}
            >
              {/* 헤더 */}
              <div
                className="px-7 py-6"
                style={{ background: 'linear-gradient(135deg, #1A4FA0, #0D3A7A)' }}
              >
                <h4
                  className="font-bold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {COMPANY.nameKo} ({COMPANY.name})
                </h4>
                <p className="text-xs mt-1" style={{ color: '#C0CEEA' }}>
                  {CONTACT.hours} 응대
                </p>
              </div>

              {/* 연락처 행 */}
              {INFO_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className="flex items-center gap-4 px-7 py-4"
                  style={{
                    borderBottom: i < INFO_ROWS.length - 1
                      ? '1px solid rgba(255,255,255,0.08)'
                      : 'none',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                    style={{
                      background: 'rgba(0,201,224,0.1)',
                      border:     '1px solid rgba(0,201,224,0.2)',
                    }}
                  >
                    {row.icon}
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: '#8899BB' }}>{row.label}</div>
                    <div className="text-sm font-medium" style={{ color: '#F0F5FF' }}>{row.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>

        {/* 오른쪽 폼 */}
        <RevealWrapper delay={100}>
          <ContactForm />
        </RevealWrapper>
      </div>
    </section>
  );
}
