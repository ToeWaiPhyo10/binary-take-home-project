"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export interface ScrollPosition {
  scrollY: number;
  posts?: number; // Number of posts loaded
}

export default function ScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Save current scroll position and posts count for this route
    const saveScrollPosition = () => {
      const positions = JSON.parse(
        sessionStorage.getItem("scrollPositions") || "{}"
      );
      const key = pathname + searchParams.toString();

      // Get posts count from data attributes if available
      const infiniteScrollContainer = document.querySelector(
        "[data-infinite-scroll]"
      );
      const postsCount =
        infiniteScrollContainer?.getAttribute("data-posts-count");

      positions[key] = {
        scrollY: window.scrollY,
        posts: postsCount ? parseInt(postsCount) : undefined,
      };

      sessionStorage.setItem("scrollPositions", JSON.stringify(positions));
    };

    // Restore scroll position if available
    const restoreScrollPosition = () => {
      const positions = JSON.parse(
        sessionStorage.getItem("scrollPositions") || "{}"
      );
      const key = pathname + searchParams.toString();
      const savedPosition = positions[key] as ScrollPosition | undefined;

      if (savedPosition?.scrollY !== undefined) {
        window.scrollTo(0, savedPosition.scrollY);
      }
    };

    // Add event listeners
    window.addEventListener("beforeunload", saveScrollPosition);
    window.addEventListener("scroll", saveScrollPosition);
    restoreScrollPosition();

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
      window.removeEventListener("scroll", saveScrollPosition);
    };
  }, [pathname, searchParams]);

  return null;
}
