"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollAnimations = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll<HTMLElement>("[data-animate], [data-animate-load], [data-animate-children] > *")
        .forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // On-load elements (no scroll trigger, pure timed fade-up)
      gsap.utils.toArray<HTMLElement>("[data-animate-load]").forEach((el) => {
        const delay = parseFloat(el.dataset.animateDelay ?? "0");
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, delay, ease: "power2.out" },
        );
      });

      // Individual fade-up elements
      gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((el) => {
        const delay = parseFloat(el.dataset.animateDelay ?? "0");
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      // Staggered children
      gsap.utils.toArray<HTMLElement>("[data-animate-children]").forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
};
