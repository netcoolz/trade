"use client";

import AOS from "aos";
import "aos/dist/aos.css";

export const initAnimations = () => {
  AOS.init({
    duration: 1200,
    once: true,
    offset: 100,
  });
};