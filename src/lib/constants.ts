export const CATEGORIES = [
  { id: 'coding-assistants', name: 'Coding Assistants' },
  { id: 'ai-models', name: 'AI Models' },
  { id: 'devops', name: 'DevOps' },
  { id: 'web-development', name: 'Web Development' },
  { id: 'tools-comparison', name: 'Tools Comparison' },
] as const;

export const ARTICLES_PER_PAGE = 9;

export const CATEGORY_LABELS: Record<string, string> = {
  'coding-assistants': 'Coding Assistants',
  'ai-models': 'AI Models',
  'devops': 'DevOps',
  'web-development': 'Web Development',
  'tools-comparison': 'Tools Comparison',
};

export const SITE_CONFIG = {
  name: 'AIToolPeak',
  tagline: 'AI Tools Review & Comparison for Developers',
  description: 'In-depth reviews, hands-on comparisons, and expert insights on the best AI tools for developers. Find the perfect AI coding assistant, model, and DevOps tool.',
  url: 'https://aitoolpeak.setrox.com.tr',
  author: {
    name: 'AIToolPeak Team',
    bio: 'Developers and AI enthusiasts who test AI tools hands-on to provide honest, practical reviews.',
    image: '/author-avatar.jpg',
  },
  social: {
    twitter: 'https://twitter.com/aitoolpeak',
    github: 'https://github.com/aitoolpeak',
  },
} as const;
