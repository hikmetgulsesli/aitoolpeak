import { useState } from 'react';

interface AuthorBoxProps {
  author: string;
  authorImage?: string;
  date: string;
}

const AUTHOR_BIO = "Hikmet Gulsesli is a developer and AI enthusiast who runs a homelab server with OpenClaw, Setfarm, and 10 AI agents managing 23 web apps. He writes hands-on reviews and comparisons based on real-world usage.";

export function AuthorBox({ author, authorImage, date }: AuthorBoxProps) {
  const [imageError, setImageError] = useState(false);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const displayImage = authorImage && !imageError ? authorImage : null;

  return (
    <div className="bg-[--bg] rounded-xl border border-[--border] p-6 mt-12">
      <div className="flex items-start gap-4">
        {displayImage ? (
          <img
            src={displayImage}
            alt={author}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-[--primary]/20"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[--primary]/10 flex items-center justify-center flex-shrink-0 ring-2 ring-[--primary]/20">
            <svg
              className="w-8 h-8 text-[--primary]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-[--text-secondary] mb-1">Written by</p>
          <p className="text-lg font-semibold text-[--text] mb-1">{author}</p>
          <p className="text-sm text-[--text-secondary] mb-3">{formatDate(date)}</p>
          <p className="text-sm text-[--text-secondary] leading-relaxed">
            {AUTHOR_BIO}
          </p>
        </div>
      </div>
    </div>
  );
}
