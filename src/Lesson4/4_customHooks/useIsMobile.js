import { useWindowSize } from "./useWindowSize";

export function useIsMobile(breakpoint = 768, debounceMS = 300) {
  const { width } = useWindowSize(debounceMS);
  return width <= breakpoint;
}
