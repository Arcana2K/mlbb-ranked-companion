import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  tooltipClassName?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  className = '',
  tooltipClassName = '',
  position = 'top',
  align = 'center'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside clicks (especially important for mobile touch interactions)
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  // Position classes
  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2'
  };

  const alignClasses = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0'
  };

  const computedAlignment =
    position === 'left' || position === 'right' ? '' : alignClasses[align];

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setIsOpen(false);
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }
      }}
      tabIndex={0}
      role="button"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
    >
      {children}

      {isOpen && (
        <div
          role="tooltip"
          className={`absolute z-50 pointer-events-none min-w-44 max-w-[calc(100vw-2.5rem)] sm:max-w-xs rounded border border-zinc-800 bg-zinc-950 p-2.5 text-xs text-zinc-300 shadow-xl transition-opacity animate-in fade-in-0 duration-150 ${positionClasses[position]} ${computedAlignment} ${tooltipClassName}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};
