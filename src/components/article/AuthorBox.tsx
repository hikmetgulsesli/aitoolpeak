interface AuthorBoxProps {
  author: string;
  date: string;
}

export function AuthorBox({ author, date }: AuthorBoxProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const initials = author
    .split(' ')
    .map((n) => n.charAt(0).toUpperCase())
    .join('');

  return (
    <div className="bg-[--bg] rounded-xl border border-[--border] p-6 mt-12">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[--primary]/10 flex items-center justify-center">
          <span className="text-xl font-semibold text-[--primary]">
            {initials}
          </span>
        </div>
        <div>
          <p className="text-sm text-[--text-muted] mb-1">Written by</p>
          <p className="text-lg font-semibold text-[--text]">{author}</p>
          <p className="text-sm text-[--text-muted]">{formatDate(date)}</p>
        </div>
      </div>
    </div>
  );
}
