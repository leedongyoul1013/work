'use client';

import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  end:      number;
  suffix:   string;
  duration?: number;
  className?: string;
}

export default function CountUp({ end, suffix, duration = 1800, className }: CountUpProps) {
  const count = useCountUp(end, duration);

  return (
    <span className={className}>
      {count}
      <span style={{ color: '#00C9E0' }}>{suffix}</span>
    </span>
  );
}
