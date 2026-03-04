'use client';

import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/cn';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300;
}

export default function RevealWrapper({
  children,
  className,
  delay = 0,
}: RevealWrapperProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
