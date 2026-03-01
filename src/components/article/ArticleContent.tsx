import { useEffect } from 'react';

interface ArticleContentProps {
  html: string;
}

export function ArticleContent({ html }: ArticleContentProps) {
  // Add copy buttons to code blocks
  useEffect(() => {
    const codeBlocks = document.querySelectorAll('.article-content pre');
    
    codeBlocks.forEach((pre) => {
      // Skip if already has copy button
      if (pre.querySelector('.copy-code-btn')) return;
      
      const code = pre.querySelector('code');
      if (!code) return;
      
      const button = document.createElement('button');
      button.className = 'copy-code-btn';
      button.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a-2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      `;
      button.setAttribute('aria-label', 'Copy code');
      (button as HTMLElement).style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.375rem;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 0.375rem;
        color: var(--text-secondary);
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.2s, color 0.2s;
      `;
      
      button.addEventListener('click', async () => {
        const text = code.textContent || '';
        try {
          await navigator.clipboard.writeText(text);
          button.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          `;
          (button as HTMLElement).style.color = 'var(--primary)';
          setTimeout(() => {
            button.innerHTML = `
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a-2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            `;
            (button as HTMLElement).style.color = 'var(--text-secondary)';
          }, 2000);
        } catch {
          // Fallback
        }
      });
      
      (pre as HTMLElement).style.position = 'relative';
      pre.addEventListener('mouseenter', () => { 
        (button as HTMLElement).style.opacity = '1'; 
      });
      pre.addEventListener('mouseleave', () => { 
        (button as HTMLElement).style.opacity = '0'; 
      });
      
      pre.appendChild(button);
    });
    
    return () => {
      codeBlocks.forEach((pre) => {
        const btn = pre.querySelector('.copy-code-btn');
        if (btn) btn.remove();
      });
    };
  }, [html]);

  return (
    <article
      className="article-content prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
