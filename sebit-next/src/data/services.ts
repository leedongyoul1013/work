import type { Service } from '@/types/service';

export const SERVICES: Service[] = [
  {
    id:         'si',
    number:     '01',
    icon:       '💻',
    iconBg:     'rgba(0,201,224,0.12)',
    title:      'SI · 시스템 통합 개발',
    shortDesc:  '공공기관·기업의 업무 시스템, 포털, ERP, 모바일 앱까지 전 주기 개발을 수행합니다.',
    longDesc:   `기획부터 운영까지 원스톱으로 진행합니다. 요구분석·설계·개발·테스트·배포·유지보수를 일관된 체계로 관리하며, 공공 조달 경험과 민간 SI 실적을 바탕으로 고객 맞춤형 솔루션을 제공합니다.

주요 수행 분야: 공공 행정 시스템, 기업 ERP/포털, 금융 업무 시스템, 모바일 앱 (Android/iOS), 클라우드 마이그레이션`,
    tags:       ['Java / Spring', 'React', 'MSA', '클라우드'],
    highlights: ['전 주기 개발 (기획~운영)', '공공 조달 다수 실적', 'MSA / 클라우드 아키텍처', '모바일 앱 개발'],
  },
  {
    id:         'gis',
    number:     '02',
    icon:       '🗺️',
    iconBg:     'rgba(58,138,224,0.12)',
    title:      'GIS · 공간정보 솔루션',
    shortDesc:  '자체 개발 GIS 엔진 SmartGeoKit을 기반으로 지도 플랫폼, 공간 분석, CAD 뷰어 솔루션을 제공합니다.',
    longDesc:   `SmartGeoKit은 세현아이씨티가 자체 개발한 경량 GIS 엔진으로, 웹 기반 2D 지도 플랫폼부터 공간 분석, CAD 파일 뷰어, 실시간 데이터 시각화까지 다양한 공간정보 서비스를 빠르게 구축할 수 있습니다.

주요 수행 분야: 국토·지적 정보 포털, 스마트시티 대시보드, 물류·배송 경로 분석, CAD 도면 웹 뷰어`,
    tags:       ['SmartGeoKit', '2D GIS', 'CAD View', '공간분석'],
    highlights: ['자체 엔진 SmartGeoKit', '2D 지도 플랫폼', 'CAD 파일 웹 뷰어', '실시간 공간 분석'],
  },
  {
    id:         'consulting',
    number:     '03',
    icon:       '📊',
    iconBg:     'rgba(124,91,224,0.12)',
    title:      'IT 컨설팅 · 솔루션 기획',
    shortDesc:  '디지털 전환 전략 수립부터 아키텍처 설계, 시스템 진단까지 IT 컨설팅으로 최적의 방향을 제시합니다.',
    longDesc:   `단순 개발 파트너를 넘어, 고객의 비즈니스 목표를 IT 전략으로 연결합니다. RFP 작성 지원부터 기존 시스템 진단, 신규 시스템 아키텍처 설계, 디지털 전환 로드맵까지 포괄적인 컨설팅 서비스를 제공합니다.

주요 수행 분야: DX 전략 수립, 레거시 시스템 진단, 아키텍처 리팩터링, RFP·ISP 지원`,
    tags:       ['DX 전략', '아키텍처', '시스템 진단'],
    highlights: ['DX 전략 수립', '시스템 진단·처방', 'RFP / ISP 지원', '아키텍처 설계'],
  },
];
