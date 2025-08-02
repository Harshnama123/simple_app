'use client';

import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export function OptimizedImage({ src, alt, className = '' }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : ''}`}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
    />
  );
}
