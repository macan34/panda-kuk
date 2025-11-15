interface PandaIconProps {
  type: 'wave' | 'happy' | 'cry' | 'shy' | 'love' | 'eat' | 'sleep';
  size?: number;
}

export default function PandaIcon({ type, size = 64 }: PandaIconProps) {
  const icons = {
    wave: (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <circle cx="32" cy="32" r="28" fill="white" stroke="#2d3748" strokeWidth="2"/>
        <circle cx="32" cy="32" r="24" fill="white"/>
        <ellipse cx="22" cy="24" rx="4" ry="5" fill="#2d3748"/>
        <ellipse cx="42" cy="24" rx="4" ry="5" fill="#2d3748"/>
        <circle cx="23" cy="24" r="2" fill="white"/>
        <circle cx="43" cy="24" r="2" fill="white"/>
        <ellipse cx="10" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <ellipse cx="54" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <path d="M 26 36 Q 32 40 38 36" stroke="#2d3748" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="2" fill="#2d3748"/>
      </svg>
    ),
    happy: (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <circle cx="32" cy="32" r="28" fill="white" stroke="#2d3748" strokeWidth="2"/>
        <ellipse cx="22" cy="26" rx="3" ry="4" fill="#2d3748"/>
        <ellipse cx="42" cy="26" rx="3" ry="4" fill="#2d3748"/>
        <ellipse cx="10" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <ellipse cx="54" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <path d="M 22 36 Q 32 44 42 36" stroke="#2d3748" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="2" fill="#2d3748"/>
        <path d="M 18 24 Q 20 22 22 24" stroke="#2d3748" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M 42 24 Q 44 22 46 24" stroke="#2d3748" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    cry: (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <circle cx="32" cy="32" r="28" fill="white" stroke="#2d3748" strokeWidth="2"/>
        <ellipse cx="22" cy="26" rx="2" ry="6" fill="#2d3748"/>
        <ellipse cx="42" cy="26" rx="2" ry="6" fill="#2d3748"/>
        <ellipse cx="10" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <ellipse cx="54" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <path d="M 38 38 Q 32 36 26 38" stroke="#2d3748" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="2" fill="#2d3748"/>
        <path d="M 20 20 L 20 12" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
        <path d="M 44 20 L 44 12" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    shy: (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <circle cx="32" cy="32" r="28" fill="white" stroke="#2d3748" strokeWidth="2"/>
        <ellipse cx="22" cy="28" rx="6" ry="3" fill="#2d3748"/>
        <ellipse cx="42" cy="28" rx="6" ry="3" fill="#2d3748"/>
        <ellipse cx="10" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <ellipse cx="54" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <ellipse cx="32" cy="38" rx="8" ry="4" fill="#fca5a5"/>
        <circle cx="32" cy="32" r="2" fill="#2d3748"/>
        <path d="M 28 40 Q 32 42 36 40" stroke="#2d3748" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    love: (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <circle cx="32" cy="32" r="28" fill="white" stroke="#2d3748" strokeWidth="2"/>
        <path d="M 22 26 L 18 20 L 22 22 L 26 20 Z" fill="#ec4899"/>
        <path d="M 42 26 L 38 20 L 42 22 L 46 20 Z" fill="#ec4899"/>
        <ellipse cx="10" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <ellipse cx="54" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <path d="M 22 38 Q 32 44 42 38" stroke="#2d3748" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="2" fill="#2d3748"/>
      </svg>
    ),
    eat: (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <circle cx="32" cy="32" r="28" fill="white" stroke="#2d3748" strokeWidth="2"/>
        <ellipse cx="22" cy="26" rx="4" ry="5" fill="#2d3748"/>
        <ellipse cx="42" cy="26" rx="4" ry="5" fill="#2d3748"/>
        <circle cx="23" cy="26" r="2" fill="white"/>
        <circle cx="43" cy="26" r="2" fill="white"/>
        <ellipse cx="10" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <ellipse cx="54" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <ellipse cx="32" cy="40" rx="6" ry="4" fill="#2d3748"/>
        <circle cx="32" cy="32" r="2" fill="#2d3748"/>
        <rect x="48" y="28" width="3" height="16" fill="#84cc16" rx="1.5"/>
        <rect x="50" y="24" width="8" height="4" fill="#84cc16" rx="2"/>
        <rect x="50" y="32" width="8" height="4" fill="#84cc16" rx="2"/>
      </svg>
    ),
    sleep: (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <circle cx="32" cy="32" r="28" fill="white" stroke="#2d3748" strokeWidth="2"/>
        <ellipse cx="22" cy="28" rx="6" ry="2" fill="#2d3748"/>
        <ellipse cx="42" cy="28" rx="6" ry="2" fill="#2d3748"/>
        <ellipse cx="10" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <ellipse cx="54" cy="20" rx="6" ry="8" fill="#2d3748"/>
        <path d="M 26 38 Q 32 40 38 38" stroke="#2d3748" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="2" fill="#2d3748"/>
        <text x="46" y="18" fontSize="12" fill="#9ca3af">Z</text>
        <text x="50" y="14" fontSize="10" fill="#9ca3af">z</text>
      </svg>
    ),
  };

  return icons[type];
}
