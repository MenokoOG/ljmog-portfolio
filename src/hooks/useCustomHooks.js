import { useEffect } from 'react';

// Custom hook for body overflow
export function useBodyOverflow(overflow) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = overflow;
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [overflow]);
}

// Custom hook for resetting the gallery
export function useResetGallery(resetGallery, setResetGallery, resetActions) {
  useEffect(() => {
    if (resetGallery) {
      resetActions();
      setResetGallery(false);
    }
  }, [resetGallery, setResetGallery, resetActions]);
}
