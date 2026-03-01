import type { ReactNode, HTMLAttributes, AnchorHTMLAttributes } from 'react';

export type BadgeVariant = 
  | 'default'
  | 'coding-assistants'
  | 'ai-models'
  | 'devops'
  | 'web-development'
  | 'tools-comparison'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

// Base props for the badge
interface BadgeBaseProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

// Props for when the badge is a span
interface BadgeSpanProps extends BadgeBaseProps, Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  as?: 'span';
  href?: never;
}

// Props for when the badge is an anchor
interface BadgeAnchorProps extends BadgeBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  as: 'a';
  href: string;
}

export type BadgeProps = BadgeSpanProps | BadgeAnchorProps;

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--surface)] text-[var(--text)] border-[var(--border)]',
  'coding-assistants': 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800',
  'ai-models': 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800',
  'devops': 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800',
  'web-development': 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800',
  'tools-comparison': 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800',
  success: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800',
  warning: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800',
  error: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800',
  info: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800',
};

export function Badge(props: BadgeProps) {
  const { 
    children, 
    variant = 'default', 
    className = '',
    as,
    href,
    ...restProps
  } = props;
  
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border transition-colors duration-200';
  const variantClasses = variantStyles[variant];
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href.startsWith('javascript:') ? '#' : href} className={combinedClasses} {...restProps as AnchorHTMLAttributes<HTMLAnchorElement>}>
        {children}
      </a>
    );
  }

  return (
    <span className={combinedClasses} {...restProps as HTMLAttributes<HTMLSpanElement>}>
      {children}
    </span>
  );
}
