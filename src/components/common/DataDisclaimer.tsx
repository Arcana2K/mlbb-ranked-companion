import React from 'react';
import { Info } from 'lucide-react';

interface DataDisclaimerProps {
  type?: 'sample' | 'notice' | 'rule-based';
  compact?: boolean;
  text?: string;
}

export const DataDisclaimer: React.FC<DataDisclaimerProps> = ({
  type = 'sample',
  compact = false,
  text
}) => {
  const defaultText =
    type === 'rule-based'
      ? 'Recommendations use rule-based analysis: verified counter relationships, lane priority, and role balance.'
      : 'Initialized with baseline sample data. Track your actual ranked matches in Match History to view personal metrics.';

  if (compact) {
    return (
      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs text-zinc-400 bg-zinc-900 border border-zinc-800">
        <Info className="w-3 h-3 text-zinc-500 shrink-0" />
        <span>{text || defaultText}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-400">
      <Info className="w-4 h-4 text-zinc-500 shrink-0" />
      <span className="leading-relaxed">{text || defaultText}</span>
    </div>
  );
};
