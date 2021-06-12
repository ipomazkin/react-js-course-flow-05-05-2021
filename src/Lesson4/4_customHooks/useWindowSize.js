import { useEffect, useState, useMemo } from 'react';
import debounce from "debounce";

export function useWindowSize(debounceMS = 0) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize = debounce(handleResize, debounceMS);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return useMemo(() => ({
    width: size.width,
    height: size.height,
    widthToHeight: size.width / size.height,
    heightToWidth: size.height / size.width,
  }), [size]);
}
