import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that observes when a ref enters the viewport.
 * Returns [ref, isVisible].
 *
 * @param {Object} options - IntersectionObserver options
 * @param {string} options.threshold - 0-1, how much of the element must be visible
 * @param {string} options.rootMargin - margin around the root
 * @param {boolean} options.once - if true, unobserves after first trigger
 */
export default function useIntersectionObserver({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}
