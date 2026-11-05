import React, { useState } from 'react';
import { CutoutPortrait } from './components/CutoutPortrait';
import { SkillsTechStackSection } from './components/SkillsTechStackSection';
import { ProjectsSection } from './components/ProjectsSection';

interface ClimbStage {
  id: 'top50' | 'top10' | 'top3';
  stageLabel: string;
  milestone: string;
  title: string;
  summary: string;
  metricLabel: string;
  metricValue: string;
}

const CLIMB_STAGES: ClimbStage[] = [
  {
    id: 'top50',
    stageLabel: 'Round 01 · Elimination',
    milestone: 'Top 50',
    title: 'Precision Constraint Architecture',
    summary:
      'Selected into the Top 50 from the full national applicant pool by designing zero-hallucination multi-step system prompts under strict formatting and token budgets.',
    metricLabel: 'Advancement Tier',
    metricValue: 'Top 50 Shortlist',
  },
  {
    id: 'top10',
    stageLabel: 'Round 02 · Semifinals',
    milestone: 'Top 10',
    title: 'Adversarial Edge-Case Hardening',
    summary:
      'Climbed from Top 50 to Top 10 by stress-testing reasoning chains against adversarial inputs, ambiguous user intent, and multi-turn state drift.',
    metricLabel: 'Semifinal Standing',
    metricValue: 'Top 10 Finalist',
  },
  {
    id: 'top3',
    stageLabel: 'Round 03 · Grand Finale',
    milestone: 'Top 3',
    title: 'CoLab Nation Podium Finish',
    summary:
      'Secured a Top 3 Winner podium finish in the CoLab Nation Prompt Engineering Challenge 2026 through live problem decomposition and verifiable output accuracy.',
    metricLabel: 'Final Result',
    metricValue: 'Top 3 Winner',
  },
];

export default function App() {
  const [activeClimbIndex, setActiveClimbIndex] = useState<number>(2);
  const [hasInteractedWithClimb, setHasInteractedWithClimb] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>('About');

  const currentStage = CLIMB_STAGES[activeClimbIndex];

  const handleStepClimb = (index: number) => {
    setActiveClimbIndex(index);
    setHasInteractedWithClimb(true);
  };

  const handleCycleClimb = () => {
    setHasInteractedWithClimb(true);
    setActiveClimbIndex((prev) => (prev + 1) % CLIMB_STAGES.length);
  };

  const scrollToSection = (id: string, navLabel: string) => {
    setActiveNav(navLabel);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full m-0 p-0 bg-[#0B0B14] text-[#141418] flex flex-col overflow-x-hidden">
      {/* =====================================================================
          REFERENCE 1: FULL-BLEED HERO SECTION
          Left: Rich burnt-orange (top-left) to golden-yellow (lower-left) studio lighting
          Right: Continuous clean white content area extending to viewport edge
          Centre: Monumental full-neck-and-shoulders cutout portrait bridging both zones
      ====================================================================== */}
      <section
        id="about"
        aria-label="Portfolio Hero"
        className="relative w-full lg:h-screen lg:min-h-[780px] lg:max-h-[960px] rounded-none hero-studio-backdrop overflow-hidden overflow-clip flex flex-col lg:block"
      >
        {/* Studio Geometric Gobo Ring Accents on the Left Orange/Yellow Side */}
        <svg
          aria-hidden="true"
          viewBox="0 0 800 900"
          fill="none"
          className="pointer-events-none absolute top-0 left-0 h-full w-[62%] opacity-90 select-none [mask-image:linear-gradient(to_right,black_0%,black_58%,transparent_96%)]"
          preserveAspectRatio="xMinYMid slice"
        >
          {/* Upper-center sweeping studio arc behind head */}
          <circle
            cx="470"
            cy="95"
            r="265"
            stroke="rgba(255, 165, 65, 0.22)"
            strokeWidth="88"
          />
          {/* Lower-left golden illumination ring behind neck & left shoulder */}
          <circle
            cx="330"
            cy="640"
            r="235"
            stroke="rgba(255, 215, 75, 0.34)"
            strokeWidth="76"
          />
          <circle
            cx="330"
            cy="640"
            r="145"
            fill="rgba(255, 218, 85, 0.22)"
          />
        </svg>

        {/* RIGHT SEAMLESS GRADUAL TRANSITION TO CLEAN WHITE (No hard vertical dividing line) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-y-0 right-0 left-[32%] hero-right-seamless-blend pointer-events-none"
        />

        {/* MONUMENTAL CENTRAL PORTRAIT (Bridges the 50% orange/white seam with full sloping shoulders & atmospheric light-wrap) */}
        <div className="relative lg:absolute lg:bottom-0 lg:left-[45%] lg:-translate-x-1/2 z-20 flex items-end justify-center pointer-events-none order-2 lg:order-none h-[440px] sm:h-[560px] lg:h-[92%] xl:h-[93%] w-full lg:w-[760px] xl:w-[830px] mt-2 lg:mt-0">
          {/* Warm golden atmospheric backlight behind neck/ear */}
          <div
            aria-hidden="true"
            className="absolute bottom-[18%] left-[24%] w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full bg-[#FFCA3A]/45 blur-[54px] -z-10"
          />
          {/* Subtle warm cast shadow on the white right-hand surface behind the torso/neck */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute bottom-[4%] right-[14%] w-[220px] h-[380px] rounded-full bg-[#8C4A18]/[0.08] blur-[42px] -z-10"
          />
          <CutoutPortrait className="w-full h-full flex items-end justify-center" />
          {/* Foreground atmospheric golden light-wrap over the lower-left shoulder (fuses shirt into the golden background) */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[4%] w-[260px] sm:w-[330px] h-[140px] sm:h-[175px] rounded-full bg-gradient-to-tr from-[#FBA919]/65 via-[#F59E1D]/30 to-transparent blur-[28px] mix-blend-screen pointer-events-none"
          />
        </div>

        {/* FOREGROUND CONTENT LAYER */}
        <div className="relative z-30 w-full h-full flex flex-col justify-between px-6 py-7 sm:px-10 sm:py-9 lg:px-14 lg:py-10 pointer-events-none">
          {/* TOP ROW: Top-Left White Emblem Mark ("AV") + Top-Right Minimal Navigation */}
          <div className="flex items-center justify-between gap-4 pointer-events-auto">
            {/* Top-left logo mark */}
            <a
              href="#about"
              aria-label="Abhinav Sai Vidadala Home"
              className="relative w-11 h-11 rounded-full bg-white text-[#942905] flex items-center justify-center transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
            >
              <span className="font-display font-medium text-[14.5px] tracking-[-0.04em] leading-none">
                AV
              </span>
            </a>

            {/* Top-right minimal navigation sitting naturally on the white right area */}
            <nav
              aria-label="Primary Navigation"
              className="bg-white lg:bg-transparent rounded-full lg:rounded-none px-4 py-2 lg:p-0 lg:pr-4 max-w-full overflow-x-auto"
            >
              <ul className="flex items-center gap-5 sm:gap-8 lg:gap-10 text-[12.5px] sm:text-[13px] font-normal text-[#18181B]">
                {[
                  { label: 'About', target: 'about' },
                  { label: 'Skills', target: 'achievements' },
                  { label: 'Achievements', target: 'achievements' },
                  { label: 'Projects', target: 'achievements' },
                  { label: 'Contact', target: 'contact-links' },
                ].map((item) => {
                  const isCurrent = activeNav === item.label;
                  return (
                    <li key={item.label} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => scrollToSection(item.target, item.label)}
                        className={`whitespace-nowrap transition-colors cursor-pointer py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B93A0B] rounded ${
                          isCurrent
                            ? 'text-[#141418] font-medium'
                            : 'text-[#3F3F46] hover:text-[#141418]'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* MIDDLE ROW: Left Editorial Headline Lockup + Right Clean Editorial Greeting */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-auto py-6 lg:py-0">
            {/* LEFT SIDE: Outlined Pill Label + 4-Line Light White Headline + White Pill CTA */}
            <div className="lg:col-span-5 flex flex-col items-start text-left pointer-events-auto">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/45 text-white/95 text-[11.5px] tracking-[0.01em] font-normal mb-5">
                Abhinav Sai Vidadala / Prompt Engineer
              </div>

              <h1 className="font-display font-light text-white text-[52px] sm:text-[68px] lg:text-[82px] xl:text-[92px] tracking-[-0.035em] leading-[0.94]">
                <span className="block">I build</span>
                <span className="block">with AI,</span>
                <span className="block">then compete</span>
                <span className="block">to prove it.</span>
              </h1>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => scrollToSection('achievements', 'Achievements')}
                  className="h-[54px] px-10 rounded-full bg-white text-[#141418] text-[13.5px] font-medium tracking-[-0.01em] shadow-[0_0_40px_rgba(255,255,255,0.62)] hover:shadow-[0_0_52px_rgba(255,255,255,0.85)] hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  See my work
                </button>
              </div>
            </div>

            {/* Spacer for central portrait */}
            <div className="hidden lg:block lg:col-span-3" />

            {/* RIGHT MIDDLE: Natural typography directly on the white content area */}
            <div className="lg:col-span-4 flex flex-col items-start lg:pl-8 lg:pr-4 pointer-events-auto bg-white lg:bg-transparent rounded-[22px] lg:rounded-none p-6 lg:p-0">
              <span className="inline-block px-3 py-0.5 rounded-full border border-[#141418]/35 text-[8.5px] uppercase tracking-[0.12em] text-[#141418]/80 font-medium mb-4">
                2026 Season
              </span>

              <p className="font-display font-normal text-[21px] sm:text-[23px] xl:text-[25px] leading-[1.18] tracking-[-0.025em] text-[#141418] max-w-[295px]">
                Hi, I&apos;m Abhinav. 20+ competitions in 2026, including 1{' '}
                <span className="text-[#B36244]">Top 3</span> win. Want to see the work?
              </p>

              <p className="mt-6 text-[11px] leading-[1.35] text-[#52525B] font-normal">
                Structured prompts. Relentless testing.
                <br />
                Verified benchmark execution.
              </p>
            </div>
          </div>

          {/* BOTTOM ROW: Bottom-Left Two Stat Cards + Bottom-Right Motto Card */}
          <div
            id="contact-links"
            className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 pointer-events-auto"
          >
            {/* BOTTOM LEFT: Two square-ish white stat cards */}
            <div className="lg:col-span-4 flex items-center gap-2.5">
              {/* Stat Card 1 */}
              <div className="w-[136px] sm:w-[142px] h-[128px] sm:h-[134px] bg-white rounded-[18px] p-3.5 sm:p-4 flex flex-col justify-between shadow-[0_10px_28px_rgba(120,45,0,0.12)]">
                <div className="flex items-start justify-between gap-1">
                  <span className="text-[10.5px] leading-[1.18] font-medium text-[#27272A]">
                    CoLab Nation Winner
                  </span>
                  <span className="px-1.5 py-[2px] rounded-full bg-[#F5B027] text-[#141418] text-[7.5px] font-semibold leading-none shrink-0">
                    26
                  </span>
                </div>
                <div className="font-display font-normal text-[33px] sm:text-[36px] leading-none tracking-[-0.03em] text-[#141418] tabular-nums">
                  Top 3
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="w-[136px] sm:w-[142px] h-[128px] sm:h-[134px] bg-white rounded-[18px] p-3.5 sm:p-4 flex flex-col justify-between shadow-[0_10px_28px_rgba(120,45,0,0.12)]">
                <div className="flex items-start justify-between gap-1">
                  <span className="text-[10.5px] leading-[1.18] font-medium text-[#27272A]">
                    Hackathons in 2026
                  </span>
                  <span className="px-1.5 py-[2px] rounded-full bg-[#F5B027] text-[#141418] text-[7.5px] font-semibold leading-none shrink-0">
                    AI
                  </span>
                </div>
                <div className="font-display font-normal text-[33px] sm:text-[36px] leading-none tracking-[-0.03em] text-[#141418] tabular-nums">
                  20+
                </div>
              </div>
            </div>

            {/* Spacer for central portrait */}
            <div className="hidden lg:block lg:col-span-4" aria-hidden="true" />

            {/* BOTTOM RIGHT: Soft light-grey card (#F4F4F5) inside the white right zone */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="w-full max-w-[295px] bg-[#F4F4F5] rounded-[18px] p-5 sm:p-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-[10px] overflow-hidden bg-[#B93A0B] shrink-0">
                    <img
                      src="/me.jpg"
                      alt="Abhinav Sai Vidadala"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-[11.5px] font-semibold text-[#141418] leading-tight">
                      Abhinav Sai Vidadala
                    </div>
                    <div className="text-[10.5px] text-[#71717A] leading-tight mt-0.5">
                      Prompt Engineer
                    </div>
                  </div>
                </div>

                <blockquote className="mt-6 font-display font-normal text-[20px] sm:text-[21px] leading-[1.18] tracking-[-0.02em] text-[#141418]">
                  &ldquo;[My motto]&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: ABOUT ME ("More than just code.") — REAL HTML/CSS/SVG RECREATION
      ====================================================================== */}
      <section
        id="achievements"
        aria-label="About Me"
        className="relative w-full lg:min-h-[820px] xl:min-h-[880px] about-light-studio-bg text-[#241107] overflow-hidden flex flex-col justify-between"
      >
        {/* ===================================================================
            LAYER 1 (Z-10): BACKGROUND DECORATIVE SHAPES, DOMES, RING & SPARKLE
        ==================================================================== */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1672 941"
          fill="none"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 w-full h-full z-10 select-none"
        >
          <defs>
            {/* Top-left large flowing orange shape gradient */}
            <linearGradient id="aboutTopLeftArc" x1="0%" y1="0%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#FE9635" stopOpacity="0.96" />
              <stop offset="48%" stopColor="#FEB874" stopOpacity="0.78" />
              <stop offset="100%" stopColor="#FDE5C6" stopOpacity="0.18" />
            </linearGradient>

            {/* Right-upper subtle cream-apricot sweeping plane */}
            <linearGradient id="aboutRightUpperSweep" x1="20%" y1="0%" x2="95%" y2="100%">
              <stop offset="0%" stopColor="#FFF7ED" stopOpacity="0.82" />
              <stop offset="60%" stopColor="#FDE6C9" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#FCD3A1" stopOpacity="0.25" />
            </linearGradient>

            {/* Center-right warm amber dome behind left shoulder of portrait */}
            <linearGradient id="aboutLeftShoulderDome" x1="15%" y1="5%" x2="75%" y2="95%">
              <stop offset="0%" stopColor="#F79E3B" stopOpacity="0.76" />
              <stop offset="45%" stopColor="#FAC688" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#FDEBD4" stopOpacity="0.1" />
            </linearGradient>

            {/* Right warm golden-orange dome behind right shoulder of portrait */}
            <linearGradient id="aboutRightShoulderDome" x1="45%" y1="0%" x2="65%" y2="95%">
              <stop offset="0%" stopColor="#F79A34" stopOpacity="0.88" />
              <stop offset="42%" stopColor="#FBC27E" stopOpacity="0.58" />
              <stop offset="85%" stopColor="#FDE8CC" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#FFF5E8" stopOpacity="0.05" />
            </linearGradient>

            {/* Diagonal warm amber light rays on lower right */}
            <linearGradient id="aboutRightRay" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F39230" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FBC381" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Top-left large curved orange shape */}
          <path
            d="M0 0 H374 C295 168, 172 340, 108 455 C66 530, 32 562, 0 564 Z"
            fill="url(#aboutTopLeftArc)"
          />
          {/* Subtle lower-left secondary soft cream curve */}
          <path
            d="M0 564 C65 562, 132 595, 165 685 C192 758, 160 865, 85 941 H0 Z"
            fill="#FFFBF7"
            fillOpacity="0.48"
          />

          {/* Right-side sweeping diagonal cream-apricot plane */}
          <path
            d="M1445 0 H1672 V941 H1180 C1235 610, 1325 265, 1445 0 Z"
            fill="url(#aboutRightUpperSweep)"
          />

          {/* Delicate thin amber circular ring behind portrait head & right shoulder */}
          <circle
            cx="1430"
            cy="370"
            r="192"
            stroke="#E59849"
            strokeOpacity="0.32"
            strokeWidth="1.35"
          />

          {/* Large warm golden dome behind portrait's left shoulder (center-right) */}
          <path
            d="M788 941 C795 695, 922 500, 1115 475 C1255 456, 1380 565, 1425 760 L1450 941 Z"
            fill="url(#aboutLeftShoulderDome)"
          />

          {/* Large warm golden-orange dome behind portrait's right shoulder */}
          <path
            d="M1225 941 C1240 620, 1368 405, 1528 405 C1592 405, 1640 422, 1672 446 V941 Z"
            fill="url(#aboutRightShoulderDome)"
          />

          {/* Diagonal warm amber architectural light planes at lower right */}
          <path
            d="M1515 795 L1672 565 V760 L1545 845 Z"
            fill="url(#aboutRightRay)"
          />
          <path
            d="M1560 825 L1672 680 V835 L1585 875 Z"
            fill="url(#aboutRightRay)"
          />

          {/* Top-right 4-point orange star sparkle */}
          <path
            d="M1543 85 C1545 104, 1548 107, 1571 109 C1548 111, 1545 114, 1543 137 C1541 114, 1538 111, 1515 109 C1538 107, 1541 104, 1543 85 Z"
            fill="#E5731D"
          />
        </svg>

        {/* ===================================================================
            LAYER 2 (Z-20): MAIN CONTENT & FRAMELESS RIGHT-SIDE PORTRAIT
        ==================================================================== */}
        <div className="relative z-20 w-full max-w-[1560px] mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 items-center px-6 sm:px-12 lg:px-20 pt-14 sm:pt-18 lg:pt-20 pb-12 lg:pb-24">
          {/* LEFT COLUMN (Cols 1-6): Editorial Text & 3 Highlight Tiles */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-30">
            {/* Section Kicker: 02 — ABOUT ME + Horizontal Orange Line */}
            <div className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-[14px] sm:text-[15.5px] font-normal tracking-[0.06em] text-[#241107]">
                02
              </span>
              <span aria-hidden="true" className="w-4 h-[1.5px] bg-[#E06D1A]" />
              <span className="text-[14px] sm:text-[15.5px] uppercase tracking-[0.08em] font-normal text-[#241107] whitespace-nowrap">
                ABOUT ME
              </span>
              <span
                aria-hidden="true"
                className="w-28 sm:w-48 md:w-60 h-[1px] bg-[#E28A48]/75 ml-1"
              />
            </div>

            {/* Large Editorial Serif Heading: "More than / just code." */}
            <h2 className="font-serif-editorial font-semibold text-[54px] sm:text-[72px] lg:text-[80px] xl:text-[90px] leading-[0.98] tracking-[-0.02em] text-[#241107]">
              <span className="block">More than</span>
              <span className="block mt-1">
                just <span className="about-code-accent">code.</span>
              </span>
            </h2>

            {/* Supporting Paragraphs */}
            <div className="mt-7 sm:mt-9 space-y-5 max-w-[520px] text-[16px] sm:text-[18px] xl:text-[19px] leading-[1.52] text-[#24140B] font-normal">
              <p>
                I&apos;m Abhinav — a curious developer who enjoys exploring the intersection of
                technology, creativity and real-world problem solving.
              </p>
              <p>
                I believe great ideas become meaningful when they are transformed into something
                useful.
              </p>
            </div>

            {/* Serif Tagline + Short Orange Underline */}
            <div id="my-journey" className="mt-7 sm:mt-8">
              <p className="font-serif-editorial font-semibold text-[20px] sm:text-[23.5px] xl:text-[25.5px] leading-[1.25] tracking-[-0.01em] text-[#DC5E0B]">
                Curiosity drives me. Building defines me.
              </p>
              <div
                aria-hidden="true"
                className="mt-2.5 w-[92px] h-[2px] bg-[#E06612] rounded-full"
              />
            </div>

            {/* Three Small Visual Highlights: Developer | AI Explorer | Problem Solver */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3.5 sm:gap-5 w-full max-w-[465px]">
              {/* Highlight 1: Developer */}
              <div className="about-highlight-card rounded-[20px] px-3 py-4 sm:px-4 sm:py-5 flex flex-col items-center justify-center text-center transition-transform duration-200 hover:-translate-y-0.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full about-highlight-icon-circle flex items-center justify-center text-[#E0620E] mb-2.5">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 32 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 6 2 12l7 6" />
                    <path d="m23 6 7 6-7 6" />
                    <path d="m18 4-4 16" />
                  </svg>
                </div>
                <span className="text-[12.5px] sm:text-[14px] font-medium text-[#241107] leading-tight">
                  Developer
                </span>
              </div>

              {/* Highlight 2: AI Explorer */}
              <div className="about-highlight-card rounded-[20px] px-3 py-4 sm:px-4 sm:py-5 flex flex-col items-center justify-center text-center transition-transform duration-200 hover:-translate-y-0.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full about-highlight-icon-circle flex items-center justify-center text-[#E0620E] mb-2.5">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" />
                  </svg>
                </div>
                <span className="text-[12.5px] sm:text-[14px] font-medium text-[#241107] leading-tight">
                  AI Explorer
                </span>
              </div>

              {/* Highlight 3: Problem Solver */}
              <div className="about-highlight-card rounded-[20px] px-3 py-4 sm:px-4 sm:py-5 flex flex-col items-center justify-center text-center transition-transform duration-200 hover:-translate-y-0.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full about-highlight-icon-circle flex items-center justify-center text-[#E0620E] mb-2.5">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <span className="text-[12.5px] sm:text-[14px] font-medium text-[#241107] leading-tight">
                  Problem Solver
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Cols 7-12): Large Frameless Personal Portrait Integrated into Background */}
          <div className="lg:col-span-6 relative lg:static flex items-end justify-center mt-10 lg:mt-0">
            <div className="relative lg:absolute lg:bottom-0 lg:right-[1%] xl:right-[3%] w-full max-w-[540px] sm:max-w-[640px] lg:max-w-none lg:w-[55%] xl:w-[53%] lg:h-[93%] flex items-end justify-center pointer-events-none z-20">
              {/* Soft warm amber backlight behind neck and shoulders */}
              <div
                aria-hidden="true"
                className="absolute bottom-[14%] left-[22%] w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full bg-[#FAA643]/40 blur-[56px] -z-10"
              />
              <img
                src="/about-portrait-cutout.png"
                alt="Abhinav Sai Vidadala"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-bottom select-none"
              />
            </div>
          </div>
        </div>

        {/* ===================================================================
            LAYER 3 (Z-30): FOREGROUND FLOWING BOTTOM ORANGE WAVE RIBBONS
            Overlaps the bottom edge of the portrait for seamless integration
        ==================================================================== */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1672 220"
          fill="none"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 inset-x-0 w-full h-[90px] sm:h-[135px] lg:h-[185px] z-30 select-none"
        >
          <defs>
            {/* Left-to-center flowing peach-orange wave gradient */}
            <linearGradient id="aboutBottomWaveLeft" x1="0%" y1="30%" x2="100%" y2="70%">
              <stop offset="0%" stopColor="#FDE0B9" stopOpacity="0.68" />
              <stop offset="48%" stopColor="#F8A855" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#DE6515" stopOpacity="0.92" />
            </linearGradient>

            {/* Right sweeping deep amber-orange wave overlapping the lower portrait */}
            <linearGradient id="aboutBottomWaveRight" x1="0%" y1="60%" x2="100%" y2="20%">
              <stop offset="0%" stopColor="#D65B0D" stopOpacity="0.88" />
              <stop offset="55%" stopColor="#E97820" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#F7A74B" stopOpacity="0.86" />
            </linearGradient>

            {/* Foreground lower-right bright golden wave crest */}
            <linearGradient id="aboutBottomWaveCrest" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#DF6615" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#F38D2C" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FBBA6C" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Wave 1: Left-center sweeping translucent wave */}
          <path
            d="M445 220 C540 162, 665 136, 795 142 C945 148, 1085 186, 1215 220 Z"
            fill="url(#aboutBottomWaveLeft)"
          />
          <path
            d="M445 220 C540 162, 665 136, 795 142 C945 148, 1085 186, 1215 220"
            stroke="#FAD19E"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          />

          {/* Wave 2: Main right sweeping orange wave overlapping portrait base */}
          <path
            d="M920 220 C1085 168, 1275 82, 1485 68 C1565 62, 1625 66, 1672 74 V220 Z"
            fill="url(#aboutBottomWaveRight)"
          />
          <path
            d="M920 220 C1085 168, 1275 82, 1485 68 C1565 62, 1625 66, 1672 74"
            stroke="#FBC279"
            strokeOpacity="0.75"
            strokeWidth="1.6"
          />

          {/* Wave 3: Lower-right golden-orange foreground wave crest */}
          <path
            d="M1115 220 C1255 178, 1388 128, 1525 138 C1588 142, 1635 162, 1672 184 V220 Z"
            fill="url(#aboutBottomWaveCrest)"
          />
        </svg>
      </section>

      {/* =====================================================================
          SECTION 3: SKILLS & TECH STACK
      ====================================================================== */}
      <SkillsTechStackSection />

      {/* =====================================================================
          SECTION 4: PROJECTS — TURNING IDEAS INTO IMPACT
      ====================================================================== */}
      <ProjectsSection />
    </div>
  );
}
