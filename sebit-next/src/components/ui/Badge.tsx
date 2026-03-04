import { cn } from '@/lib/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-xs font-semibold',
        'text-cyan',
        className
      )}
      style={{
        background: 'rgba(0,201,224,0.1)',
        border: '1px solid rgba(0,201,224,0.2)',
      }}
    >
      {children}
    </span>
  );
}
