import type { StatItem, NavItem } from '@/types/common';

export const COMPANY = {
  name:    'SEHYUN ICT',
  nameKo:  '세현아이씨티',
  founded: 2003,
  tagline: 'Smarter IT Solution Provider',
} as const;

export const CONTACT = {
  phone:   '070-4047-8955',
  email:   'asset.manager@sehyunict.com',
  address: '경기도 화성시 동탄기흥로 557, 1901호',
  hours:   '평일 09:00 – 18:00',
} as const;

export const STATS: StatItem[] = [
  { value: 20,  suffix: '+',  label: 'Years of Experience' },
  { value: 200, suffix: '+',  label: 'Projects Completed' },
  { value: 50,  suffix: '+',  label: 'Partner Companies' },
  { value: 98,  suffix: '%',  label: 'Client Satisfaction' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'About',   href: '/#about' },
  { label: 'Service', href: '/service' },
  { label: 'Project', href: '/project' },
  { label: 'Partner', href: '/#partner' },
];
