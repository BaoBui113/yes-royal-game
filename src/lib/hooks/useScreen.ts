import { useEffect, useState } from 'react';

type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export function useScreen(breakpoint: BreakPoint) {
  function isBreakPoint(): boolean {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      switch (breakpoint) {
        case 'xxl': {
          return width >= 1214;
        }
        case 'xl': {
          return width >= 1200;
        }
        case 'lg': {
          return width >= 1024;
        }
        case 'md': {
          return width >= 768;
        }
        case 'sm': {
          return width >= 640;
        }
        case 'xs': {
          return width >= 480;
        }
        default: {
          return true;
        }
      }
    }
    return false;
  }

  const [screen, setScreen] = useState<boolean>();
  useEffect(() => {
    function handleResize() {
      setScreen(isBreakPoint());
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return screen;
}
