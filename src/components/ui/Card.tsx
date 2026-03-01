import type { ReactNode, HTMLAttributes, AnchorHTMLAttributes } from 'react';

// Base card props without children
interface CardBaseProps {
  className?: string;
  hover?: boolean;
}

// Card as div/article/section
interface CardDivProps extends CardBaseProps, Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode;
  as?: 'div' | 'article' | 'section';
}

// Card as anchor
interface CardAnchorProps extends CardBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  children: ReactNode;
  as: 'a';
  href: string;
}

export type CardProps = CardDivProps | CardAnchorProps;

export function Card({ 
  children, 
  className = '', 
  hover = true,
  as = 'div',
  ...props 
}: CardProps) {
  const baseClasses = 'group bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden';
  const hoverClasses = hover 
    ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer' 
    : '';
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;

  if (as === 'a') {
    const { href, ...anchorProps } = props as CardAnchorProps;
    return (
      <a href={href.startsWith('javascript:') ? '#' : href} className={combinedClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  const Component = as;
  return (
    <Component className={combinedClasses} {...props as HTMLAttributes<HTMLDivElement>}>
      {children}
    </Component>
  );
}

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`px-6 py-4 border-b border-[var(--border)] ${className}`}>
      {children}
    </div>
  );
}

export interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-6 py-4 border-t border-[var(--border)] ${className}`}>
      {children}
    </div>
  );
}

export interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'auto';
}

export function CardImage({ 
  src, 
  alt, 
  className = '',
  aspectRatio = 'auto'
}: CardImageProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    auto: '',
  };

  return (
    <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}
