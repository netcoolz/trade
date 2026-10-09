"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  ArrowLeft,
  ArrowUpLeft,
  Globe,
  Menu,
  X,
  Code2,
  Smartphone,
  Cpu,
  Briefcase,
  Palette,
  Cloud,
  CalendarDays,
  Sparkles,
  Layers3,
  MonitorPlay,
  Users,
  Megaphone,
  Trophy,
  Building2,
  CheckCircle2,
} from "lucide-react";

import {
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { SiMeta, SiStripe, SiVercel } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";

/* =========================================================
   GLOBAL STYLES
========================================================= */

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;0,800&family=Syne:wght@600;700;800&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg-1: #F2EEE8;
      --bg-2: #E5DED2;
      --bg-3: #D6CEC2;
      --bg-dark: #101010;

      --text-main: #171717;
      --text-muted: #5F5F5F;

      --orange: #FF6B2C;
      --orange-glow: rgba(255, 107, 44, 0.15);

      --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.03);
      --shadow-md: 0 12px 32px rgba(0, 0, 0, 0.04);
      --shadow-hover: 0 20px 48px rgba(0, 0, 0, 0.08);

      --font-arabic: 'Cairo', sans-serif;
      --font-tech: 'Syne', sans-serif;
      --font-serif: 'Playfair Display', serif;
    }

    html {
      scroll-behavior: smooth;
    }

    html,
    body {
      overflow-x: hidden;
      max-width: 100%;
    }

    body {
      background-color: var(--bg-1);
      background-image:
        radial-gradient(
          circle at top right,
          rgba(255,107,44,0.05),
          transparent 30%
        ),
        radial-gradient(
          circle at bottom left,
          rgba(0,0,0,0.03),
          transparent 40%
        );
      color: var(--text-main);
      font-family: var(--font-arabic);
      cursor: none;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    @media(max-width: 1399px) {
      body {
        cursor: auto;
      }
    }

    button,
    a {
      font-family: inherit;
    }

    button {
      border: 0;
    }

    .layout-wrapper {
      position: relative;
      width: 100%;
      overflow-x: hidden;
      min-height: 100vh;
    }

    .wrap {
      width: min(90%, 1200px);
      margin-inline: auto;
    }

    /* =====================================================
       CURSOR
    ===================================================== */

    .cursor,
    .cursor-follower {
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999;
      transform: translate3d(-50%, -50%, 0);
      will-change: transform;
    }

    .cursor {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--orange);
    }

    .cursor-follower {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1.5px solid rgba(255, 107, 44, 0.5);
      z-index: 9998;
      transition: width 0.2s, height 0.2s;
    }

    @media(max-width: 1399px) {
      .cursor,
      .cursor-follower {
        display: none !important;
      }
    }

    /* =====================================================
       BUTTONS
    ===================================================== */

    .btn-primary {
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      padding: 1rem 2.2rem;
      border-radius: 100px;
      background: linear-gradient(135deg, var(--orange), #FF824D);
      color: white;
      font-family: var(--font-arabic);
      font-weight: 700;
      font-size: 1.05rem;
      transition:
        transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
        box-shadow 0.3s ease;
      box-shadow: 0 8px 20px rgba(255, 107, 44, 0.25);
      direction: rtl;
    }

    .btn-primary:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 16px 32px rgba(255, 107, 44, 0.35);
    }

    .btn-outline {
      border: 1px solid rgba(0,0,0,0.06);
      background: rgba(255, 255, 255, 0.6);
      color: var(--text-main);
      padding: 1rem 2.2rem;
      border-radius: 100px;
      cursor: pointer;
      font-family: var(--font-arabic);
      font-weight: 700;
      font-size: 1.05rem;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: var(--shadow-sm);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;
    }

    .btn-outline:hover {
      transform: translate3d(0, -3px, 0);
      background: rgba(255, 255, 255, 0.9);
      box-shadow: var(--shadow-md);
      border-color: rgba(255, 107, 44, 0.3);
    }

    .btn-icon {
      width: 48px;
      height: 48px;
      padding: 0;
    }

    /* =====================================================
       NAVIGATION
    ===================================================== */

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      padding: 1.1rem 0;
      transition: 0.4s ease;
    }

    .navbar.scrolled {
      background: rgba(242, 238, 232, 0.88);
      backdrop-filter: blur(12px) saturate(180%);
      border-bottom: 1px solid rgba(0,0,0,0.04);
      padding: 0.8rem 0;
      box-shadow: 0 4px 20px rgba(0,0,0,0.02);
    }

    .navbar-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-logo {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: var(--text-main);
      text-decoration: none;
    }

    .nav-logo span {
      color: var(--orange);
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
      list-style: none;
      direction: rtl;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--text-main);
      font-family: var(--font-arabic);
      font-size: 0.95rem;
      font-weight: 700;
      position: relative;
      opacity: 0.7;
      transition: all 0.3s ease;
    }

    .nav-links a:hover {
      opacity: 1;
      color: var(--orange);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    @media(max-width: 1024px) {
      .nav-links {
        display: none;
      }

      .mobile-menu-btn {
        display: flex !important;
      }

      .desktop-cta {
        display: none !important;
      }
    }

    .mobile-menu-btn {
      display: none;
    }

    .mobile-menu {
      position: fixed;
      top: 76px;
      left: 5%;
      right: 5%;
      padding: 1.5rem;
      border-radius: 20px;
      background: rgba(242, 238, 232, 0.98);
      backdrop-filter: blur(20px);
      box-shadow: var(--shadow-hover);
      border: 1px solid rgba(0,0,0,0.05);
      z-index: 99;
      direction: rtl;
    }

    .mobile-menu a {
      display: block;
      padding: 1rem;
      color: var(--text-main);
      text-decoration: none;
      font-weight: 700;
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    /* =====================================================
       SECTIONS
    ===================================================== */

    main,
    section {
      overflow: hidden;
    }

    .section {
      padding: 10rem 0;
      position: relative;
      z-index: 2;
      isolation: isolate;
    }

    .sec-bg-1 {
      background-color: var(--bg-1);
    }

    .sec-bg-2 {
      background-color: var(--bg-2);
    }

    .sec-bg-3 {
      background-color: var(--bg-3);
    }

    .section-header {
      text-align: right;
      margin-bottom: 4.5rem;
      direction: rtl;
    }

    .section-eyebrow {
      color: var(--orange);
      font-family: var(--font-arabic);
      font-weight: 800;
      font-size: 0.95rem;
      margin-bottom: 1rem;
      letter-spacing: 0.5px;
    }

    .section-title {
      font-family: var(--font-arabic);
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      line-height: 1.2;
      margin-bottom: 1.2rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: var(--text-main);
    }

    .section-title span {
      color: var(--orange);
    }

    .section-desc {
      color: var(--text-muted);
      font-family: var(--font-arabic);
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.9;
      max-width: 680px;
    }

    /* =====================================================
       HERO
    ===================================================== */

    .hero {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      padding: 10rem 0 7rem;
      direction: rtl;
      position: relative;
      z-index: 2;
    }

    .hero-bg-text {
      position: absolute;
      top: 18%;
      left: 0;
      right: 0;
      text-align: center;
      font-family: var(--font-tech);
      font-size: clamp(8rem, 14vw, 17rem);
      font-weight: 800;
      line-height: 0.8;
      color: rgba(0, 0, 0, 0.018);
      pointer-events: none;
      z-index: -1;
      letter-spacing: -4px;
      white-space: nowrap;
    }

    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.5rem 1.2rem;
      border-radius: 100px;
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.7);
      color: var(--text-main);
      font-family: var(--font-arabic);
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-sm);
    }

    .hero-eyebrow::before {
      content: '';
      width: 6px;
      height: 6px;
      background: var(--orange);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--orange);
    }

    .hero-title {
      font-family: var(--font-arabic);
      font-size: clamp(3rem, 6vw, 5.6rem);
      line-height: 0.98;
      letter-spacing: -0.03em;
      font-weight: 800;
      margin-bottom: 1.7rem;
      color: var(--text-main);
    }

    .hero-title .orange {
      color: var(--orange);
    }

    .hero-desc {
      font-family: var(--font-arabic);
      font-size: 1.15rem;
      font-weight: 500;
      line-height: 1.9;
      color: var(--text-muted);
      max-width: 580px;
      margin-bottom: 2.5rem;
    }

    .hero-cta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    .hero-pillars {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      max-width: 600px;
    }

    .hero-pillar {
      padding: 1.2rem;
      border: 1px solid rgba(0,0,0,0.05);
      background: rgba(255,255,255,0.5);
      border-radius: 16px;
      transition: 0.3s ease;
    }

    .hero-pillar:hover {
      transform: translateY(-4px);
      background: rgba(255,255,255,0.8);
      box-shadow: var(--shadow-md);
    }

    .hero-pillar-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    .hero-pillar-label {
      font-family: var(--font-tech);
      font-size: 0.78rem;
      font-weight: 800;
      color: var(--orange);
      letter-spacing: 1px;
    }

    .hero-pillar h3 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
      font-weight: 800;
    }

    .hero-pillar p {
      color: var(--text-muted);
      font-size: 0.85rem;
      line-height: 1.6;
    }

    /* =====================================================
       HERO VISUAL
    ===================================================== */

    .hero-visual {
      position: relative;
      width: 100%;
      min-height: 580px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-card {
      position: relative;
      width: 100%;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.6);
      box-shadow: var(--shadow-md);
      transition: transform 0.6s ease;
      overflow: hidden;
    }

    .main-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-hover);
    }

    .main-card img {
      width: 100%;
      height: 500px;
      display: block;
      object-fit: cover;
      border-radius: 24px;
    }

    .visual-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(
          to top,
          rgba(16,16,16,0.55),
          transparent 55%
        );
      border-radius: 24px;
      pointer-events: none;
    }

    .visual-label {
      position: absolute;
      right: 2rem;
      bottom: 2rem;
      color: white;
      direction: rtl;
      z-index: 2;
    }

    .visual-label small {
      display: block;
      font-family: var(--font-tech);
      color: var(--orange);
      font-weight: 800;
      letter-spacing: 1px;
      margin-bottom: 0.4rem;
    }

    .visual-label h3 {
      font-size: 2rem;
      font-weight: 800;
    }

    /* =====================================================
       BRAND / TECHNOLOGY STRIP
    ===================================================== */

    .client-logos {
      padding: 4.5rem 0;
      background: var(--bg-2);
      border-bottom: 1px solid rgba(0,0,0,0.04);
      border-top: 1px solid rgba(0,0,0,0.04);
      overflow: hidden;
      position: relative;
    }

    .logos-title {
      font-family: var(--font-arabic);
      color: var(--text-muted);
      font-weight: 600;
      font-size: 0.9rem;
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .logos-track-container {
      width: 100%;
      overflow: hidden;
    }

    .logos-track {
      display: flex;
      width: max-content;
      animation: marquee 45s linear infinite;
    }

    .logos-flex {
      display: flex;
      align-items: center;
      gap: 5rem;
      padding-right: 5rem;
    }

    @keyframes marquee {
      0% {
        transform: translate3d(0, 0, 0);
      }

      100% {
        transform: translate3d(-50%, 0, 0);
      }
    }

    .logos-flex svg {
      color: #7A7A7A;
      opacity: 0.7;
      transition: 0.4s ease;
      filter: grayscale(100%);
    }

    .logos-flex svg:hover {
      color: var(--text-main);
      opacity: 1;
      transform: scale(1.08);
      filter: none;
    }

    /* =====================================================
       TWO WORLDS
    ===================================================== */

    .worlds-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      direction: rtl;
    }

    .world-card {
      position: relative;
      padding: 3.5rem;
      min-height: 400px;
      border-radius: 28px;
      overflow: hidden;
      background: rgba(255,255,255,0.55);
      border: 1px solid rgba(0,0,0,0.04);
      box-shadow: var(--shadow-sm);
      transition: all 0.5s ease;
    }

    .world-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-hover);
      background: rgba(255,255,255,0.8);
    }

    .world-card.dark {
      background: var(--bg-dark);
      color: white;
    }

    .world-card.dark:hover {
      background: #151515;
    }

    .world-number {
      position: absolute;
      left: 2rem;
      top: 1.5rem;
      font-family: var(--font-tech);
      font-size: 5rem;
      font-weight: 800;
      opacity: 0.05;
    }

    .world-icon {
      width: 62px;
      height: 62px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,107,44,0.1);
      color: var(--orange);
      margin-bottom: 2rem;
    }

    .world-card h3 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    .world-card > p {
      color: var(--text-muted);
      line-height: 1.9;
      max-width: 470px;
      margin-bottom: 2rem;
    }

    .world-card.dark > p {
      color: rgba(255,255,255,0.68);
    }

    .world-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    .world-list span {
      padding: 0.55rem 0.9rem;
      border-radius: 100px;
      background: rgba(0,0,0,0.04);
      font-size: 0.8rem;
      font-weight: 700;
    }

    .world-card.dark .world-list span {
      background: rgba(255,255,255,0.07);
      color: rgba(255,255,255,0.85);
    }

    /* =====================================================
       SERVICES
    ===================================================== */

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      direction: rtl;
    }

    .service-card {
      padding: 2.5rem 2rem;
      border-radius: 20px;
      background: rgba(255,255,255,0.6);
      transition: all 0.4s ease;
      box-shadow: var(--shadow-sm);
      border: 1px solid rgba(0,0,0,0.03);
    }

    .service-card:hover {
      transform: translateY(-6px);
      background: rgba(255,255,255,0.95);
      box-shadow: var(--shadow-md);
    }

    .service-card.event:hover .service-icon {
      background: var(--orange);
      color: white;
    }

    .service-icon {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: white;
      border: 1px solid rgba(0,0,0,0.05);
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-main);
      transition: all 0.4s ease;
      box-shadow: var(--shadow-sm);
    }

    .service-card:hover .service-icon {
      background: var(--text-main);
      color: white;
      transform: scale(1.05);
    }

    .service-title {
      margin-bottom: 0.7rem;
      font-size: 1.25rem;
      font-weight: 800;
    }

    .service-desc {
      color: var(--text-muted);
      font-weight: 500;
      line-height: 1.8;
      font-size: 0.98rem;
    }

    .service-category {
      font-family: var(--font-tech);
      font-size: 0.68rem;
      color: var(--orange);
      font-weight: 800;
      letter-spacing: 1px;
      margin-bottom: 0.8rem;
    }

    /* =====================================================
       PROJECTS
    ===================================================== */

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      direction: rtl;
    }

    .project-card {
      border-radius: 22px;
      overflow: hidden;
      background: rgba(255,255,255,0.72);
      transition: all 0.5s ease;
      box-shadow: var(--shadow-sm);
      cursor: pointer;
    }

    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-hover);
      background: rgba(255,255,255,0.95);
    }

    .project-image-wrapper {
      width: 100%;
      height: 290px;
      overflow: hidden;
    }

    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
    }

    .project-card:hover .project-image {
      transform: scale(1.05);
    }

    .project-content {
      padding: 1.8rem;
    }

    .project-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.8rem;
      direction: rtl;
    }

    .project-tag {
      color: var(--orange);
      font-family: var(--font-tech);
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.8px;
    }

    .project-arrow {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(0,0,0,0.04);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s ease;
    }

    .project-card:hover .project-arrow {
      background: var(--orange);
      color: white;
    }

    .project-title {
      font-family: var(--font-serif);
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
      font-weight: 700;
    }

    .project-desc {
      color: var(--text-muted);
      font-weight: 500;
      line-height: 1.7;
      font-size: 1rem;
    }

    /* =====================================================
       STATS
    ===================================================== */

    .stats-banner {
      padding: 3rem 0 8rem;
      direction: rtl;
    }

    .stats-grid-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      border-radius: 20px;
      background: rgba(0,0,0,0.05);
      box-shadow: var(--shadow-md);
      overflow: hidden;
    }

    .stat-box {
      background: rgba(255,255,255,0.6);
      padding: 3.5rem 1.5rem;
      text-align: center;
      transition: background 0.4s ease;
    }

    .stat-box:hover {
      background: rgba(255,255,255,0.85);
    }

    .stat-box-value {
      font-family: var(--font-serif);
      font-size: 3rem;
      font-weight: 700;
      color: var(--orange);
      margin-bottom: 0.5rem;
      line-height: 1;
    }

    .stat-box-label {
      color: var(--text-main);
      font-size: 1rem;
      font-weight: 700;
    }

    /* =====================================================
       PROCESS
    ===================================================== */

    .process-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      direction: rtl;
    }

    .process-card {
      padding: 2rem;
      border-top: 2px solid rgba(0,0,0,0.08);
      position: relative;
    }

    .process-card:hover {
      border-color: var(--orange);
    }

    .process-number {
      font-family: var(--font-tech);
      color: var(--orange);
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 1px;
      margin-bottom: 2rem;
    }

    .process-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.7rem;
      font-weight: 800;
    }

    .process-card p {
      color: var(--text-muted);
      line-height: 1.8;
      font-size: 0.95rem;
    }

    /* =====================================================
       CTA
    ===================================================== */

    .cta-wrapper {
      border-radius: 28px;
      overflow: hidden;
      padding: 7rem 2rem;
      text-align: center;
      position: relative;
      background: var(--bg-dark);
      border: 1px solid rgba(255,255,255,0.06);
      box-shadow: 0 30px 60px rgba(0,0,0,0.15);
      direction: rtl;
    }

    .cta-glow {
      position: absolute;
      width: 600px;
      height: 600px;
      background: var(--orange);
      filter: blur(60px);
      opacity: 0.14;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      pointer-events: none;
    }

    .cta-content {
      position: relative;
      z-index: 2;
    }

    .cta-content .section-title {
      color: white;
    }

    .cta-content .section-desc {
      color: rgba(255,255,255,0.7);
      margin-inline: auto;
      margin-bottom: 2.5rem;
    }

    /* =====================================================
       FOOTER
    ===================================================== */

    .footer {
      border-top: 1px solid rgba(0,0,0,0.06);
      padding: 5rem 0 2rem;
      background: var(--bg-1);
      position: relative;
      z-index: 2;
      direction: rtl;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
    }

    .footer-text {
      color: var(--text-muted);
      line-height: 1.9;
      font-weight: 500;
      margin-bottom: 2rem;
      max-width: 330px;
      font-size: 0.95rem;
    }

    .social-links {
      display: flex;
      gap: 0.7rem;
    }

    .social-icon {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: rgba(255,255,255,0.6);
      border: 1px solid rgba(0,0,0,0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-main);
      transition: all 0.3s ease;
      cursor: pointer;
      box-shadow: var(--shadow-sm);
    }

    .social-icon:hover {
      background: var(--text-main);
      color: white;
      transform: translateY(-3px);
    }

    .footer-title {
      margin-bottom: 1.5rem;
      font-size: 1.05rem;
      font-weight: 800;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      color: var(--text-muted);
      font-weight: 600;
      font-size: 0.9rem;
    }

    .footer-links a {
      color: inherit;
      text-decoration: none;
      transition: 0.3s ease;
    }

    .footer-links a:hover {
      color: var(--orange);
      transform: translateX(-4px);
    }

    .footer-bottom {
      border-top: 1px solid rgba(0,0,0,0.06);
      margin-top: 4rem;
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-muted);
      font-family: var(--font-tech);
      font-weight: 600;
      font-size: 0.8rem;
      direction: ltr;
    }

    /* =====================================================
       LANGUAGE / LTR OVERRIDES
    ===================================================== */

    .layout-wrapper[dir="ltr"] .btn-primary,
    .layout-wrapper[dir="ltr"] .nav-links,
    .layout-wrapper[dir="ltr"] .mobile-menu,
    .layout-wrapper[dir="ltr"] .section-header,
    .layout-wrapper[dir="ltr"] .hero,
    .layout-wrapper[dir="ltr"] .visual-label,
    .layout-wrapper[dir="ltr"] .worlds-grid,
    .layout-wrapper[dir="ltr"] .services-grid,
    .layout-wrapper[dir="ltr"] .projects-grid,
    .layout-wrapper[dir="ltr"] .project-meta,
    .layout-wrapper[dir="ltr"] .stats-banner,
    .layout-wrapper[dir="ltr"] .process-grid,
    .layout-wrapper[dir="ltr"] .cta-wrapper,
    .layout-wrapper[dir="ltr"] .footer {
      direction: ltr;
    }

    .layout-wrapper[dir="ltr"] .visual-label {
      right: auto;
      left: 2rem;
    }

    .layout-wrapper[dir="ltr"] .footer-links a:hover {
      transform: translateX(4px);
    }

    .language-switcher {
      width: auto;
      min-width: 48px;
      padding-inline: 0.8rem;
    }

    .language-switcher span {
      font-family: var(--font-tech);
      font-size: 0.72rem;
      font-weight: 800;
    }

    /* =====================================================
       RESPONSIVE
    ===================================================== */

    @media(max-width: 1100px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .process-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media(max-width: 1024px) {
      .hero {
        grid-template-columns: 1fr;
        padding: 9rem 0 5rem;
        text-align: center;
        gap: 3rem;
      }

      .hero-desc {
        margin-inline: auto;
      }

      .hero-cta {
        justify-content: center;
      }

      .hero-pillars {
        margin-inline: auto;
        text-align: right;
      }

      .hero-visual {
        min-height: 500px;
      }

      .worlds-grid {
        grid-template-columns: 1fr;
      }

      .stats-grid-wrapper {
        grid-template-columns: repeat(2, 1fr);
      }

      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media(max-width: 768px) {
      .section {
        padding: 7rem 0;
      }

      .hero-title {
        font-size: clamp(2.8rem, 13vw, 4.5rem);
      }

      .hero-pillars {
        grid-template-columns: 1fr;
      }

      .hero-visual {
        min-height: auto;
      }

      .main-card img {
        height: 400px;
      }

      .services-grid,
      .projects-grid {
        grid-template-columns: 1fr;
      }

      .process-grid {
        grid-template-columns: 1fr;
      }

      .world-card {
        padding: 2.5rem;
        min-height: auto;
      }
    }

    @media(max-width: 576px) {
      .wrap {
        width: min(92%, 1200px);
      }

      .hero {
        padding-top: 8rem;
      }

      .hero-cta {
        flex-direction: column;
      }

      .hero-cta .btn-primary,
      .hero-cta .btn-outline {
        width: 100%;
      }

      .hero-pillars {
        width: 100%;
      }

      .stats-grid-wrapper {
        grid-template-columns: 1fr 1fr;
      }

      .stat-box {
        padding: 2.5rem 1rem;
      }

      .stat-box-value {
        font-size: 2.3rem;
      }

      .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .footer-text {
        margin-inline: auto;
      }

      .social-links {
        justify-content: center;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .cta-wrapper {
        padding: 5rem 1.5rem;
      }
    }
  `}</style>
);

/* =========================================================
   DATA
========================================================= */

const navLinks = [
  { label: "الرئيسية", href: "#الرئيسية" },
  { label: "مجالاتنا", href: "#مجالاتنا" },
  { label: "خدماتنا", href: "#الخدمات" },
  { label: "أعمالنا", href: "#أعمالنا" },
  { label: "منهجيتنا", href: "#منهجيتنا" },
  { label: "تواصل معنا", href: "#تواصل" },
];

const services = [
  {
    title: "إدارة وتنظيم الفعاليات",
    category: "EVENTS",
    desc: "نخطط وندير الفعاليات من الفكرة الأولى حتى التنفيذ الكامل، مع اهتمام دقيق بالتفاصيل والتجربة.",
    icon: CalendarDays,
  },
  {
    title: "إنتاج الفعاليات",
    category: "EVENT PRODUCTION",
    desc: "إنتاج متكامل للمسرح، الإضاءة، الصوت، الشاشات، التجهيزات والتنفيذ الميداني.",
    icon: MonitorPlay,
  },
  {
    title: "المؤتمرات والمعارض",
    category: "EXHIBITIONS",
    desc: "تصميم وإدارة المؤتمرات والمعارض والفعاليات المؤسسية بتجربة احترافية متكاملة.",
    icon: Building2,
  },
  {
    title: "تطوير المواقع",
    category: "DIGITAL",
    desc: "مواقع رقمية حديثة عالية الأداء، مصممة لتقديم تجربة مستخدم قوية وتحقيق أهداف العمل.",
    icon: Code2,
  },
  {
    title: "تطبيقات الجوال",
    category: "DIGITAL",
    desc: "تطوير تطبيقات iOS وAndroid وحلول Mobile متكاملة قابلة للنمو والتوسع.",
    icon: Smartphone,
  },
  {
    title: "الأنظمة الذكية والـ AI",
    category: "TECHNOLOGY",
    desc: "حلول ذكية وأتمتة ودمج للذكاء الاصطناعي لتحسين العمليات ورفع الإنتاجية.",
    icon: Cpu,
  },
  {
    title: "حلول الأعمال",
    category: "BUSINESS",
    desc: "أنظمة ومنصات مخصصة لإدارة العمليات، البيانات، المشاريع وسير العمل.",
    icon: Briefcase,
  },
  {
    title: "الهوية والتجربة البصرية",
    category: "CREATIVE",
    desc: "هوية بصرية ومحتوى إبداعي وتجارب مرئية تعزز حضور العلامة التجارية.",
    icon: Palette,
  },
  {
    title: "الحلول السحابية",
    category: "CLOUD",
    desc: "بنية رقمية مرنة وآمنة تساعد الشركات على التوسع وإدارة خدماتها بكفاءة.",
    icon: Cloud,
  },
];

const projects = [
  {
    title: "Kuwait Shows",
    image: "/projects/kuwaitshows.png",
    tag: "EVENTS × TECHNOLOGY",
    desc: "منصة متخصصة لإدارة البطولات والفعاليات والتحكيم والعمليات الرقمية.",
    href: "https://www.kuwaitshows.com/",
  },
  {
    title: "MARBATX",
    image: "/projects/marbatx.png",
    tag: "SMART PLATFORM",
    desc: "نظام ذكي متكامل لإدارة الإسطبلات والخيل والعمليات اليومية.",
    href: "https://marbatx.com/",
  },
  {
    title: "CargoX",
    image: "/projects/cargo.png",
    tag: "LOGISTICS",
    desc: "حلول رقمية للنقل والخدمات اللوجستية مع إدارة ومتابعة العمليات.",
    href: "https://caragox.com/",
  },
  {
    title: "HalalX",
    image: "/projects/halal.png",
    tag: "DIGITAL PLATFORM",
    desc: "منصة رقمية تربط البائعين والمشترين وتقدم تجربة تجارة متطورة.",
href: "https://www.halalz.net",
  },
];

const process = [
  {
    number: "01",
    title: "نفهم",
    desc: "نبدأ بفهم فكرتك، أهدافك، جمهورك والتحديات التي تريد حلها.",
  },
  {
    number: "02",
    title: "نخطط",
    desc: "نحوّل الفكرة إلى استراتيجية واضحة وخطة تنفيذ دقيقة.",
  },
  {
    number: "03",
    title: "ننّفذ",
    desc: "فريقنا يتولى التصميم، التقنية، الإنتاج والتنفيذ باحترافية.",
  },
  {
    number: "04",
    title: "نطوّر",
    desc: "نقيس النتائج ونواصل التطوير حتى تصبح التجربة أفضل باستمرار.",
  },
];

type Lang = "ar" | "en";

const uiTranslations: Record<string, string> = {
  "الرئيسية": "Home",
  "مجالاتنا": "Our Fields",
  "خدماتنا": "Services",
  "أعمالنا": "Our Work",
  "منهجيتنا": "Our Process",
  "تواصل معنا": "Contact Us",
  "ابدأ مشروعك": "Start a Project",
  "اكتشف TradeX": "Discover TradeX",
  "تحدث معنا": "Talk to Us",
  "شركة كويتية · Events × Digital": "Kuwaiti Company · Events × Digital",
  ".": ".",
  "التجارب.": "Experiences.",
  "نبني الحلول.": "We Build Solutions.",
  "TradeX شركة كويتية تجمع بين قوة تنظيم وإنتاج الفعاليات والتقنيات الرقمية المتقدمة، لنحوّل الأفكار إلى تجارب مؤثرة وحلول تصنع فرقًا حقيقيًا.": "TradeX is a Kuwaiti company combining event management and production with advanced digital technologies to turn ideas into impactful experiences and solutions that make a real difference.",
  "فعاليات تُصنع للتذكر": "Events Made to Be Remembered",
  "تخطيط، تنظيم، إنتاج وتنفيذ متكامل للفعاليات.": "Planning, management, production and complete event execution.",
  "حلول رقمية للمستقبل": "Digital Solutions for the Future",
  "مواقع، تطبيقات، أنظمة ذكية ومنصات أعمال متقدمة.": "Websites, apps, smart systems and advanced business platforms.",
  "نستخدم أحدث التقنيات والمنصات لبناء تجارب وحلول بمعايير عالمية": "We use modern technologies and platforms to build experiences and solutions to global standards.",
  "مجالان مختلفان،": "Two Different Fields,",
  "رؤية واحدة.": "One Vision.",
  "في TradeX نجمع بين الإبداع والتنفيذ الميداني من جهة، والتقنية والابتكار الرقمي من جهة أخرى، لنقدم حلولًا متكاملة للشركات والمؤسسات.": "At TradeX, we combine creativity and on-ground execution with technology and digital innovation to deliver integrated solutions for companies and organizations.",
  "نخطط وننظم وننتج الفعاليات والمؤتمرات والمعارض والتجارب الخاصة من الفكرة وحتى لحظة التنفيذ.": "We plan, manage and produce events, conferences, exhibitions and special experiences from the first idea to execution.",
  "نصمم ونطور المنتجات والمنصات الرقمية والأنظمة الذكية التي تساعد الشركات على النمو والتحول الرقمي.": "We design and develop digital products, platforms and smart systems that help businesses grow and transform digitally.",
  "من الفكرة": "From the Idea",
  "إلى": "to",
  "التنفيذ.": "Execution.",
  "مجموعة متكاملة من الخدمات الإبداعية والتقنية والتنفيذية تحت مظلة واحدة.": "A complete range of creative, technology and execution services under one roof.",
  "أفكار تحولت إلى": "Ideas Turned Into",
  "واقع.": "Reality.",
  "نماذج من المنصات والحلول الرقمية التي طورناها لقطاعات واحتياجات مختلفة.": "A selection of platforms and digital solutions we developed for different industries and needs.",
  "تنظيم وإنتاج فعاليات": "Event Management & Production",
  "حلول ومنصات رقمية": "Digital Platforms & Solutions",
  "ذكاء وأتمتة": "AI & Automation",
  "دعم وتطوير مستمر": "Continuous Support & Development",
  "نبدأ بفكرة.": "We Start With an Idea.",
  "ونصل إلى": "And Reach",
  "نتيجة.": "Results.",
  "نعمل بمنهجية واضحة تجمع بين التخطيط والإبداع والتنفيذ والقياس والتطوير.": "We follow a clear methodology combining planning, creativity, execution, measurement and continuous improvement.",
  "لماذا TradeX؟": "Why TradeX?",
  "شريك واحد،": "One Partner,",
  "إمكانيات متعددة.": "Multiple Capabilities.",
  "فريق متعدد التخصصات": "A Multidisciplinary Team",
  "نحن كفريق واحد يجمع بين إدارة الفعاليات، الإبداع، التصميم، التقنية والتسويق.": "We work as one team combining event management, creativity, design, technology and marketing.",
  "نعمل كفريق واحد يجمع بين إدارة الفعاليات، الإبداع، التصميم، التقنية والتسويق.": "We work as one team combining event management, creativity, design, technology and marketing.",
  "تنفيذ من البداية للنهاية": "End-to-End Execution",
  "لا نكتفي بتقديم الأفكار. نتولى تحويلها إلى تجربة أو منتج فعلي قابل للاستخدام والنمو.": "We do more than provide ideas. We turn them into real experiences and products built for use and growth.",
  "لديك فكرة؟": "Have an Idea?",
  "سواء كنت تخطط لفعالية استثنائية أو تحتاج إلى منصة رقمية أو نظام ذكي، فريق TradeX جاهز لتحويل فكرتك إلى واقع.": "Whether you are planning an exceptional event or need a digital platform or smart system, the TradeX team is ready to turn your idea into reality.",
  "ابدأ مشروعك الآن": "Start Your Project Now",
  "TradeX شركة كويتية متخصصة في تنظيم وإنتاج الفعاليات، وتطوير المواقع والتطبيقات والأنظمة والحلول الرقمية المتقدمة.": "TradeX is a Kuwaiti company specializing in event management and production, websites, mobile apps, smart systems and advanced digital solutions.",
  "روابط سريعة": "Quick Links",
  "تنظيم الفعاليات": "Event Management",
  "إنتاج الفعاليات": "Event Production",
  "تطوير المواقع": "Website Development",
  "تطبيقات الجوال": "Mobile Apps",
  "الأنظمة الذكية": "Smart Systems",
  "الكويت": "Kuwait",
};

const serviceTranslations: Record<string, string> = {
  "إدارة وتنظيم الفعاليات": "Event Management",
  "نخطط وندير الفعاليات من الفكرة الأولى حتى التنفيذ الكامل، مع اهتمام دقيق بالتفاصيل والتجربة.": "We plan and manage events from the first idea through full execution, with close attention to detail and experience.",
  "إنتاج الفعاليات": "Event Production",
  "إنتاج متكامل للمسرح، الإضاءة، الصوت، الشاشات، التجهيزات والتنفيذ الميداني.": "Complete production for stages, lighting, sound, screens, equipment and on-ground execution.",
  "المؤتمرات والمعارض": "Conferences & Exhibitions",
  "تصميم وإدارة المؤتمرات والمعارض والفعاليات المؤسسية بتجربة احترافية متكاملة.": "Design and management of conferences, exhibitions and corporate events with a complete professional experience.",
  "تطوير المواقع": "Website Development",
  "مواقع رقمية حديثة عالية الأداء، مصممة لتقديم تجربة مستخدم قوية وتحقيق أهداف العمل.": "Modern, high-performance websites designed for strong user experiences and business goals.",
  "تطبيقات الجوال": "Mobile Applications",
  "تطوير تطبيقات iOS وAndroid وحلول Mobile متكاملة قابلة للنمو والتوسع.": "iOS and Android applications and integrated mobile solutions built to scale.",
  "الأنظمة الذكية والـ AI": "Smart Systems & AI",
  "حلول ذكية وأتمتة ودمج للذكاء الاصطناعي لتحسين العمليات ورفع الإنتاجية.": "Smart solutions, automation and AI integration to improve operations and productivity.",
  "حلول الأعمال": "Business Solutions",
  "أنظمة ومنصات مخصصة لإدارة العمليات، البيانات، المشاريع وسير العمل.": "Custom systems and platforms for operations, data, projects and workflows.",
  "الهوية والتجربة البصرية": "Visual Identity & Experience",
  "هوية بصرية ومحتوى إبداعي وتجارب مرئية تعزز حضور العلامة التجارية.": "Visual identity, creative content and experiences that strengthen your brand presence.",
  "الحلول السحابية": "Cloud Solutions",
  "بنية رقمية مرنة وآمنة تساعد الشركات على التوسع وإدارة خدماتها بكفاءة.": "Flexible and secure digital infrastructure that helps businesses scale and operate efficiently.",
};

const projectTranslations: Record<string, string> = {
  "منصة متخصصة لإدارة البطولات والفعاليات والتحكيم والعمليات الرقمية.": "A specialized platform for managing championships, events, judging and digital operations.",
  "نظام ذكي متكامل لإدارة الإسطبلات والخيل والعمليات اليومية.": "An integrated smart system for managing stables, horses and daily operations.",
  "حلول رقمية للنقل والخدمات اللوجستية مع إدارة ومتابعة العمليات.": "Digital solutions for transportation and logistics with operational management and tracking.",
  "منصة رقمية تربط البائعين والمشترين وتقدم تجربة تجارة متطورة.": "A digital platform connecting buyers and sellers through an advanced commerce experience.",
};

const processTranslations: Record<string, string> = {
  "نفهم": "Understand",
  "نبدأ بفهم فكرتك، أهدافك، جمهورك والتحديات التي تريد حلها.": "We start by understanding your idea, goals, audience and the challenges you want to solve.",
  "نخطط": "Plan",
  "نحوّل الفكرة إلى استراتيجية واضحة وخطة تنفيذ دقيقة.": "We turn the idea into a clear strategy and precise execution plan.",
  "ننّفذ": "Execute",
  "فريقنا يتولى التصميم، التقنية، الإنتاج والتنفيذ باحترافية.": "Our team handles design, technology, production and execution professionally.",
  "نطوّر": "Evolve",
  "نقيس النتائج ونواصل التطوير حتى تصبح التجربة أفضل باستمرار.": "We measure results and continuously improve the experience.",
};

const translateText = (value: string, lang: Lang) => {
  if (lang === "ar") return value;
  return uiTranslations[value] || serviceTranslations[value] || projectTranslations[value] || processTranslations[value] || value;
};

/* =========================================================
   PAGE
========================================================= */

export default function HomePage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("ar");

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      mirror: false,
    });

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;
    let animationFrameId: number;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const renderCursor = () => {
      if (window.innerWidth >= 1400) {
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;

        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;

        if (cursorRef.current) {
          cursorRef.current.style.transform =
            `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
        }

        if (followerRef.current) {
          followerRef.current.style.transform =
            `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
        }
      }

      animationFrameId = requestAnimationFrame(renderCursor);
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", onScroll, { passive: true });

    renderCursor();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("tradex-language") as Lang | null;
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    const direction = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = direction;
    document.body.dir = direction;
    window.localStorage.setItem("tradex-language", lang);

    const root = document.querySelector(".layout-wrapper");
    if (root) root.setAttribute("dir", direction);

    if (root) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      let node: Node | null;
      while ((node = walker.nextNode())) nodes.push(node as Text);

      nodes.forEach((textNode) => {
        const raw = textNode.textContent || "";
        const trimmed = raw.trim();
        if (!trimmed) return;

        const parent = textNode.parentElement;
        if (!parent) return;

        let original = parent.getAttribute("data-tradex-original");
        if (!original) {
          original = trimmed;
          parent.setAttribute("data-tradex-original", original);
        }

        const translated = translateText(original, lang);
        const finalText = lang === "ar" ? original : translated;
        const leading = raw.slice(0, raw.indexOf(trimmed));
        const trailing = raw.slice(raw.indexOf(trimmed) + trimmed.length);
        textNode.textContent = `${leading}${finalText}${trailing}`;
      });
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((current) => (current === "ar" ? "en" : "ar"));
    setMobileOpen(false);
  };

  return (
    <div className="layout-wrapper" dir={lang === "ar" ? "rtl" : "ltr"}>
      <GlobalStyles />

      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap navbar-inner">

          <a href="#الرئيسية" className="nav-logo">
            Trade<span>X</span>
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">

            <button
              className="btn-outline btn-icon language-switcher"
              aria-label="Language"
              onClick={toggleLanguage}
              title={lang === "ar" ? "English" : "العربية"}
            >
              <Globe size={18} />
              <span>{lang === "ar" ? "EN" : "العربية"}</span>
            </button>

            <a
              href="mailto:info@tradexkw.com"
              className="btn-primary desktop-cta"
            >
              ابدأ مشروعك
              <ArrowLeft size={17} />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn-outline btn-icon mobile-menu-btn"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a href="mailto:info@tradexkw.com">
            ابدأ مشروعك
          </a>
        </div>
      )}

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero wrap sec-bg-1" id="الرئيسية">

          <div className="hero-bg-text">
            EVENTS × DIGITAL
          </div>

          <div>

            <div
              className="hero-eyebrow"
              data-aos="fade-up"
            >
              شركة كويتية · Events × Digital
            </div>

            <h1
              className="hero-title"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              نصنع
              <br />
              <span className="orange">التجارب.</span>
              <br />
              نبني الحلول.
            </h1>

            <p
              className="hero-desc"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              TradeX شركة كويتية تجمع بين قوة تنظيم وإنتاج الفعاليات
              والتقنيات الرقمية المتقدمة، لنحوّل الأفكار إلى تجارب
              مؤثرة وحلول تصنع فرقًا حقيقيًا.
            </p>

            <div
              className="hero-cta"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <a
                href="#مجالاتنا"
                className="btn-primary"
              >
                اكتشف TradeX
                <ArrowLeft size={18} />
              </a>

              <a
                href="mailto:info@tradexkw.com"
                className="btn-outline"
              >
                تحدث معنا
              </a>
            </div>

            <div
              className="hero-pillars"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="hero-pillar">
                <div className="hero-pillar-top">
                  <span className="hero-pillar-label">
                    EVENTS
                  </span>
                  <CalendarDays size={20} />
                </div>

                <h3>
                  فعاليات تُصنع للتذكر
                </h3>

                <p>
                  تخطيط، تنظيم، إنتاج وتنفيذ متكامل للفعاليات.
                </p>
              </div>

              <div className="hero-pillar">
                <div className="hero-pillar-top">
                  <span className="hero-pillar-label">
                    DIGITAL
                  </span>
                  <Code2 size={20} />
                </div>

                <h3>
                  حلول رقمية للمستقبل
                </h3>

                <p>
                  مواقع، تطبيقات، أنظمة ذكية ومنصات أعمال متقدمة.
                </p>
              </div>

            </div>
          </div>

          <div
            className="hero-visual"
            data-aos="fade-left"
            data-aos-duration="1000"
          >

            <div className="main-card">
              <Image
                src="/projects/tradexsk.png"
                alt="TradeX Events and Digital"
                width={1000}
                height={700}
                priority
              />

              <div className="visual-overlay" />

              <div className="visual-label">
                <small>TRADEX</small>
                <h3>Events × Digital</h3>
              </div>
            </div>


          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY STRIP
        ===================================================== */}

        <section className="client-logos">

          <div className="wrap">

            <p className="logos-title">
              نستخدم أحدث التقنيات والمنصات لبناء تجارب وحلول بمعايير عالمية
            </p>

          </div>

          <div className="logos-track-container">

            <div className="logos-track">

              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="logos-flex"
                >
                  <FaApple size={36} />
                  <FaMicrosoft size={32} />
                  <SiStripe size={46} />
                  <FaGoogle size={30} />
                  <SiMeta size={42} />
                  <SiVercel size={32} />
                  <FaAmazon size={36} />
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            TWO WORLDS
        ===================================================== */}

        <section
          className="section sec-bg-3"
          id="مجالاتنا"
        >

          <div className="wrap">

            <div
              className="section-header"
              data-aos="fade-up"
            >

              <div className="section-eyebrow">
                مجالاتنا
              </div>

              <h2 className="section-title">
                مجالان مختلفان،
                <br />
                <span>رؤية واحدة.</span>
              </h2>

              <p className="section-desc">
                في TradeX نجمع بين الإبداع والتنفيذ الميداني من جهة،
                والتقنية والابتكار الرقمي من جهة أخرى، لنقدم حلولًا
                متكاملة للشركات والمؤسسات.
              </p>

            </div>

            <div className="worlds-grid">

              {/* EVENTS */}

              <div
                className="world-card"
                data-aos="fade-up"
              >

                <span className="world-number">
                  01
                </span>

                <div className="world-icon">
                  <Sparkles size={28} />
                </div>

                <h3>
                  Events & Experiences
                </h3>

                <p>
                  نخطط وننظم وننتج الفعاليات والمؤتمرات والمعارض
                  والتجارب الخاصة من الفكرة وحتى لحظة التنفيذ.
                </p>

                <div className="world-list">
                  <span>Event Management</span>
                  <span>Production</span>
                  <span>Conferences</span>
                  <span>Exhibitions</span>
                  <span>VIP Experiences</span>
                  <span>Brand Events</span>
                </div>

              </div>

              {/* DIGITAL */}

              <div
                className="world-card dark"
                data-aos="fade-up"
                data-aos-delay="100"
              >

                <span className="world-number">
                  02
                </span>

                <div className="world-icon">
                  <Layers3 size={28} />
                </div>

                <h3>
                  Digital & Technology
                </h3>

                <p>
                  نصمم ونطور المنتجات والمنصات الرقمية والأنظمة
                  الذكية التي تساعد الشركات على النمو والتحول الرقمي.
                </p>

                <div className="world-list">
                  <span>Websites</span>
                  <span>Mobile Apps</span>
                  <span>Smart Systems</span>
                  <span>AI Solutions</span>
                  <span>SaaS Platforms</span>
                  <span>Automation</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          className="section sec-bg-2"
          id="الخدمات"
        >

          <div className="wrap">

            <div
              className="section-header"
              data-aos="fade-up"
            >

              <div className="section-eyebrow">
                خدماتنا
              </div>

              <h2 className="section-title">
                من الفكرة
                <br />
                إلى <span>التنفيذ.</span>
              </h2>

              <p className="section-desc">
                مجموعة متكاملة من الخدمات الإبداعية والتقنية
                والتنفيذية تحت مظلة واحدة.
              </p>

            </div>

            <div className="services-grid">

              {services.map((service, index) => {

                const IconComponent = service.icon;

                return (
                  <div
                    key={service.title}
                    className={`service-card ${
                      service.category === "EVENTS" ||
                      service.category === "EVENT PRODUCTION" ||
                      service.category === "EXHIBITIONS"
                        ? "event"
                        : ""
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >

                    <div className="service-category">
                      {service.category}
                    </div>

                    <div className="service-icon">
                      <IconComponent
                        size={24}
                        strokeWidth={1.6}
                      />
                    </div>

                    <h3 className="service-title">
                      {service.title}
                    </h3>

                    <p className="service-desc">
                      {service.desc}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section
          className="section sec-bg-3"
          id="أعمالنا"
        >

          <div className="wrap">

            <div
              className="section-header"
              data-aos="fade-up"
            >

              <div className="section-eyebrow">
                أعمالنا
              </div>

              <h2 className="section-title">
                أفكار تحولت إلى
                <br />
                <span>واقع.</span>
              </h2>

              <p className="section-desc">
                نماذج من المنصات والحلول الرقمية التي طورناها
                لقطاعات واحتياجات مختلفة.
              </p>

            </div>

            <div className="projects-grid">

              {projects.map((project, index) => (

                <a
                  key={project.title}
                  href={project.href || "#"}
                  className="project-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noopener noreferrer" : undefined}
                  aria-label={project.href ? `Visit ${project.title}` : project.title}
                  style={{ textDecoration: "none", color: "inherit" }}
                >

                  <div className="project-image-wrapper">

                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={550}
                      className="project-image"
                    />

                  </div>

                  <div className="project-content">

                    <div className="project-meta">

                      <span className="project-tag">
                        {project.tag}
                      </span>

                      <div className="project-arrow">
                        <ArrowUpLeft size={17} />
                      </div>

                    </div>

                    <h3 className="project-title">
                      {project.title}
                    </h3>

                    <p className="project-desc">
                      {project.desc}
                    </p>

                  </div>

                </a>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="stats-banner sec-bg-1">

          <div className="wrap">

            <div className="stats-grid-wrapper">

              <div className="stat-box">
                <div className="stat-box-value">
                  Events
                </div>
                <div className="stat-box-label">
                  تنظيم وإنتاج فعاليات
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-box-value">
                  Digital
                </div>
                <div className="stat-box-label">
                  حلول ومنصات رقمية
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-box-value">
                  AI
                </div>
                <div className="stat-box-label">
                  ذكاء وأتمتة
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-box-value">
                  24/7
                </div>
                <div className="stat-box-label">
                  دعم وتطوير مستمر
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section
          className="section sec-bg-2"
          id="منهجيتنا"
        >

          <div className="wrap">

            <div
              className="section-header"
              data-aos="fade-up"
            >

              <div className="section-eyebrow">
                منهجيتنا
              </div>

              <h2 className="section-title">
                نبدأ بفكرة.
                <br />
                ونصل إلى <span>نتيجة.</span>
              </h2>

              <p className="section-desc">
                نعمل بمنهجية واضحة تجمع بين التخطيط والإبداع
                والتنفيذ والقياس والتطوير.
              </p>

            </div>

            <div className="process-grid">

              {process.map((item, index) => (

                <div
                  className="process-card"
                  key={item.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >

                  <div className="process-number">
                    {item.number}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            WHY TRADEX
        ===================================================== */}

        <section className="section sec-bg-1">

          <div className="wrap">

            <div className="section-header">

              <div className="section-eyebrow">
                لماذا TradeX؟
              </div>

              <h2 className="section-title">
                شريك واحد،
                <br />
                <span>إمكانيات متعددة.</span>
              </h2>

            </div>

            <div className="worlds-grid">

              <div
                className="world-card"
                data-aos="fade-right"
              >

                <div className="world-icon">
                  <Users size={28} />
                </div>

                <h3>
                  فريق متعدد التخصصات
                </h3>

                <p>
                  نعمل كفريق واحد يجمع بين إدارة الفعاليات،
                  الإبداع، التصميم، التقنية والتسويق.
                </p>

                <div className="world-list">
                  <span>Strategy</span>
                  <span>Creative</span>
                  <span>Technology</span>
                  <span>Production</span>
                </div>

              </div>

              <div
                className="world-card dark"
                data-aos="fade-left"
              >

                <div className="world-icon">
                  <CheckCircle2 size={28} />
                </div>

                <h3>
                  تنفيذ من البداية للنهاية
                </h3>

                <p>
                  لا نكتفي بتقديم الأفكار. نتولى تحويلها إلى
                  تجربة أو منتج فعلي قابل للاستخدام والنمو.
                </p>

                <div className="world-list">
                  <span>Planning</span>
                  <span>Design</span>
                  <span>Execution</span>
                  <span>Support</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section
          className="cta-section sec-bg-1"
          style={{ paddingBottom: "10rem" }}
          id="تواصل"
        >

          <div className="wrap">

            <div className="cta-wrapper">

              <div className="cta-glow" />

              <div className="cta-content">

                <div className="section-eyebrow">
                  LET'S CREATE
                </div>

                <h2 className="section-title">
                  لديك فكرة؟
                  <br />
                  <span>لنبنِها معًا.</span>
                </h2>

                <p className="section-desc">
                  سواء كنت تخطط لفعالية استثنائية أو تحتاج إلى
                  منصة رقمية أو نظام ذكي، فريق TradeX جاهز
                  لتحويل فكرتك إلى واقع.
                </p>

                <a
                  href="mailto:info@tradexkw.com"
                  className="btn-primary"
                  style={{
                    padding: "1.1rem 2.8rem",
                    fontSize: "1.05rem",
                  }}
                >
                  ابدأ مشروعك الآن
                  <ArrowLeft size={18} />
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="wrap">

          <div className="footer-grid">

            {/* BRAND */}

            <div>

              <a
                href="#الرئيسية"
                className="nav-logo"
                style={{
                  display: "block",
                  marginBottom: "1.2rem",
                }}
              >
                Trade<span>X</span>
              </a>

              <p className="footer-text">
                TradeX شركة كويتية متخصصة في تنظيم وإنتاج
                الفعاليات، وتطوير المواقع والتطبيقات والأنظمة
                والحلول الرقمية المتقدمة.
              </p>

              <div className="social-links">

                <a
                  href="https://www.instagram.com/tradex.kw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>

                <a
                  href="https://wa.me/96597744003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={16} />
                </a>

              </div>

            </div>

            {/* QUICK LINKS */}

            <div>

              <h4 className="footer-title">
                روابط سريعة
              </h4>

              <div className="footer-links">

                <a href="#الرئيسية">
                  الرئيسية
                </a>

                <a href="#مجالاتنا">
                  مجالاتنا
                </a>

                <a href="#الخدمات">
                  خدماتنا
                </a>

                <a href="#أعمالنا">
                  أعمالنا
                </a>

                <a href="#منهجيتنا">
                  منهجيتنا
                </a>

              </div>

            </div>

            {/* SERVICES */}

            <div>

              <h4 className="footer-title">
                مجالاتنا
              </h4>

              <div className="footer-links">

                <a href="#الخدمات">
                  تنظيم الفعاليات
                </a>

                <a href="#الخدمات">
                  إنتاج الفعاليات
                </a>

                <a href="#الخدمات">
                  تطوير المواقع
                </a>

                <a href="#الخدمات">
                  تطبيقات الجوال
                </a>

                <a href="#الخدمات">
                  الأنظمة الذكية
                </a>

              </div>

            </div>

            {/* CONTACT */}

            <div>

              <h4 className="footer-title">
                تواصل معنا
              </h4>

              <div className="footer-links">

                <span>
                  الكويت
                </span>

                <a
                  href="mailto:info@tradexkw.com"
                  style={{
                    fontFamily: "var(--font-tech)",
                  }}
                >
                  info@tradexkw.com
                </a>

                <a
                  href="tel:+96597744003"
                  style={{
                    fontFamily: "var(--font-tech)",
                  }}
                >
                  +965 97744003
                </a>

              </div>

            </div>

          </div>

          <div className="footer-bottom">

            <span>
              © 2026 TradeX. All Rights Reserved.
            </span>

            <span>
              Crafted in Kuwait Under AICHOLDING  🇰🇼
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}