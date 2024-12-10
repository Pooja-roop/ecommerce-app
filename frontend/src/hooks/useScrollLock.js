import { useEffect } from 'react';

const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      document.body.style.overflow = 'auto'; // Unlock scroll
    }

    // Cleanup function to ensure scroll is unlocked on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLocked]);
};

export default useScrollLock;