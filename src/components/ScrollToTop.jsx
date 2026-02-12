import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isMobile ? "instant" : "smooth",
    });
  }, [pathname]);

  return null;
}
