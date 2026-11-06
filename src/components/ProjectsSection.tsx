/**
 * ProjectsSection.tsx — Section 4: Editorial Project Gallery ("04 — PROJECTS")
 * Renders the 3D floating project showcase (BioScout, SpeakPR, BrightLoop initial trio),
 * sweeping golden orbital rings, carousel controls, and interactive case-study modals
 * for all nine real portfolio projects.
 */
import React, { useEffect, useRef, useState } from 'react';

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  shortTitleLines?: [string, string];
  category: string;
  shortCategoryBadge: string;
  categoryIcon: 'sparkle' | 'globe' | 'chart' | 'heart' | 'eye' | 'landmark' | 'compass' | 'shield' | 'layers';
  backdropImage: string;
  darkArtworkBg?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  disclaimer?: string;
  badgeNote?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'speak-pr',
    number: '01',
    title: 'SpeakPR',
    category: 'Developer Tools · Generative AI',
    shortCategoryBadge: 'Developer Tools · Gen AI',
    categoryIcon: 'sparkle',
    backdropImage: 'project-art-ai-wave.jpg',
    darkArtworkBg: true,
    description:
      'A voice-first tool that writes pull request descriptions. Paste a code diff or GitHub PR link, speak your reasoning using Wispr Flow, and SpeakPR generates a PR description, changelog and review flags.',
    highlights: [
      'Built for the Wispr No Hands Challenge',
      'Accepts raw Git code diffs or GitHub PR links as input context',
      'Captures spoken developer reasoning via Wispr Flow voice input',
      'Automatically generates structured PR descriptions, changelogs, and review flags',
    ],
    technologies: ['React', 'GitHub Integration', 'Wispr Flow', 'AI-Powered Text Generation'],
    liveUrl: 'https://speak-pr-delta.vercel.app',
    githubUrl: 'https://github.com/abhinavvidadalas144-pro/SpeakPR',
    badgeNote: 'Built for the Wispr No Hands Challenge',
  },
  {
    id: 'bioscout',
    number: '02',
    title: 'BioScout',
    category: 'AI · Biodiversity · Computer Vision',
    shortCategoryBadge: 'AI · Biodiversity · CV',
    categoryIcon: 'globe',
    backdropImage: 'project-art-remote-sensing.jpg',
    darkArtworkBg: false,
    description:
      'An AI-powered biodiversity platform that lets anyone become a wildlife explorer. Upload an animal photograph to identify its species and discover information about its conservation status, rarity and other wildlife facts.',
    highlights: [
      'Built with Gemini for species identification from uploaded wildlife photographs',
      'Surfaces conservation status, rarity indicators, and ecological wildlife facts',
      'Features interactive wildlife exploration, a 3D interface, and citizen-science tools',
    ],
    technologies: ['Gemini', 'Computer Vision', '3D Interface', 'Citizen-Science Tools', 'React', 'TypeScript'],
    liveUrl: 'https://bio-scout-iota.vercel.app',
    githubUrl: 'https://github.com/abhinavvidadalas144-pro/BioScout',
    badgeNote: 'Built with Gemini',
  },
  {
    id: 'brightloop',
    number: '03',
    title: 'BrightLoop',
    category: 'Full-Stack Development · SaaS',
    shortCategoryBadge: 'Full-Stack · SaaS',
    categoryIcon: 'chart',
    backdropImage: 'project-art-analytics.jpg',
    darkArtworkBg: false,
    description:
      'A full-stack subscription billing and management platform featuring customer management, subscription plans, automated invoicing, payment tracking, discounts, tax management and financial reporting.',
    highlights: [
      'End-to-end customer management, recurring subscription plans, and automated invoicing',
      'Real-time payment tracking, discount rules, tax management, and financial reporting',
      'Includes Role-Based Access Control (RBAC) across admin, staff, and customer portals',
    ],
    technologies: [
      'Full-Stack Development',
      'Subscription Billing',
      'Role-Based Access Control',
      'Financial Reporting',
      'React',
      'TypeScript',
    ],
    liveUrl: 'https://brightloop-subscription-billing-pla.vercel.app',
    githubUrl: 'https://github.com/abhinavvidadalas144-pro/brightloop-subscription-billing-platform',
  },
  {
    id: 'threadback',
    number: '04',
    title: 'ThreadBack',
    category: 'AI · Social Impact',
    shortCategoryBadge: 'AI · Social Impact',
    categoryIcon: 'heart',
    backdropImage: 'project-art-ai-wave.jpg',
    darkArtworkBg: true,
    description:
      'An AI-powered prototype designed to help reconnect people separated by displacement, adoption or estrangement. Users describe their memories in their own words. AI transforms those fragments into structured profiles that users can review and edit. The system surfaces potential connections using information-similarity scores for human moderator review.',
    highlights: [
      'Transforms free-text personal memory fragments into structured, user-editable profiles',
      'Computes information-similarity scores across profiles to surface potential connections',
      'Routes all potential matches to a dedicated human moderator review workflow',
    ],
    technologies: ['AI Memory Structuring', 'Similarity Scoring', 'Human Moderator Review', 'React', 'TypeScript'],
    liveUrl: 'https://threadback-mu.vercel.app',
    githubUrl: 'https://github.com/abhinavvidadalas144-pro/Threadback',
    disclaimer:
      'This is a hackathon prototype using synthetic demo data. AI never independently confirms identities.',
  },
  {
    id: 'netra',
    number: '05',
    title: 'Netra',
    category: 'Accessibility · Computer Vision',
    shortCategoryBadge: 'Accessibility · CV',
    categoryIcon: 'eye',
    backdropImage: 'project-art-remote-sensing.jpg',
    darkArtworkBg: true,
    description:
      'A CPU-based assistive-vision prototype that uses a webcam to help interpret the surrounding environment. Runs locally on the CPU with spoken output for detected information.',
    highlights: [
      'Object detection using YOLOv8s running locally on CPU',
      'Printed text recognition using local Tesseract OCR',
      'Image captioning and visual question answering using Moondream2',
      'Spoken audio output for detected objects, text, and scene descriptions',
    ],
    technologies: ['Python', 'YOLOv8s', 'Tesseract OCR', 'Moondream2', 'Local CPU Inference', 'Assistive Audio'],
    githubUrl: 'https://github.com/abhinavvidadalas144-pro/netra-demo',
    disclaimer:
      'This is a hackathon concept prototype. Currency recognition is currently a placeholder and is not implemented. Snapdragon deployment is a documented future plan, not a completed feature. No live demo is currently available.',
  },
  {
    id: 'smart-bharat-ai',
    number: '06',
    title: 'Smart Bharat AI',
    shortTitleLines: ['Smart Bharat', 'AI'],
    category: 'Generative AI · Civic Technology',
    shortCategoryBadge: 'Gen AI · Civic Tech',
    categoryIcon: 'landmark',
    backdropImage: 'project-art-ai-wave.jpg',
    darkArtworkBg: true,
    description:
      'An AI-powered civic assistant that brings government services into one place. Built with Gemini to provide guidance for government-document applications, official links, citizen problem reporting, and answers about government schemes.',
    highlights: [
      'Guidance for Aadhaar, passport, and other government-document applications',
      'Direct links to official government websites and service portals',
      'Citizen reporting workflow for local civic problems such as damaged roads',
      'AI-powered answers about government schemes built with Gemini',
    ],
    technologies: ['Gemini', 'Generative AI', 'Civic Technology', 'React', 'TypeScript'],
    liveUrl: 'https://smart-bharat-ai-chi.vercel.app',
    githubUrl: 'https://github.com/abhinavvidadalas144-pro/Smart-Bharat-AI',
    disclaimer: 'Not an official government service.',
    badgeNote: 'Built with Gemini',
  },
  {
    id: 'decisiq',
    number: '07',
    title: 'DecisIQ',
    category: 'AI · Business Intelligence',
    shortCategoryBadge: 'AI · Business Intel',
    categoryIcon: 'compass',
    backdropImage: 'project-art-analytics.jpg',
    darkArtworkBg: false,
    description:
      'An AI-powered business decision-making platform. Describe a business decision and its available options, and DecisIQ analyzes the alternatives and recommends a choice with clear reasoning.',
    highlights: [
      'Structured evaluation of complex business decisions and competing strategic options',
      'Comparative trade-off analysis across risk, impact, and execution criteria',
      'Generates clear, transparent reasoning behind the recommended decision',
    ],
    technologies: ['AI Decision Analysis', 'Business Intelligence', 'Strategic Reasoning', 'React', 'TypeScript'],
    liveUrl: 'https://decis-iq.vercel.app',
    githubUrl: 'https://github.com/abhinavvidadalas144-pro/DecisIQ-',
  },
  {
    id: 'truthrx-ai',
    number: '08',
    title: 'TruthRX AI',
    category: 'AI · Healthcare Technology',
    shortCategoryBadge: 'AI · Healthcare Tech',
    categoryIcon: 'shield',
    backdropImage: 'project-art-ai-wave.jpg',
    darkArtworkBg: true,
    description:
      'An AI-powered healthcare platform that evaluates health-related claims commonly shared through WhatsApp forwards. Users can check claims, such as whether a particular home remedy is supported by evidence, and receive an explanation. It also allows users to describe symptoms and receive possible causes and general guidance.',
    highlights: [
      'Evaluates viral health claims and WhatsApp forwards against medical evidence',
      'Explains whether home remedies and health assertions are supported by evidence',
      'Provides informational symptom exploration with possible causes and general guidance',
    ],
    technologies: ['AI Claim Evaluation', 'Healthcare Technology', 'Evidence Synthesis', 'React', 'TypeScript'],
    liveUrl: 'https://truthrx-ai.vercel.app',
    githubUrl: 'https://github.com/abhinavvidadalas144-pro/truthrx-ai',
    disclaimer:
      'Not a substitute for a doctor. Outputs provide general informational explanations and guidance, not medical diagnoses.',
  },
  {
    id: 'neuroflux-website',
    number: '09',
    title: 'NeuroFlux Website',
    shortTitleLines: ['NeuroFlux', 'Website'],
    category: 'Frontend Development · UI/UX',
    shortCategoryBadge: 'Frontend · UI/UX',
    categoryIcon: 'layers',
    backdropImage: 'project-art-analytics.jpg',
    darkArtworkBg: true,
    description:
      'A responsive product landing page built using React and Vite featuring a hero section, product feature sections, interactive monthly/annual pricing toggle, multi-currency selector, testimonials, footer, and 3D hover effects.',
    highlights: [
      'Hero section and interactive product feature showcase built with React and Vite',
      'Interactive monthly/annual pricing toggle with live USD, EUR, and INR currency selector',
      'Testimonials, semantic footer, and tactile 3D hover effects and animations',
    ],
    technologies: ['React', 'Vite', 'UI/UX Design', '3D Hover Effects', 'Multi-Currency Pricing'],
    liveUrl: 'https://frontend-hackathon-ecru.vercel.app',
    githubUrl: 'https://github.com/abhinavvidadalas144-pro/Frontend-Hackathon',
  },
];

/**
 * Renders the category badge icon corresponding to a project's domain.
 */
function CategoryBadgeIcon({
  type,
  size = 'sm',
}: {
  type: PortfolioProject['categoryIcon'];
  size?: 'sm' | 'md';
}) {
  const dim = size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5';

  switch (type) {
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${dim} shrink-0 text-[#E06814]`}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.9" />
          <ellipse cx="12" cy="12" rx="4.2" ry="9" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.6 9h16.8M3.6 15h16.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'chart':
    case 'compass':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${dim} shrink-0 text-[#E06814]`}>
          <rect x="3.5" y="13" width="3.8" height="7.5" rx="1" fill="currentColor" opacity="0.65" />
          <rect x="10.1" y="8.5" width="3.8" height="12" rx="1" fill="currentColor" opacity="0.85" />
          <rect x="16.7" y="4" width="3.8" height="16.5" rx="1" fill="currentColor" />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${dim} shrink-0 text-[#E06814]`}>
          <path
            d="M12 20.5s-7-4.35-9.2-8.6C1.1 8.5 3.4 4.5 7.4 4.5c2.1 0 3.6 1.1 4.6 2.6 1-1.5 2.5-2.6 4.6-2.6 4 0 6.3 4 4.6 7.4-2.2 4.25-9.2 8.6-9.2 8.6z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'eye':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${dim} shrink-0 text-[#E06814]`}>
          <path
            d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"
            stroke="currentColor"
            strokeWidth="1.9"
          />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      );
    case 'landmark':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${dim} shrink-0 text-[#E06814]`}>
          <path
            d="M3 20h18M4 10h16M6 10v7M10 10v7M14 10v7M18 10v7M12 4l8 4H4l8-4z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${dim} shrink-0 text-[#E06814]`}>
          <path
            d="M12 3l7 3v5.5c0 4.8-3 8.9-7 10-4-1.1-7-5.2-7-10V6l7-3z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <path d="M9.5 12l1.8 1.8 3.5-3.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${dim} shrink-0 text-[#E06814]`}>
          <path
            d="M12 3L2 8l10 5 10-5-10-5zM2 12l10 5 10-5M2 16l10 5 10-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'sparkle':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${dim} shrink-0 text-[#E86A12]`}>
          <path
            d="M12 2.5C12.5 7.6 16.4 11.5 21.5 12C16.4 12.5 12.5 16.4 12 21.5C11.5 16.4 7.6 12.5 2.5 12C7.6 11.5 11.5 7.6 12 2.5Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

/**
 * Renders an authentic, project-specific application interface overlay atop the
 * studio card artwork so every project card showcases its genuine UI context
 * while preserving the exact warm lighting and 3D card aesthetic of the reference.
 */
function ProjectPreviewViewport({
  project,
  slot,
}: {
  project: PortfolioProject;
  slot: 'left' | 'center' | 'right';
}) {
  const isCenter = slot === 'center';

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      {/* Base Studio Card Artwork matching the reference palette & lighting */}
      <img
        src={project.backdropImage}
        alt={`${project.title} — ${project.category} preview`}
        loading="lazy"
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        draggable={false}
      />

      {/* Project-Specific Authentic Interface Overlay */}
      {project.id === 'speak-pr' && (
        <div className="pointer-events-none absolute inset-x-2.5 sm:inset-x-3.5 top-2.5 sm:top-3.5 flex flex-col gap-1.5 z-10">
          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#140A05]/80 backdrop-blur-md border border-[#FFB870]/25 text-[9px] sm:text-[10.5px] text-[#FFE8CC]">
            <span className="font-mono flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A2B] animate-pulse" />
              SpeakPR · auth/rateLimiter.ts
            </span>
            <span className="font-mono font-semibold text-[#6EE7B7] bg-[#064E3B]/70 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px]">
              +16 -4
            </span>
          </div>
          {isCenter && (
            <div className="hidden sm:flex flex-col gap-1 px-2.5 py-1.5 rounded-lg bg-[#120804]/75 backdrop-blur-sm border border-white/10 font-mono text-[9px] text-[#FDE6CC]/90">
              <div className="text-[#F87171]/90 truncate">- const clientIp = req.ip;</div>
              <div className="text-[#6EE7B7]/95 truncate">+ const key = accountId ? `acc:${'{'}id{'}'}` : `ip:${'{'}req.ip{'}'}`;</div>
              <div className="flex items-center justify-between pt-0.5 border-t border-white/10 text-[8.5px] font-sans text-[#FDBA74]">
                <span>🎙️ Wispr Flow Voice Reasoning</span>
                <span>PR Summary &amp; Flags Ready ✓</span>
              </div>
            </div>
          )}
        </div>
      )}

      {project.id === 'bioscout' && (
        <div className="pointer-events-none absolute inset-x-2 sm:inset-x-3 top-2 sm:top-3 flex flex-col gap-1.5 z-10">
          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#0D2118]/78 backdrop-blur-md border border-[#A7F3D0]/30 text-[8.5px] sm:text-[10px] text-[#ECFDF5]">
            <span className="font-medium truncate">🦋 Morpho menelaus · 98% ID</span>
            <span className="px-1.5 py-0.5 rounded bg-[#10B981]/30 text-[#A7F3D0] text-[7.5px] sm:text-[8.5px] font-semibold">
              3D Guide
            </span>
          </div>
        </div>
      )}

      {project.id === 'brightloop' && (
        <div className="pointer-events-none absolute inset-x-2 sm:inset-x-3 top-2 sm:top-3 flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#1E1008]/75 backdrop-blur-md border border-[#FCD34D]/30 text-[8.5px] sm:text-[10px] text-[#FEF3C7] z-10">
          <span className="font-medium truncate">MRR · Automated Billing</span>
          <span className="px-1.5 py-0.5 rounded bg-[#F59E0B]/30 text-[#FDE68A] text-[7.5px] sm:text-[8.5px] font-semibold">
            RBAC
          </span>
        </div>
      )}

      {project.id === 'threadback' && (
        <div className="pointer-events-none absolute inset-x-2.5 sm:inset-x-3.5 top-2.5 sm:top-3.5 flex flex-col gap-1.5 z-10">
          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#1A0D06]/82 backdrop-blur-md border border-[#FDBA74]/30 text-[8.5px] sm:text-[10px] text-[#FFEDD5]">
            <span className="font-medium truncate">Memory Profile · Similarity Match</span>
            <span className="px-1.5 py-0.5 rounded bg-[#EA580C]/40 text-[#FED7AA] text-[7.5px] sm:text-[8.5px]">
              Moderator Review
            </span>
          </div>
        </div>
      )}

      {project.id === 'netra' && (
        <div className="pointer-events-none absolute inset-x-2.5 sm:inset-x-3.5 top-2.5 sm:top-3.5 flex flex-col gap-1.5 z-10">
          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#0F172A]/82 backdrop-blur-md border border-[#38BDF8]/35 text-[8.5px] sm:text-[10px] text-[#E0F2FE] font-mono">
            <span className="truncate">YOLOv8s · Tesseract · Moondream2</span>
            <span className="px-1.5 py-0.5 rounded bg-[#0284C7]/40 text-[#BAE6FD] text-[7.5px] sm:text-[8.5px]">
              Local CPU
            </span>
          </div>
        </div>
      )}

      {project.id === 'smart-bharat-ai' && (
        <div className="pointer-events-none absolute inset-x-2.5 sm:inset-x-3.5 top-2.5 sm:top-3.5 flex flex-col gap-1.5 z-10">
          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#1C0E06]/82 backdrop-blur-md border border-[#FB923C]/35 text-[8.5px] sm:text-[10px] text-[#FFEDD5]">
            <span className="font-medium truncate">Aadhaar · Passport · Schemes AI</span>
            <span className="px-1.5 py-0.5 rounded bg-[#EA580C]/35 text-[#FED7AA] text-[7.5px] sm:text-[8.5px]">
              Civic Portal
            </span>
          </div>
        </div>
      )}

      {project.id === 'decisiq' && (
        <div className="pointer-events-none absolute inset-x-2.5 sm:inset-x-3.5 top-2.5 sm:top-3.5 flex flex-col gap-1.5 z-10">
          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#1C1008]/80 backdrop-blur-md border border-[#FBBF24]/30 text-[8.5px] sm:text-[10px] text-[#FEF3C7]">
            <span className="font-medium truncate">Option Matrix &amp; Trade-Offs</span>
            <span className="px-1.5 py-0.5 rounded bg-[#D97706]/35 text-[#FDE68A] text-[7.5px] sm:text-[8.5px]">
              Decision AI
            </span>
          </div>
        </div>
      )}

      {project.id === 'truthrx-ai' && (
        <div className="pointer-events-none absolute inset-x-2.5 sm:inset-x-3.5 top-2.5 sm:top-3.5 flex flex-col gap-1.5 z-10">
          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#0F1F1C]/82 backdrop-blur-md border border-[#2DD4BF]/35 text-[8.5px] sm:text-[10px] text-[#CCFBF1]">
            <span className="font-medium truncate">WhatsApp Claim Evidence Check</span>
            <span className="px-1.5 py-0.5 rounded bg-[#0D9488]/40 text-[#99F6E4] text-[7.5px] sm:text-[8.5px]">
              TruthRX
            </span>
          </div>
        </div>
      )}

      {project.id === 'neuroflux-website' && (
        <div className="pointer-events-none absolute inset-x-2.5 sm:inset-x-3.5 top-2.5 sm:top-3.5 flex flex-col gap-1.5 z-10">
          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#0F1420]/82 backdrop-blur-md border border-[#A78BFA]/35 text-[8.5px] sm:text-[10px] text-[#EDE9FE]">
            <span className="font-medium truncate">3D Hero · Pricing (USD/EUR/INR)</span>
            <span className="px-1.5 py-0.5 rounded bg-[#7C3AED]/35 text-[#DDD6FE] text-[7.5px] sm:text-[8.5px]">
              React + Vite
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Renders Section 4 (Projects) with a 3D floating card carousel, project case-study modal,
 * and complete 9-project filterable archive modal.
 */
export function ProjectsSection() {
  // Recommended project order (0..8):
  // 0: SpeakPR, 1: BioScout, 2: BrightLoop, 3: ThreadBack, 4: Netra,
  // 5: Smart Bharat AI, 6: DecisIQ, 7: TruthRX AI, 8: NeuroFlux Website.
  //
  // Initial 3-card arrangement required by prompt:
  // LEFT CARD: BioScout (index 1)
  // CENTRAL FEATURED CARD: SpeakPR (index 0)
  // RIGHT CARD: BrightLoop (index 2)
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState<boolean>(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const caseStudyModalRef = useRef<HTMLDivElement | null>(null);
  const caseStudyCloseBtnRef = useRef<HTMLButtonElement | null>(null);
  const allProjectsModalRef = useRef<HTMLDivElement | null>(null);
  const allProjectsCloseBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  /**
   * Opens the project case-study modal and stores the currently focused trigger element.
   */
  const openProjectModal = (project: PortfolioProject) => {
    if (!selectedProject && !isAllProjectsOpen && document.activeElement instanceof HTMLElement) {
      previousFocusRef.current = document.activeElement;
    }
    setSelectedProject(project);
  };

  /**
   * Closes the project case-study modal and restores keyboard focus to the trigger element.
   */
  const closeProjectModal = () => {
    setSelectedProject(null);
    const toRestore = previousFocusRef.current;
    if (toRestore) {
      window.setTimeout(() => toRestore.focus(), 0);
    }
  };

  /**
   * Opens the complete 9-project archive modal and stores the currently focused trigger element.
   */
  const openAllProjectsModal = () => {
    if (document.activeElement instanceof HTMLElement) {
      previousFocusRef.current = document.activeElement;
    }
    setIsAllProjectsOpen(true);
  };

  /**
   * Closes the complete 9-project archive modal and restores keyboard focus to the trigger element.
   */
  const closeAllProjectsModal = () => {
    setIsAllProjectsOpen(false);
    const toRestore = previousFocusRef.current;
    if (toRestore) {
      window.setTimeout(() => toRestore.focus(), 0);
    }
  };

  useEffect(() => {
    const isAnyModalOpen = Boolean(selectedProject) || isAllProjectsOpen;
    if (!isAnyModalOpen) return;

    const targetCloseBtn = selectedProject ? caseStudyCloseBtnRef.current : allProjectsCloseBtnRef.current;
    targetCloseBtn?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (selectedProject) {
          closeProjectModal();
        } else if (isAllProjectsOpen) {
          closeAllProjectsModal();
        }
        return;
      }

      if (e.key === 'Tab') {
        const container = selectedProject ? caseStudyModalRef.current : allProjectsModalRef.current;
        if (!container) return;
        const focusables = Array.from(
          container.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, isAllProjectsOpen]);

  const total = PORTFOLIO_PROJECTS.length;

  // When SpeakPR (index 0) is in the center slot, display BioScout (index 1) on the left
  // and BrightLoop (index 2) on the right so the initial trio matches the exact specification.
  // For all other indices, display the neighboring projects smoothly.
  const leftIndex = centerIndex === 0 ? 1 : (centerIndex - 1 + total) % total;
  const rightIndex = centerIndex === 0 ? 2 : (centerIndex + 1) % total;

  const leftProject = PORTFOLIO_PROJECTS[leftIndex];
  const centerProject = PORTFOLIO_PROJECTS[centerIndex];
  const rightProject = PORTFOLIO_PROJECTS[rightIndex];

  /**
   * Rotates the 3D project carousel to the previous project in the list.
   */
  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + total) % total);
  };

  /**
   * Rotates the 3D project carousel to the next project in the list.
   */
  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % total);
  };

  const filterOptions = [
    'All',
    'Generative AI',
    'Computer Vision',
    'Full-Stack & SaaS',
    'Social & Civic Impact',
    'Frontend & BI',
  ];

  /**
   * Evaluates whether a project matches the currently selected category filter tab.
   */
  const matchesFilter = (proj: PortfolioProject, filter: string) => {
    if (filter === 'All') return true;
    if (filter === 'Generative AI') {
      return proj.category.includes('Generative AI') || proj.id === 'bioscout';
    }
    if (filter === 'Computer Vision') {
      return proj.category.includes('Computer Vision');
    }
    if (filter === 'Full-Stack & SaaS') {
      return proj.category.includes('Full-Stack') || proj.category.includes('SaaS');
    }
    if (filter === 'Social & Civic Impact') {
      return (
        proj.category.includes('Social Impact') ||
        proj.category.includes('Civic') ||
        proj.category.includes('Healthcare') ||
        proj.category.includes('Accessibility')
      );
    }
    if (filter === 'Frontend & BI') {
      return proj.category.includes('Frontend') || proj.category.includes('Business Intelligence');
    }
    return true;
  };

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => matchesFilter(p, activeCategoryFilter));

  return (
    <section
      id="projects"
      aria-label="Projects Showcase"
      className="relative w-full overflow-hidden projects-studio-bg select-none py-14 sm:py-16 lg:py-0 lg:min-h-[820px] xl:min-h-[864px] flex flex-col justify-center"
    >
      {/* =====================================================================
          1. LAYERED EDITORIAL STUDIO BACKGROUND SHAPES, ARCS & DOMES
      ====================================================================== */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full object-cover z-0"
        viewBox="0 0 1821 864"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Deep rich burnt-orange inner left sweeping arc */}
          <linearGradient id="projLeftDeepArc" x1="0%" y1="0%" x2="95%" y2="100%">
            <stop offset="0%" stopColor="#7E1F01" stopOpacity="0.96" />
            <stop offset="45%" stopColor="#AD3404" stopOpacity="0.92" />
            <stop offset="85%" stopColor="#D6520B" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#E66818" stopOpacity="0.4" />
          </linearGradient>

          {/* Secondary warm orange sweeping wave behind left typography */}
          <linearGradient id="projLeftMidArc" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#A63003" stopOpacity="0.92" />
            <stop offset="50%" stopColor="#D4500B" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#F38D36" stopOpacity="0.15" />
          </linearGradient>

          {/* Large warm golden-amber right dome behind the 3 floating cards */}
          <radialGradient id="projRightGoldenDome" cx="56%" cy="46%" r="58%">
            <stop offset="0%" stopColor="#F58D32" stopOpacity="0.88" />
            <stop offset="52%" stopColor="#F8A34E" stopOpacity="0.76" />
            <stop offset="84%" stopColor="#FDD19D" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#FFEAD0" stopOpacity="0.28" />
          </radialGradient>

          {/* Deep warm shadow pool underneath the central card on the right dome */}
          <radialGradient id="projCenterCardShadowPool" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A63202" stopOpacity="0.85" />
            <stop offset="48%" stopColor="#CF4E08" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#F3882E" stopOpacity="0" />
          </radialGradient>

          {/* Bottom-left bold burnt-orange semi-circular dome */}
          <linearGradient id="projBottomLeftDome" x1="0%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#EF7918" />
            <stop offset="55%" stopColor="#D65508" />
            <stop offset="100%" stopColor="#FDAE5B" stopOpacity="0.85" />
          </linearGradient>

          {/* Bottom-center soft cream/apricot rising wave */}
          <linearGradient id="projBottomCenterCreamWave" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FCE2C4" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#F9CFA2" stopOpacity="0.42" />
          </linearGradient>

          {/* Bottom-right soft warm cream-peach wave behind <- -> buttons */}
          <linearGradient id="projBottomRightCornerWave" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAD0A0" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FCE5C8" stopOpacity="0.92" />
          </linearGradient>
        </defs>

        {/* Secondary broader left sweeping orange arc */}
        <path
          d="M0 0 H792 C735 245, 595 495, 360 625 C220 702, 95 725, 0 715 Z"
          fill="url(#projLeftMidArc)"
        />

        {/* Deepest inner upper-left curved burnt-orange studio shape */}
        <path
          d="M0 0 H592 C585 168, 492 338, 336 426 C218 492, 95 512, 0 492 Z"
          fill="url(#projLeftDeepArc)"
        />

        {/* Large right warm golden-amber sculptural dome */}
        <path
          d="M1070 864 C1048 640, 1110 300, 1295 135 C1440 5, 1655 -22, 1821 48 V864 Z"
          fill="url(#projRightGoldenDome)"
        />

        {/* Rich burnt-orange shadow well below the central card */}
        <ellipse cx="1290" cy="675" rx="265" ry="125" fill="url(#projCenterCardShadowPool)" />

        {/* Bottom-center soft cream-apricot dome with luminous white rim */}
        <path
          d="M540 864 C665 732, 985 725, 1255 864 Z"
          fill="url(#projBottomCenterCreamWave)"
        />
        <path
          d="M540 864 C665 732, 985 725, 1255 864"
          stroke="rgba(255, 252, 246, 0.85)"
          strokeWidth="2"
          fill="none"
        />

        {/* Bottom-right soft warm peach-cream corner wave */}
        <path
          d="M1195 864 C1355 715, 1625 695, 1821 798 V864 Z"
          fill="url(#projBottomRightCornerWave)"
        />

        {/* Bottom-left bold orange dome */}
        <path
          d="M0 676 C135 698, 258 768, 344 864 H0 Z"
          fill="url(#projBottomLeftDome)"
        />
        <path
          d="M0 676 C135 698, 258 768, 344 864"
          stroke="rgba(255, 214, 165, 0.55)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Bottom-left 4-point star sparkle (✦) + horizontal accent hairline */}
        <g transform="translate(88, 808)">
          <path
            d="M0 -18 C1.6 -4.5 4.5 -1.6 18 0 C4.5 1.6 1.6 4.5 0 18 C-1.6 4.5 -4.5 1.6 -18 0 C-4.5 -1.6 -1.6 -4.5 0 -18 Z"
            fill="#FFF3E2"
          />
          <line
            x1="36"
            y1="0"
            x2="265"
            y2="0"
            stroke="rgba(255, 240, 220, 0.42)"
            strokeWidth="1"
          />
        </g>
      </svg>

      {/* =====================================================================
          2. MAIN FOREGROUND EDITORIAL CONTAINER (12-COL ASYMMETRIC LAYOUT)
      ====================================================================== */}
      <div className="relative z-10 w-full max-w-[1660px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center">
          {/* =================================================================
              LEFT COLUMN: SECTION KICKER, SERIF HEADING, DESCRIPTION & CTA
          ================================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start z-20 pt-2 lg:pt-0 lg:pr-4">
            {/* Section Kicker: 04 — PROJECTS */}
            <div className="flex items-center gap-3.5 mb-6 sm:mb-8">
              <span className="text-[12px] sm:text-[13px] font-medium tracking-[0.22em] text-[#FFF3E4]/90 uppercase">
                04
              </span>
              <span className="w-4 h-[1px] bg-[#FFD6B0]/75" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-medium tracking-[0.24em] text-[#FFF5E8]/95 uppercase">
                PROJECTS
              </span>
              <span
                className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-[#FFE4C8]/45 to-transparent ml-1"
                aria-hidden="true"
              />
            </div>

            {/* Main Editorial Serif Heading: Turning Ideas / into Impact. */}
            <h2 className="font-serif-editorial text-[3.25rem] sm:text-[4.35rem] lg:text-[4.75rem] xl:text-[5.5rem] leading-[1.03] tracking-[-0.022em] font-normal text-[#FFFDF9] mb-8 sm:mb-10 drop-shadow-[0_4px_24px_rgba(92,22,2,0.28)]">
              <span className="block whitespace-nowrap">Turning Ideas</span>
              <span className="block whitespace-nowrap mt-1">
                into{' '}
                <span className="projects-impact-accent font-normal">
                  Impact.
                </span>
              </span>
            </h2>

            {/* Supporting Paragraph with Thin Left Vertical Line */}
            <div className="flex items-stretch gap-5 sm:gap-6 mb-10 sm:mb-12 max-w-[460px]">
              <span
                className="w-[1.5px] shrink-0 my-1 bg-gradient-to-b from-[#FFF6EB]/90 via-[#FFF6EB]/70 to-[#FFF6EB]/30 rounded-full"
                aria-hidden="true"
              />
              <p className="text-[0.98rem] sm:text-[1.08rem] leading-[1.64] text-[#FFF6EC]/92 font-normal tracking-[0.005em]">
                A collection of projects where I combine technology, creativity and problem-solving to build something meaningful.
              </p>
            </div>

            {/* Primary CTA Button: View All Projects ↗ */}
            <button
              type="button"
              onClick={openAllProjectsModal}
              className="projects-cta-pill group inline-flex items-center gap-4 px-8 sm:px-9 py-4 sm:py-[18px] rounded-full transition-all duration-300 cursor-pointer active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFDF9]"
            >
              <span className="text-[15px] sm:text-[16px] font-semibold tracking-[-0.01em] text-[#1E120A]">
                View All Projects
              </span>
              <span
                className="inline-flex items-center justify-center text-[#E65C00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H8.5M17 7V15.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* =================================================================
              RIGHT COLUMN: 3D FLOATING PROJECT GALLERY & ORBITAL STAGE
          ================================================================== */}
          <div className="lg:col-span-7 relative w-full h-[460px] sm:h-[580px] lg:h-[740px] xl:h-[780px] flex items-center justify-center">
            {/* ---------------------------------------------------------------
                BACKGROUND & FOREGROUND 3D ORBITAL RINGS, SPHERES & SPARKLES
            ---------------------------------------------------------------- */}
            <svg
              className="pointer-events-none absolute inset-0 w-full h-full z-10 overflow-visible"
              viewBox="0 0 1080 780"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                {/* Glowing golden-white main orbital stroke */}
                <linearGradient id="projMainOrbitStroke" x1="0%" y1="60%" x2="100%" y2="30%">
                  <stop offset="0%" stopColor="#DC6A12" stopOpacity="0.55" />
                  <stop offset="22%" stopColor="#F59B3D" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#FFFDF9" stopOpacity="1" />
                  <stop offset="78%" stopColor="#FBB052" stopOpacity="0.92" />
                  <stop offset="100%" stopColor="#FFF4DF" stopOpacity="0.88" />
                </linearGradient>

                {/* Outer soft golden bloom along the lower orbital curve */}
                <linearGradient id="projOrbitOuterGlow" x1="10%" y1="65%" x2="90%" y2="35%">
                  <stop offset="0%" stopColor="#F07C1E" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#FFF4DC" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#F5922E" stopOpacity="0.35" />
                </linearGradient>

                {/* Upper subtle secondary orbital ring */}
                <linearGradient id="projUpperOrbitStroke" x1="0%" y1="50%" x2="100%" y2="20%">
                  <stop offset="0%" stopColor="#F59B42" stopOpacity="0.1" />
                  <stop offset="35%" stopColor="#F59B42" stopOpacity="0.55" />
                  <stop offset="75%" stopColor="#F8B668" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#FFE8C5" stopOpacity="0.15" />
                </linearGradient>

                {/* 3D Metallic Golden-Orange Sphere Gradient */}
                <radialGradient id="projGoldenSphere" cx="34%" cy="30%" r="68%">
                  <stop offset="0%" stopColor="#FFF7E8" />
                  <stop offset="22%" stopColor="#FFC266" />
                  <stop offset="58%" stopColor="#E86E10" />
                  <stop offset="88%" stopColor="#9E3402" />
                  <stop offset="100%" stopColor="#C84E06" />
                </radialGradient>

                {/* Soft glow filter for orbital ring & sparkles */}
                <filter id="projOrbitGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Fine diagonal celestial guide line at top-center */}
              <path
                d="M445 148 C495 82, 548 32, 588 -10"
                stroke="rgba(235, 134, 42, 0.25)"
                strokeWidth="1"
              />

              {/* Upper tilted secondary orbital arc behind the cards */}
              <ellipse
                cx="535"
                cy="325"
                rx="340"
                ry="165"
                transform="rotate(-14 535 325)"
                stroke="url(#projUpperOrbitStroke)"
                strokeWidth="1.4"
                fill="none"
              />

              {/* Fine circular halo arc in upper-right near sparkles */}
              <path
                d="M780 185 C835 152, 895 162, 922 215"
                stroke="rgba(255, 236, 208, 0.55)"
                strokeWidth="1.1"
                fill="none"
              />

              {/* Upper-right 4-point golden star sparkle (✦) */}
              <g transform="translate(888, 152)">
                <path
                  d="M0 -16 C1.4 -4 4 -1.4 16 0 C4 1.4 1.4 4 0 16 C-1.4 4 -4 1.4 -16 0 C-4 -1.4 -1.4 -4 0 -16 Z"
                  fill="#F3983E"
                />
              </g>

              {/* Smaller secondary star sparkle above right card */}
              <g transform="translate(794, 178) scale(0.65)">
                <path
                  d="M0 -14 C1.2 -3.5 3.5 -1.2 14 0 C3.5 1.2 1.2 3.5 0 14 C-1.2 3.5 -3.5 1.2 -14 0 C-3.5 -1.2 -1.2 -3.5 0 -14 Z"
                  fill="#FFF6E8"
                />
              </g>

              {/* Top-center 3D Golden Sphere perched above the central card */}
              <g transform="translate(454, 140)">
                <circle cx="0" cy="4" r="13" fill="rgba(164, 58, 4, 0.28)" filter="url(#projOrbitGlowFilter)" />
                <circle cx="0" cy="0" r="12.5" fill="url(#projGoldenSphere)" />
              </g>
            </svg>

            {/* ---------------------------------------------------------------
                CARD 1 (LEFT SLOT): PERSPECTIVE SIDE SHOWCASE CARD
            ---------------------------------------------------------------- */}
            <div
              onClick={() => openProjectModal(leftProject)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProjectModal(leftProject);
                }
              }}
              aria-label={`Open project details: ${leftProject.title}`}
              className="projects-card-left group absolute left-[3%] sm:left-[5%] lg:left-[4.5%] top-[28%] sm:top-[29%] w-[31%] sm:w-[29.5%] lg:w-[27.5%] max-w-[295px] aspect-[1/1.15] rounded-[20px] sm:rounded-[24px] p-2 sm:p-2.5 flex flex-col justify-between cursor-pointer z-20 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFDF9]"
            >
              {/* Top Specular Edge Highlight */}
              <div
                className="pointer-events-none absolute inset-x-4 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent z-20"
                aria-hidden="true"
              />

              {/* Top Artwork Container with Smooth Bottom Fade into Card Surface */}
              <div className="relative w-full h-[64%] rounded-[15px] sm:rounded-[18px] overflow-hidden">
                <ProjectPreviewViewport project={leftProject} slot="left" />
                {/* Smooth gradient melt into the warm cream card footer */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#F7D7B5] via-[#F7D7B5]/65 to-transparent z-10"
                  aria-hidden="true"
                />
              </div>

              {/* Overlapping Frosted Category Pill Badge */}
              <div className="relative z-20 -mt-7 sm:-mt-8 px-2 sm:px-3">
                <div className="projects-category-badge inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full max-w-full">
                  <CategoryBadgeIcon type={leftProject.categoryIcon} size="sm" />
                  <span className="text-[8.5px] sm:text-[10.5px] font-medium tracking-[-0.01em] text-[#2B170A] truncate">
                    {leftProject.shortCategoryBadge}
                  </span>
                </div>
              </div>

              {/* Card Footer: Editorial Serif Title + Circular ↗ Action Indicator */}
              <div className="relative z-20 flex items-end justify-between gap-2 px-2 sm:px-3 pb-1.5 sm:pb-2.5 pt-1">
                <h3 className="font-serif-editorial text-[1.05rem] sm:text-[1.35rem] lg:text-[1.45rem] xl:text-[1.58rem] leading-[1.08] tracking-[-0.02em] font-normal text-[#1E1007]">
                  {leftProject.shortTitleLines ? (
                    <>
                      <span className="block">{leftProject.shortTitleLines[0]}</span>
                      <span className="block">{leftProject.shortTitleLines[1]}</span>
                    </>
                  ) : (
                    leftProject.title
                  )}
                </h3>

                <span
                  aria-hidden="true"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#4A2C16]/35 bg-white/35 hover:bg-white/80 flex items-center justify-center text-[#2B1608] transition-all duration-200 shrink-0"
                >
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H8.5M17 7V15.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------
                CARD 2 (CENTER SLOT): DOMINANT FEATURED HERO CARD
            ---------------------------------------------------------------- */}
            <div
              onClick={() => openProjectModal(centerProject)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProjectModal(centerProject);
                }
              }}
              aria-label={`View featured project: ${centerProject.title}`}
              className="projects-card-center group absolute left-[24%] sm:left-[25.5%] lg:left-[24.5%] top-[12%] sm:top-[11%] w-[49%] sm:w-[47%] lg:w-[46.5%] max-w-[490px] aspect-[1/1.05] rounded-[24px] sm:rounded-[30px] p-2 sm:p-2.5 flex flex-col justify-between cursor-pointer z-30 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFDF9]"
            >
              {/* Luminous Top & Right Rim Highlights matching the reference */}
              <div
                className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFF6E5] to-white/90 z-30"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute right-0 inset-y-6 w-[2px] bg-gradient-to-b from-white/95 via-[#FFE5C2]/80 to-white/90 z-30"
                aria-hidden="true"
              />

              {/* Top Featured Visual Display Area */}
              <div
                className={`relative w-full h-[74%] rounded-[18px] sm:rounded-[23px] overflow-hidden ${
                  centerProject.darkArtworkBg ? 'bg-[#120602]' : 'bg-[#2C1406]'
                }`}
              >
                <ProjectPreviewViewport project={centerProject} slot="center" />
                {/* Smooth atmospheric transition into the warm cream-amber footer */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-[#F7D9B9] via-[#F7D9B9]/62 to-transparent z-10"
                  aria-hidden="true"
                />
              </div>

              {/* Overlapping Frosted Glass Category Pill Badge */}
              <div className="relative z-20 -mt-9 sm:-mt-11 px-3 sm:px-5">
                <div className="projects-category-badge inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full max-w-full">
                  <CategoryBadgeIcon type={centerProject.categoryIcon} size="md" />
                  <span className="text-[10px] sm:text-[12px] font-medium tracking-[-0.01em] text-[#221106] truncate">
                    {centerProject.category}
                  </span>
                </div>
              </div>

              {/* Featured Card Footer: Large Editorial Serif Title + Circular ↗ Indicator */}
              <div className="relative z-20 flex items-center justify-between gap-3 px-3 sm:px-5 pb-2 sm:pb-3.5 pt-1">
                <h3 className="font-serif-editorial text-[1.35rem] sm:text-[1.85rem] lg:text-[2.05rem] xl:text-[2.25rem] leading-[1.06] tracking-[-0.022em] font-semibold text-[#180C05] truncate">
                  {centerProject.title}
                </h3>

                <span
                  aria-hidden="true"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#2C180B]/55 bg-white/30 group-hover:bg-[#1E1007] group-hover:text-[#FFF8F0] group-hover:border-[#1E1007] flex items-center justify-center text-[#1B0E06] transition-all duration-300 shrink-0"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H8.5M17 7V15.5"
                      stroke="currentColor"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------
                CARD 3 (RIGHT SLOT): PERSPECTIVE SIDE SHOWCASE CARD
            ---------------------------------------------------------------- */}
            <div
              onClick={() => openProjectModal(rightProject)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProjectModal(rightProject);
                }
              }}
              aria-label={`Open project details: ${rightProject.title}`}
              className="projects-card-right group absolute right-[1.5%] sm:right-[2.5%] lg:right-[2%] top-[21%] sm:top-[22%] w-[31%] sm:w-[29.5%] lg:w-[28%] max-w-[300px] aspect-[1/1.18] rounded-[20px] sm:rounded-[24px] p-2 sm:p-2.5 flex flex-col justify-between cursor-pointer z-20 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFDF9]"
            >
              {/* Top-Right Bright Specular Rim Highlight */}
              <div
                className="pointer-events-none absolute right-0 top-0 w-24 h-[2px] bg-gradient-to-l from-white via-[#FFF7E8] to-transparent z-20"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute right-0 top-0 w-[2px] h-28 bg-gradient-to-b from-white via-[#FFF2DC] to-transparent z-20"
                aria-hidden="true"
              />

              {/* Top Artwork Container with Smooth Bottom Fade */}
              <div className="relative w-full h-[66%] rounded-[15px] sm:rounded-[18px] overflow-hidden">
                <ProjectPreviewViewport project={rightProject} slot="right" />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-[#F5CA9C] via-[#F5CA9C]/65 to-transparent z-10"
                  aria-hidden="true"
                />
              </div>

              {/* Overlapping Frosted Category Pill Badge */}
              <div className="relative z-20 -mt-7 sm:-mt-8 px-2 sm:px-3">
                <div className="projects-category-badge inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full max-w-full">
                  <CategoryBadgeIcon type={rightProject.categoryIcon} size="sm" />
                  <span className="text-[8.5px] sm:text-[10.5px] font-medium tracking-[-0.01em] text-[#2B170A] truncate">
                    {rightProject.shortCategoryBadge}
                  </span>
                </div>
              </div>

              {/* Card Footer: Editorial Serif Title + Circular ↗ Action Indicator */}
              <div className="relative z-20 flex items-center justify-between gap-2 px-2 sm:px-3 pb-1.5 sm:pb-2.5 pt-1">
                <h3 className="font-serif-editorial text-[1.02rem] sm:text-[1.28rem] lg:text-[1.38rem] xl:text-[1.48rem] leading-[1.12] tracking-[-0.02em] font-normal text-[#1E1007] truncate">
                  {rightProject.title}
                </h3>

                <span
                  aria-hidden="true"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#4A2C16]/40 bg-white/35 hover:bg-white/80 flex items-center justify-center text-[#2B1608] transition-all duration-200 shrink-0"
                >
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H8.5M17 7V15.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------
                FOREGROUND SWEEPING GOLDEN-WHITE ORBITAL ARC & 3D SPHERES
            ---------------------------------------------------------------- */}
            <svg
              className="pointer-events-none absolute inset-0 w-full h-full z-40 overflow-visible"
              viewBox="0 0 1080 780"
              fill="none"
              aria-hidden="true"
            >
              {/* Soft outer golden bloom along the lower front orbital sweep */}
              <path
                d="M92 382 C-28 502, 102 642, 488 618 C835 596, 1118 446, 1012 316 C982 280, 932 258, 868 248"
                stroke="url(#projOrbitOuterGlow)"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
                filter="url(#projOrbitGlowFilter)"
              />

              {/* Crisp luminous white-gold main orbital curve */}
              <path
                d="M92 382 C-28 502, 102 642, 488 618 C835 596, 1118 446, 1012 316 C982 280, 932 258, 868 248"
                stroke="url(#projMainOrbitStroke)"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Secondary subtle inner harmonic ring along the bottom */}
              <path
                d="M52 465 C95 608, 365 648, 695 575 C915 526, 1042 428, 1030 345"
                stroke="rgba(255, 240, 214, 0.52)"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Bottom-Left 3D Metallic Golden-Orange Sphere on the orbital ring */}
              <g transform="translate(52, 548)">
                <circle cx="2" cy="7" r="19" fill="rgba(148, 48, 2, 0.34)" filter="url(#projOrbitGlowFilter)" />
                <circle cx="0" cy="0" r="18.5" fill="url(#projGoldenSphere)" />
              </g>

              {/* Mid-Right 3D Metallic Golden-Orange Sphere on the orbital ring */}
              <g transform="translate(996, 434)">
                <circle cx="2" cy="6" r="16" fill="rgba(148, 48, 2, 0.34)" filter="url(#projOrbitGlowFilter)" />
                <circle cx="0" cy="0" r="15" fill="url(#projGoldenSphere)" />
              </g>
            </svg>

            {/* ---------------------------------------------------------------
                BOTTOM-RIGHT CAROUSEL NAVIGATION BUTTONS (← and →)
            ---------------------------------------------------------------- */}
            <div className="absolute bottom-1 sm:bottom-3 lg:bottom-6 right-2 sm:right-4 lg:right-3 z-40 flex items-center gap-3 sm:gap-3.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="projects-nav-prev w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-[#2B1608] transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFDF9]"
              >
                <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5M5 12L11 6M5 12L11 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="projects-nav-next w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-[#FFFDF9] transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFDF9]"
              >
                <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          3. INTERACTIVE PROJECT CASE STUDY MODAL (WHEN A CARD IS CLICKED)
      ====================================================================== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A0B03]/75 backdrop-blur-md select-text"
          onClick={closeProjectModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            ref={caseStudyModalRef}
            className="relative w-full max-w-2xl rounded-[28px] bg-gradient-to-b from-[#FFFDF9] to-[#FDECD8] border border-white shadow-[0_32px_80px_rgba(40,12,2,0.58)] overflow-hidden text-[#1E1108]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Artwork Banner */}
            <div className="relative h-52 sm:h-60 w-full bg-[#140702] overflow-hidden">
              <ProjectPreviewViewport project={selectedProject} slot="center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B03]/90 via-[#1A0B03]/35 to-transparent z-10" />

              {/* Close Button */}
              <button
                ref={caseStudyCloseBtnRef}
                type="button"
                onClick={closeProjectModal}
                aria-label="Close project details"
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white border border-white/25 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {/* Category Pill & Title Overlay */}
              <div className="absolute bottom-4 left-6 right-6 z-20 flex flex-col items-start gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E8640C] text-white text-[11px] font-bold tracking-wider uppercase">
                    PROJECT {selectedProject.number}
                  </span>
                  <div className="projects-category-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full">
                    <CategoryBadgeIcon type={selectedProject.categoryIcon} size="sm" />
                    <span className="text-xs font-semibold text-[#231107]">{selectedProject.category}</span>
                  </div>
                </div>
                <h3
                  id="project-modal-title"
                  className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-[#FFFDF9]"
                >
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5 max-h-[66vh] overflow-y-auto">
              {/* External Action Links: View Live Demo (when available) & View GitHub Repository */}
              <div className="flex flex-wrap items-center gap-3 pb-2 border-b border-[#E8B98A]/40">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E65C00] to-[#C84602] hover:from-[#F2670A] hover:to-[#D84E05] text-white text-xs sm:text-sm font-semibold shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]"
                  >
                    <span>View Live Demo</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H8.5M17 7V15.5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E1007] hover:bg-[#321B0D] text-[#FFF8F0] text-xs sm:text-sm font-semibold shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>View GitHub Repository</span>
                </a>
              </div>

              {selectedProject.badgeNote && (
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#FDE4C4]/80 border border-[#F29A4B]/40 text-xs sm:text-sm font-medium text-[#9A3A04]">
                  <span className="text-[#E05A0B]">✦</span>
                  <span>{selectedProject.badgeNote}</span>
                </div>
              )}

              {selectedProject.disclaimer && (
                <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-[#FFF3E0] border border-[#E67E22]/50 text-xs sm:text-sm font-medium text-[#873600]">
                  <span className="text-[#D35400] font-bold shrink-0">Important:</span>
                  <span>{selectedProject.disclaimer}</span>
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B84B0A] mb-1.5">
                  Project Description
                </h4>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#2D1A0E]">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B84B0A] mb-2">
                  Key Features &amp; Capabilities
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#2D1A0E]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E5640E] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B84B0A] mb-2.5">
                  Technologies &amp; Category
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/85 border border-[#E89B54]/40 text-[#2B170A] shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          4. "VIEW ALL PROJECTS" COMPLETE 9-PROJECT GALLERY MODAL
      ====================================================================== */}
      {isAllProjectsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A0B03]/75 backdrop-blur-md select-text"
          onClick={closeAllProjectsModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="all-projects-modal-title"
        >
          <div
            ref={allProjectsModalRef}
            className="relative w-full max-w-6xl rounded-[28px] bg-gradient-to-b from-[#FFFDF9] to-[#FDEBD6] border border-white shadow-[0_32px_80px_rgba(40,12,2,0.58)] overflow-hidden text-[#1E1108] p-6 sm:p-8 max-h-[88vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E6B88A]/45">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C84E06]">
                  04 — COMPLETE PROJECT GALLERY ({PORTFOLIO_PROJECTS.length} PROJECTS)
                </span>
                <h3
                  id="all-projects-modal-title"
                  className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-[#1B0E06] mt-1"
                >
                  Turning Ideas into Impact.
                </h3>
              </div>

              <button
                ref={allProjectsCloseBtnRef}
                type="button"
                onClick={closeAllProjectsModal}
                aria-label="Close all projects modal"
                className="w-10 h-10 rounded-full bg-[#F9DEC0] hover:bg-[#F3C89B] text-[#2B1608] flex items-center justify-center transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 py-4 shrink-0">
              {filterOptions.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategoryFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00] ${
                    activeCategoryFilter === cat
                      ? 'bg-[#DF5A0B] text-white shadow-sm'
                      : 'bg-white/80 hover:bg-white text-[#2B170A] border border-[#E6B88A]/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Complete 9-Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto pt-1 pb-2 pr-1">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => {
                    const idx = PORTFOLIO_PROJECTS.findIndex((p) => p.id === proj.id);
                    if (idx !== -1) setCenterIndex(idx);
                    setIsAllProjectsOpen(false);
                    setSelectedProject(proj);
                  }}
                  className="group rounded-2xl bg-white/90 border border-white hover:border-[#F08C38] shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="relative h-40 w-full bg-[#180903] overflow-hidden">
                      <ProjectPreviewViewport project={proj} slot="center" />
                      <span className="absolute bottom-2.5 left-3 z-20 px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-xs text-[10px] font-semibold tracking-wider text-[#FFD8B0] uppercase">
                        Project {proj.number}
                      </span>
                    </div>

                    <div className="p-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FDF0E0] border border-[#F0C498] mb-2">
                        <CategoryBadgeIcon type={proj.categoryIcon} size="sm" />
                        <span className="text-[11px] font-medium text-[#3A1E0D]">{proj.category}</span>
                      </div>

                      <h4 className="font-serif-editorial text-xl font-semibold text-[#1B0E06] mb-1.5">
                        {proj.title}
                      </h4>

                      <p className="text-xs text-[#4A2E1B] line-clamp-3 leading-relaxed">
                        {proj.description}
                      </p>

                      {proj.disclaimer && (
                        <p className="mt-2 px-2.5 py-1.5 rounded-lg bg-[#FFF3E0] border border-[#E67E22]/35 text-[10.5px] leading-snug text-[#873600]">
                          <strong className="font-semibold">Note:</strong> {proj.disclaimer}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Direct Action Links in Archive Card Footer */}
                  <div
                    className="px-4 pb-4 pt-2.5 flex items-center justify-between gap-2 border-t border-[#F4DFC8]/70"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-2">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E65C00] hover:bg-[#C84602] text-white text-[11px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]"
                        >
                          <span>Live Demo</span>
                          <span>↗</span>
                        </a>
                      )}

                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1E1007] hover:bg-[#361D0D] text-white text-[11px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]"
                      >
                        <span>GitHub</span>
                        <span>↗</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const idx = PORTFOLIO_PROJECTS.findIndex((p) => p.id === proj.id);
                        if (idx !== -1) setCenterIndex(idx);
                        setIsAllProjectsOpen(false);
                        setSelectedProject(proj);
                      }}
                      className="text-[11px] font-semibold text-[#D95407] hover:underline cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
