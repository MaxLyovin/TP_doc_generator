import { useState, useCallback } from 'react';

type SwipeDirection = 'left' | 'right';

export const useSwipe = (onSwipe: (direction: SwipeDirection) => void) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSwipe('left');
    } else if (isRightSwipe) {
      onSwipe('right');
    }
  }, [touchStart, touchEnd, onSwipe]);

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
