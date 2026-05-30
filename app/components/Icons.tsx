import React from 'react'

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number; color?: string; fill?: string }

const IconWrapper: React.FC<IconProps> = ({ children, size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
    {children}
  </svg>
)

export const Github: React.FC<{ size?: number; color?: string } & React.HTMLAttributes<HTMLImageElement>> = ({ size = 24, color = 'currentColor', ...props }) => (
  <img src="/assets/images/github-mark.svg" alt="GitHub" width={size} height={size} style={{ display: 'block' }} {...props} />
)

export const Linkedin: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="11" />
    <circle cx="4" cy="4" r="2" />
  </IconWrapper>
)

export const Mail: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M3 8l9 6 9-6" />
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
  </IconWrapper>
)

export const Heart: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fill = 'none', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
  </svg>
)

export const Menu: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </IconWrapper>
)

export const X: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M18 6L6 18M6 6l12 12" />
  </IconWrapper>
)

export const ExternalLink: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
  </IconWrapper>
)

export const Sword: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M21 3l-6 6" />
    <path d="M13 11l-8 8-2 2 2-2 8-8" />
  </IconWrapper>
)

export const Send: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22l-4-9-9-4 20-7z" />
  </IconWrapper>
)

export const MessageSquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </IconWrapper>
)

export const Download: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </IconWrapper>
)

export const Quote: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M7 7h3v7H5V9a2 2 0 012-2zM14 7h3v7h-5V9a2 2 0 012-2z" />
  </IconWrapper>
)

export const GraduationCap: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M12 2L1 7l11 5 9-4.09V17" />
    <path d="M7 10v4" />
  </IconWrapper>
)

export const BookOpen: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M2 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
    <path d="M2 7l9 4 9-4" />
  </IconWrapper>
)

export const Calendar: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </IconWrapper>
)

export const MapPin: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z" />
    <circle cx="12" cy="10" r="3" />
  </IconWrapper>
)

export const Code2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
  </IconWrapper>
)

export const ChevronDown: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M6 9l6 6 6-6" />
  </IconWrapper>
)

export const Sparkles: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M12 2l1.5 4L18 8l-4.5 2L12 14l-1.5-4L6 8l4.5-2L12 2z" />
  </IconWrapper>
)

export const Shield: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  </IconWrapper>
)

export const Zap: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </IconWrapper>
)

export const Brain: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M20 12a4 4 0 00-4-4V6a4 4 0 00-8 0v2a4 4 0 00-4 4v2a4 4 0 004 4h12a4 4 0 004-4v-2z" />
  </IconWrapper>
)

export const Wrench: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <IconWrapper size={size} color={color} {...props}>
    <path d="M14.7 5.3a4 4 0 015.6 5.6L14 17l-6 1 1-6 6.7-6.7z" />
  </IconWrapper>
)

export default null
