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
