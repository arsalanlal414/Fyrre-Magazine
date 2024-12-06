// hooks/useScrollAnimation.js
import { useEffect, useRef } from "react";

const useScrollAnimation = (animationClass = "animate") => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [animationClass]);

  return elementsRef;
};

export default useScrollAnimation;
