'use client';

import { useState } from 'react';
import { PROJECTS, CATEGORY_LABELS } from '@/data/projects';
import type { ProjectCategory } from '@/types/project';

type FilterKey = ProjectCategory | 'all';
const FILTER_KEYS: FilterKey[] = ['all', 'public', 'finance', 'private', 'gis'];

export default function ProjectFilter() {
  const [active, setActive] = useState<FilterKey>('all');

  const filtered = active === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <div>
      {/* 필터 탭 */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTER_KEYS.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className="px-5 py-2 rounded-full text-sm font-semibold tracking-wider transition-all duration-200"
            style={
              active === key
                ? { background: '#00C9E0', color: '#060D1F' }
                : {
                    background: 'var(--card-bg)',
                    border:     '1px solid var(--card-border)',
                    color:      '#C0CEEA',
                  }
            }
          >
            {CATEGORY_LABELS[key]}
          </button>
        ))}
      </div>

      {/* 프로젝트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="rounded-xl overflow-hidden transition-all duration-300"
            style={{
              background: 'var(--card-bg)',
              border:     '1px solid var(--card-border)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(58,138,224,0.4)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--card-border)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
          >
            {/* 썸네일 */}
            <div
              className="h-[160px] flex items-center justify-center text-4xl"
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
                className="font-bold leading-snug mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {project.name}
              </h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: '#8899BB' }}>
                {project.summary}
              </p>
              <div className="flex items-center gap-4 text-xs" style={{ color: '#8899BB' }}>
                <span>📅 {project.year}</span>
                <span className="truncate">🏷 {project.techStack.join(' · ')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20" style={{ color: '#8899BB' }}>
          해당 카테고리의 프로젝트가 없습니다.
        </div>
      )}
    </div>
  );
}
