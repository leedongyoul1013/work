import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { PROJECTS } from '@/data/projects';

interface ProjectSectionProps {
  preview?: boolean;
}

export default function ProjectSection({ preview = false }: ProjectSectionProps) {
  const displayed = preview ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  return (
    <section id="project" className="section-padding" style={{ background: '#0B1630' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* 헤더 */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12">
          <div>
            <SectionLabel>Recent Projects</SectionLabel>
            <RevealWrapper>
              <h2
                className="font-black leading-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize:   'clamp(1.8rem, 3vw, 2.6rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                주요 수행 실적
              </h2>
            </RevealWrapper>
          </div>
          {preview && (
            <RevealWrapper>
              <Link
                href="/project"
                className="flex items-center gap-1.5 text-sm font-semibold tracking-wider transition-all duration-200 hover:gap-2.5"
                style={{ color: '#00C9E0' }}
              >
                전체 프로젝트 보기 →
              </Link>
            </RevealWrapper>
          )}
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
            <RevealWrapper key={project.id} delay={((i % 3) * 100) as 0 | 100 | 200 | 300}>
              <div
                className="card-hover-blue rounded-xl overflow-hidden"
                style={{
                  background: 'var(--card-bg)',
                  border:     '1px solid var(--card-border)',
                }}
              >
                {/* 썸네일 */}
                <div
                  className="h-[180px] flex items-center justify-center text-4xl"
                  style={{ background: project.thumbGradient }}
                >
                  {project.thumbEmoji}
                </div>

                {/* 바디 */}
                <div className="p-6">
                  <div
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: '#00C9E0' }}
                  >
                    {project.categoryLabel}
                  </div>
                  <h3
                    className="font-bold leading-snug mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: '#8899BB' }}>
                    {project.summary}
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#8899BB' }}>
                    <span>📅 {project.year}</span>
                    <span>🏷 {project.techStack.join(' · ')}</span>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
