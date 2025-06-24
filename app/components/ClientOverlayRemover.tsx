'use client';

import { useEffect } from 'react';

export default function ClientOverlayRemover() {
  useEffect(() => {
    const interval = setInterval(() => {
      const target = document.querySelector('[aria-label="Feedback button"]');
      if (target) {
        target.remove();
        clearInterval(interval); // stop checking once removed
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return null;
}
