import { PARTNERS } from '@/data/partners';

export default function PartnerSection() {
  return (
    <section
      id="partner"
      className="px-6 md:px-12 lg:px-[60px] py-20 text-center"
      style={{
        background:  '#060D1F',
        borderTop:   '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <p
          className="text-xs font-medium tracking-widest uppercase mb-10"
          style={{ color: '#8899BB' }}
        >
          신뢰하는 협력사 및 파트너
        </p>

        <div
          className="flex flex-wrap justify-center"
          style={{ gap: 0 }}
        >
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="partner-item px-9 py-5 text-sm font-bold tracking-wider cursor-default"
              style={{
                border:  '1px solid rgba(255,255,255,0.08)',
                color:   '#8899BB',
                fontFamily: 'var(--font-heading)',
                margin: '-1px 0 0 -1px',
              }}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
