'use client';

import { useState, useEffect } from 'react';

interface ViewportState {
  isMobile: boolean;
  width: number;
  height: number;
}

export function useViewport(): ViewportState {
  const [viewport, setViewport] = useState<ViewportState>({
    isMobile: false,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        isMobile: window.innerWidth < 768,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
}
