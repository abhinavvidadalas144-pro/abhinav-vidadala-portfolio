/**
 * CutoutPortrait.tsx — Studio Cutout Portrait Component (Section 1 Hero)
 * Verifies and renders the transparent cutout hero portrait (me.png) with
 * automatic fallback to me.jpg and a styled typographic placeholder.
 */
import React, { useEffect, useState } from 'react';

interface CutoutPortraitProps {
  className?: string;
}

/**
 * Renders the studio-blended cutout portrait at native sharpness anchored cleanly
 * to the bottom center of the hero container with full hairstyle visibility.
 */
export const CutoutPortrait: React.FC<CutoutPortraitProps> = ({ className = '' }) => {
  const [portraitSrc, setPortraitSrc] = useState<string | null>('me.png?v=4');
  const [status, setStatus] = useState<'loading' | 'ready' | 'placeholder'>('ready');

  useEffect(() => {
    let isMounted = true;
    let pollTimer: number | undefined;

    /**
     * Checks whether a given image asset URL loads with valid non-zero dimensions.
     */
    const verifyImage = (url: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img.naturalWidth > 16 && img.naturalHeight > 16);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };

    /**
     * Resolves the best available portrait asset using relative case-matching filenames.
     */
    const resolvePortrait = async () => {
      if (await verifyImage('me.png?v=4')) {
        if (!isMounted) return;
        setPortraitSrc('me.png?v=4');
        setStatus('ready');
        return;
      }

      if (await verifyImage('me.jpg')) {
        if (!isMounted) return;
        setPortraitSrc('me.jpg');
        setStatus('ready');
        return;
      }

      if (!isMounted) return;
      setStatus('placeholder');
      pollTimer = window.setTimeout(resolvePortrait, 4000);
    };

    resolvePortrait();

    return () => {
      isMounted = false;
      if (pollTimer) clearTimeout(pollTimer);
    };
  }, []);

  if (status === 'placeholder') {
    return (
      <div
        className={`relative flex flex-col items-center justify-end select-none ${className}`}
        aria-label="Abhinav Sai Vidadala portrait placeholder"
      >
        <div className="w-[320px] sm:w-[440px] lg:w-[540px] h-[420px] sm:h-[560px] lg:h-[720px] rounded-t-full bg-white/15 border border-white/30 backdrop-blur-md flex flex-col items-center justify-center">
          <span className="font-display font-light text-7xl sm:text-8xl lg:text-9xl text-white tracking-tight">
            AV
          </span>
          <span className="mt-2 text-xs uppercase tracking-widest text-white/75">
            Abhinav Sai Vidadala
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      {portraitSrc && (
        <img
          src={portraitSrc}
          alt="Abhinav Sai Vidadala — Prompt Engineer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain object-bottom"
        />
      )}
    </div>
  );
};
