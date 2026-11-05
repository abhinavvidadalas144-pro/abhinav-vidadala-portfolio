import React, { useState } from 'react';

type OrbitTechId =
  | 'python'
  | 'openai'
  | 'react'
  | 'code'
  | 'database'
  | 'analytics'
  | 'aws';

interface CoreSkillItem {
  id: string;
  label: string;
  linkedOrbitId?: OrbitTechId;
}

const CORE_SKILLS: CoreSkillItem[] = [
  { id: 'python', label: 'Python', linkedOrbitId: 'python' },
  { id: 'genai', label: 'Generative AI', linkedOrbitId: 'openai' },
  { id: 'analytics', label: 'Data Analytics', linkedOrbitId: 'analytics' },
  { id: 'frontend', label: 'Frontend Development', linkedOrbitId: 'react' },
  { id: 'problem-solving', label: 'Problem Solving', linkedOrbitId: 'code' },
  { id: 'remote-sensing', label: 'Remote Sensing', linkedOrbitId: 'aws' },
  { id: 'business-analysis', label: 'Business Analysis', linkedOrbitId: 'database' },
];

/**
 * Official recognizable Python dual-snake logo SVG
 */
const PythonLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 110 110" fill="none" className={className} aria-hidden="true">
    <path
      d="M54.3 8C38.6 8 39.6 14.8 39.6 14.8L39.6 22H54.8V24.6H32.6C32.6 24.6 21 23.3 21 39.2C21 55.1 31.1 54.5 31.1 54.5H37.1V46.9C37.1 46.9 36.8 36.8 47 36.8H63.8C63.8 36.8 73.3 37 73.3 27.6V17.2C73.3 17.2 74.7 8 54.3 8ZM45.2 13.5C47 13.5 48.5 15 48.5 16.8C48.5 18.6 47 20.1 45.2 20.1C43.4 20.1 41.9 18.6 41.9 16.8C41.9 15 43.4 13.5 45.2 13.5Z"
      fill="url(#pyBlueGrad)"
    />
    <path
      d="M55.4 101.6C71.1 101.6 70.1 94.8 70.1 94.8L70.1 87.6H54.9V85H77.1C77.1 85 88.7 86.3 88.7 70.4C88.7 54.5 78.6 55.1 78.6 55.1H72.6V62.7C72.6 62.7 72.9 72.8 62.7 72.8H45.9C45.9 72.8 36.4 72.6 36.4 82V92.4C36.4 92.4 35 101.6 55.4 101.6ZM64.5 96.1C62.7 96.1 61.2 94.6 61.2 92.8C61.2 91 62.7 89.5 64.5 89.5C66.3 89.5 67.8 91 67.8 92.8C67.8 94.6 66.3 96.1 64.5 96.1Z"
      fill="url(#pyYellowGrad)"
    />
    <defs>
      <linearGradient id="pyBlueGrad" x1="21" y1="8" x2="74" y2="55" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#387EB8" />
        <stop offset="100%" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="pyYellowGrad" x1="36" y1="55" x2="89" y2="102" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFE052" />
        <stop offset="100%" stopColor="#FFC331" />
      </linearGradient>
    </defs>
  </svg>
);

/**
 * Official recognizable OpenAI 6-petal blossom knot SVG
 */
const OpenAILogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

/**
 * Official recognizable React 3-ellipse atomic logo SVG
 */
const ReactLogo: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <svg viewBox="-11.5 -10.232 23 20.463" className={className} aria-hidden="true">
    <circle cx="0" cy="0" r="2.15" fill="#00B5E2" />
    <g stroke="#00B5E2" strokeWidth="1.15" fill="none">
      <ellipse rx="10.5" ry="4.1" />
      <ellipse rx="10.5" ry="4.1" transform="rotate(60)" />
      <ellipse rx="10.5" ry="4.1" transform="rotate(120)" />
    </g>
  </svg>
);

/**
 * Recognizable AWS wordmark + smile arrow logo SVG
 */
const AwsLogo: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <svg viewBox="0 0 80 52" fill="none" className={className} aria-hidden="true">
    <text
      x="40"
      y="27"
      textAnchor="middle"
      fill="#231F20"
      fontFamily="DM Sans, Arial, sans-serif"
      fontWeight="700"
      fontSize="24"
      letterSpacing="-0.5"
    >
      aws
    </text>
    {/* AWS signature orange smile curve */}
    <path
      d="M14 35.5C24.5 43.2 49.5 44.2 63.5 34.5"
      stroke="#FF9900"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M58.5 32.2C61.8 31.8 65.4 32.8 66.2 33.8C67 34.8 65.2 38.8 63.2 40.8"
      stroke="#FF9900"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * 3-tier blue cylindrical Database SVG matching the reference
 */
const DatabaseLogo: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 48 52" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="dbCylGrad" x1="6" y1="0" x2="42" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1D63DC" />
        <stop offset="45%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="dbTopGrad" x1="8" y1="4" x2="40" y2="16" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    {/* Bottom tier */}
    <path
      d="M8 34V42C8 45.866 15.163 49 24 49C32.837 49 40 45.866 40 42V34C40 37.866 32.837 41 24 41C15.163 41 8 37.866 8 34Z"
      fill="url(#dbCylGrad)"
    />
    {/* Middle tier */}
    <path
      d="M8 22V30C8 33.866 15.163 37 24 37C32.837 37 40 33.866 40 30V22C40 25.866 32.837 29 24 29C15.163 29 8 25.866 8 22Z"
      fill="url(#dbCylGrad)"
    />
    {/* Top tier body */}
    <path
      d="M8 10V18C8 21.866 15.163 25 24 25C32.837 25 40 21.866 40 18V10"
      fill="url(#dbCylGrad)"
    />
    {/* Top cap */}
    <ellipse cx="24" cy="10" rx="16" ry="6.5" fill="url(#dbTopGrad)" />
  </svg>
);

/**
 * 3-bar ascending golden-orange Data Analytics SVG matching the reference
 */
const AnalyticsBarsLogo: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="barGrad" x1="0" y1="6" x2="0" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFB020" />
        <stop offset="100%" stopColor="#EA6A12" />
      </linearGradient>
    </defs>
    <rect x="7" y="24" width="7.5" height="13" rx="2.2" fill="url(#barGrad)" />
    <rect x="18.25" y="16.5" width="7.5" height="20.5" rx="2.2" fill="url(#barGrad)" />
    <rect x="29.5" y="8" width="7.5" height="29" rx="2.2" fill="url(#barGrad)" />
  </svg>
);

/**
 * Code brackets </> SVG matching the reference
 */
const CodeBracketsLogo: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-9 h-9',
  color = '#241208',
}) => (
  <svg
    viewBox="0 0 36 28"
    fill="none"
    stroke={color}
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M11 7 3 14l8 7" />
    <path d="m25 7 8 7-8 7" />
    <path d="m20.5 4.5-5 19" />
  </svg>
);

export const SkillsTechStackSection: React.FC = () => {
  const [hoveredOrbitId, setHoveredOrbitId] = useState<OrbitTechId | null>(null);
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  const isOrbitHighlighted = (orbitId: OrbitTechId) => {
    if (hoveredOrbitId === orbitId) return true;
    if (!hoveredSkillId) return false;
    const matched = CORE_SKILLS.find((s) => s.id === hoveredSkillId);
    return matched?.linkedOrbitId === orbitId;
  };

  return (
    <section
      id="skills"
      aria-label="Skills and Tech Stack"
      className="relative w-full skills-studio-bg text-[#241107] overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* =====================================================================
          LAYER 1 (Z-10): FLOWING ORANGE & CREAM ABSTRACT BACKGROUND SHAPES
      ====================================================================== */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1672 941"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 w-full h-full z-10 select-none"
      >
        <defs>
          {/* Left sweeping deep-to-soft orange ribbon */}
          <linearGradient id="skillsLeftWaveGrad" x1="0%" y1="0%" x2="90%" y2="85%">
            <stop offset="0%" stopColor="#FA8824" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#FEA84E" stopOpacity="0.82" />
            <stop offset="85%" stopColor="#FDD6A5" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#FFF4E6" stopOpacity="0.08" />
          </linearGradient>

          {/* Upper-left secondary warm amber sweep */}
          <linearGradient id="skillsUpperLeftSweep" x1="10%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FEAE58" stopOpacity="0.72" />
            <stop offset="60%" stopColor="#FDD9AE" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#FFF7ED" stopOpacity="0.05" />
          </linearGradient>

          {/* Lower-right warm golden-orange wave */}
          <linearGradient id="skillsLowerRightWave" x1="20%" y1="0%" x2="95%" y2="100%">
            <stop offset="0%" stopColor="#FEA142" stopOpacity="0.72" />
            <stop offset="55%" stopColor="#FDBB72" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#FDE5C4" stopOpacity="0.25" />
          </linearGradient>

          {/* Bottom-center soft apricot diagonal ribbon */}
          <linearGradient id="skillsBottomCenterRibbon" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FDD9B0" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#FCE2C4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFF8F0" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Broad upper-left warm apricot curve */}
        <path
          d="M0 0 H895 C790 185, 625 320, 445 385 C235 460, 95 585, 0 742 Z"
          fill="url(#skillsUpperLeftSweep)"
        />

        {/* Prominent left S-curve orange shape */}
        <path
          d="M0 0 H545 C365 48, 175 135, 92 248 C28 335, 36 440, 125 505 C195 556, 145 645, 0 742 Z"
          fill="url(#skillsLeftWaveGrad)"
        />

        {/* Delicate luminous cream-gold highlight contour line on left S-curve */}
        <path
          d="M545 0 C355 52, 145 142, 65 262 C4 352, 22 448, 138 512"
          stroke="#FFF3E2"
          strokeOpacity="0.65"
          strokeWidth="2"
        />

        {/* Right-side warm golden-orange sweeping wave behind orbital base */}
        <path
          d="M990 941 C1145 785, 1365 595, 1672 480 V941 Z"
          fill="url(#skillsLowerRightWave)"
        />

        {/* Bottom-center soft apricot diagonal wave */}
        <path
          d="M475 941 C635 815, 865 735, 1185 690 L1672 620 V941 Z"
          fill="url(#skillsBottomCenterRibbon)"
        />
      </svg>

      {/* =====================================================================
          LAYER 2 (Z-20): MAIN SECTION CONTAINER
      ====================================================================== */}
      <div className="relative z-20 max-w-[1560px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col justify-between">
        {/* TOP & MIDDLE AREA: Left Capabilities Narrative + Right 3D Laptop & Orbital Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-4">
          {/* -----------------------------------------------------------------
              LEFT COLUMN (Cols 1-5): 03 — MY CAPABILITIES + Heading + Highlight
          ------------------------------------------------------------------ */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-30">
            {/* Section Kicker: 03 — MY CAPABILITIES + Horizontal Orange Line */}
            <div className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-7">
              <span className="text-[14px] sm:text-[15.5px] font-normal tracking-[0.06em] text-[#241107]">
                03
              </span>
              <span aria-hidden="true" className="w-4 h-[1.5px] bg-[#E06D1A]" />
              <span className="text-[14px] sm:text-[15.5px] uppercase tracking-[0.08em] font-normal text-[#241107] whitespace-nowrap">
                MY CAPABILITIES
              </span>
              <span
                aria-hidden="true"
                className="w-24 sm:w-44 md:w-48 h-[1px] bg-[#DF8542]/80 ml-1"
              />
            </div>

            {/* Editorial Serif Heading: "Skills & / Tech Stack." */}
            <h2 className="font-serif-editorial font-semibold text-[52px] sm:text-[68px] lg:text-[74px] xl:text-[86px] leading-[0.98] tracking-[-0.02em] text-[#231107]">
              <span className="block">Skills &amp;</span>
              <span className="block mt-1 skills-tech-accent whitespace-nowrap">
                Tech Stack.
              </span>
            </h2>

            {/* Supporting Description */}
            <p className="mt-6 sm:mt-8 text-[16.5px] sm:text-[18.5px] xl:text-[19.5px] leading-[1.48] text-[#23130A] font-normal max-w-[430px]">
              A combination of technology, creativity and analytical thinking.
            </p>

            {/* Rounded Translucent Highlight: "Always learning. / Always building." */}
            <div className="mt-8 sm:mt-10 skills-learning-box rounded-[22px] p-4 sm:px-6 sm:py-5 w-full max-w-[365px] flex items-center gap-4 sm:gap-5 relative overflow-hidden">
              {/* Left Vertical Orange Accent Pill Bar */}
              <div
                aria-hidden="true"
                className="w-[6px] h-[54px] sm:h-[60px] rounded-full bg-gradient-to-b from-[#E86A14] to-[#C84A06] shrink-0"
              />

              {/* Crisp Orange Lightning Bolt Icon */}
              <div className="text-[#DE5E0C] shrink-0">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13 2L4.5 13.5h6L9.5 22l9-11.5h-6L13 2z" />
                </svg>
              </div>

              {/* Stacked Message */}
              <div className="flex flex-col text-left">
                <span className="text-[17px] sm:text-[19px] font-medium text-[#211108] leading-[1.28]">
                  Always learning.
                </span>
                <span className="text-[17px] sm:text-[19px] font-medium text-[#DA5B0A] leading-[1.28] mt-0.5">
                  Always building.
                </span>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              RIGHT COLUMN (Cols 6-12): 3D Laptop Centerpiece + Orbital Rings + 7 Tech Icons
          ------------------------------------------------------------------ */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-[940px] aspect-[1020/660] flex items-center justify-center select-none">
              {/* Warm Golden Atmospheric Illumination Behind Laptop */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[20%] left-[22%] right-[12%] bottom-[15%] rounded-full bg-gradient-to-tr from-[#FA9A38]/40 via-[#FDBA68]/35 to-[#FFF2DF]/20 blur-[52px] -z-10"
              />

              {/* SVG Orbital Rings & Golden Spheres Around the Laptop */}
              <svg
                aria-hidden="true"
                viewBox="0 0 1020 660"
                fill="none"
                className="pointer-events-none absolute inset-0 w-full h-full z-10"
              >
                <defs>
                  <linearGradient id="orbitStrokeMain" x1="0%" y1="50%" x2="100%" y2="30%">
                    <stop offset="0%" stopColor="#F59E3F" stopOpacity="0.28" />
                    <stop offset="35%" stopColor="#F28B24" stopOpacity="0.85" />
                    <stop offset="75%" stopColor="#E97516" stopOpacity="0.92" />
                    <stop offset="100%" stopColor="#F7AC52" stopOpacity="0.55" />
                  </linearGradient>
                  <linearGradient id="orbitStrokeSecondary" x1="0%" y1="70%" x2="100%" y2="20%">
                    <stop offset="0%" stopColor="#FAD19E" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#F7A74B" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#FFF5E6" stopOpacity="0.35" />
                  </linearGradient>
                  <radialGradient id="goldOrbSphere" cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#FFFDF8" />
                    <stop offset="35%" stopColor="#FCD088" />
                    <stop offset="75%" stopColor="#EA8420" />
                    <stop offset="100%" stopColor="#B85206" />
                  </radialGradient>
                </defs>

                {/* Primary Tilted Orbital Ring Passing Through Floating Icons */}
                <ellipse
                  cx="535"
                  cy="315"
                  rx="452"
                  ry="205"
                  transform="rotate(-14 535 315)"
                  stroke="url(#orbitStrokeMain)"
                  strokeWidth="2.2"
                />

                {/* Secondary Inner Tilted Orbital Ring */}
                <ellipse
                  cx="542"
                  cy="326"
                  rx="420"
                  ry="178"
                  transform="rotate(-11 542 326)"
                  stroke="url(#orbitStrokeSecondary)"
                  strokeWidth="1.3"
                />

                {/* Subtle Innermost Light Loop */}
                <ellipse
                  cx="518"
                  cy="345"
                  rx="265"
                  ry="108"
                  transform="rotate(-16 518 345)"
                  stroke="url(#orbitStrokeSecondary)"
                  strokeWidth="1.2"
                />

                {/* Golden 3D Orbital Sphere 1 (Upper-Right Between OpenAI & React) */}
                <circle cx="678" cy="108" r="10.5" fill="url(#goldOrbSphere)" />
                {/* Golden 3D Orbital Sphere 2 (Far-Right Outer Orbit Edge) */}
                <circle cx="972" cy="222" r="8" fill="url(#goldOrbSphere)" />
              </svg>

              {/* Central 3D Laptop with Warm Sunset Screen & Glowing Circular Platform */}
              <img
                src="/skills-laptop-centerpiece.png"
                alt="Interactive Technology Showcase Laptop"
                referrerPolicy="no-referrer"
                className="relative z-20 w-[94%] h-auto object-contain translate-y-[6%] pointer-events-none"
              />

              {/* ===============================================================
                  7 FLOATING INTERACTIVE TECHNOLOGY TILES (Z-30)
                  Balanced medium dimensions (~18% smaller) on exact orbital path
              ================================================================ */}

              {/* 1. AWS Tile (Bottom-Left Orbit) */}
              <div
                onMouseEnter={() => setHoveredOrbitId('aws')}
                onMouseLeave={() => setHoveredOrbitId(null)}
                className={`skills-float-delayed absolute left-[8.5%] top-[54.5%] w-[44px] h-[44px] sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] xl:w-[74px] xl:h-[74px] rounded-[14px] sm:rounded-[18px] lg:rounded-[20px] flex items-center justify-center z-30 transition-all duration-300 cursor-pointer -rotate-[4deg] hover:rotate-0 hover:scale-108 ${
                  isOrbitHighlighted('aws')
                    ? 'skills-floating-tile-active scale-108'
                    : 'skills-floating-tile'
                }`}
                title="AWS Cloud & Infrastructure"
              >
                <AwsLogo className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11" />
              </div>

              {/* 2. Data Analytics Tile (Mid-Left Orbit) */}
              <div
                onMouseEnter={() => setHoveredOrbitId('analytics')}
                onMouseLeave={() => setHoveredOrbitId(null)}
                className={`skills-float-medium absolute left-[13.2%] top-[35.5%] w-[44px] h-[44px] sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] xl:w-[74px] xl:h-[74px] rounded-[14px] sm:rounded-[18px] lg:rounded-[20px] flex items-center justify-center z-30 transition-all duration-300 cursor-pointer -rotate-[5deg] hover:rotate-0 hover:scale-108 ${
                  isOrbitHighlighted('analytics')
                    ? 'skills-floating-tile-active scale-108'
                    : 'skills-floating-tile'
                }`}
                title="Data Analytics"
              >
                <AnalyticsBarsLogo className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
              </div>

              {/* 3. Python Tile (Upper-Left Orbit) */}
              <div
                onMouseEnter={() => setHoveredOrbitId('python')}
                onMouseLeave={() => setHoveredOrbitId(null)}
                className={`skills-float-slow absolute left-[23.2%] top-[15.2%] w-[46px] h-[46px] sm:w-[64px] sm:h-[64px] lg:w-[72px] lg:h-[72px] xl:w-[80px] xl:h-[80px] rounded-[14px] sm:rounded-[18px] lg:rounded-[20px] flex items-center justify-center z-30 transition-all duration-300 cursor-pointer -rotate-[4deg] hover:rotate-0 hover:scale-108 ${
                  isOrbitHighlighted('python')
                    ? 'skills-floating-tile-active scale-108'
                    : 'skills-floating-tile'
                }`}
                title="Python"
              >
                <PythonLogo className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
              </div>

              {/* 4. OpenAI Tile (Top-Center Orbit) */}
              <div
                onMouseEnter={() => setHoveredOrbitId('openai')}
                onMouseLeave={() => setHoveredOrbitId(null)}
                className={`skills-float-medium absolute left-[44.8%] top-[5.2%] w-[48px] h-[48px] sm:w-[66px] sm:h-[66px] lg:w-[74px] lg:h-[74px] xl:w-[82px] xl:h-[82px] rounded-[15px] sm:rounded-[19px] lg:rounded-[21px] flex items-center justify-center z-30 transition-all duration-300 cursor-pointer rotate-[2deg] hover:rotate-0 hover:scale-108 text-[#1A130E] ${
                  isOrbitHighlighted('openai')
                    ? 'skills-floating-tile-active scale-108'
                    : 'skills-floating-tile'
                }`}
                title="OpenAI & Generative AI"
              >
                <OpenAILogo className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
              </div>

              {/* 5. React Tile (Upper-Right Orbit) */}
              <div
                onMouseEnter={() => setHoveredOrbitId('react')}
                onMouseLeave={() => setHoveredOrbitId(null)}
                className={`skills-float-slow absolute left-[72.0%] top-[10.8%] w-[48px] h-[48px] sm:w-[66px] sm:h-[66px] lg:w-[74px] lg:h-[74px] xl:w-[82px] xl:h-[82px] rounded-[15px] sm:rounded-[19px] lg:rounded-[21px] flex items-center justify-center z-30 transition-all duration-300 cursor-pointer rotate-[4deg] hover:rotate-0 hover:scale-108 ${
                  isOrbitHighlighted('react')
                    ? 'skills-floating-tile-active scale-108'
                    : 'skills-floating-tile'
                }`}
                title="React & Frontend Development"
              >
                <ReactLogo className="w-7 h-7 sm:w-10 sm:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12" />
              </div>

              {/* 6. Programming / Code </> Tile (Mid-Right Orbit) */}
              <div
                onMouseEnter={() => setHoveredOrbitId('code')}
                onMouseLeave={() => setHoveredOrbitId(null)}
                className={`skills-float-delayed absolute left-[79.0%] top-[32.5%] w-[45px] h-[45px] sm:w-[62px] sm:h-[62px] lg:w-[70px] lg:h-[70px] xl:w-[78px] xl:h-[78px] rounded-[14px] sm:rounded-[18px] lg:rounded-[20px] flex items-center justify-center z-30 transition-all duration-300 cursor-pointer rotate-[3deg] hover:rotate-0 hover:scale-108 ${
                  isOrbitHighlighted('code')
                    ? 'skills-floating-tile-active scale-108'
                    : 'skills-floating-tile'
                }`}
                title="Programming & Problem Solving"
              >
                <CodeBracketsLogo className="w-6 h-6 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11" />
              </div>

              {/* 7. Database Tile (Lower-Right Orbit) */}
              <div
                onMouseEnter={() => setHoveredOrbitId('database')}
                onMouseLeave={() => setHoveredOrbitId(null)}
                className={`skills-float-medium absolute left-[71.2%] top-[53.5%] w-[44px] h-[44px] sm:w-[60px] sm:h-[60px] lg:w-[66px] lg:h-[66px] xl:w-[74px] xl:h-[74px] rounded-[14px] sm:rounded-[18px] lg:rounded-[20px] flex items-center justify-center z-30 transition-all duration-300 cursor-pointer rotate-[2deg] hover:rotate-0 hover:scale-108 ${
                  isOrbitHighlighted('database')
                    ? 'skills-floating-tile-active scale-108'
                    : 'skills-floating-tile'
                }`}
                title="Database & Data Architecture"
              >
                <DatabaseLogo className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            BOTTOM SECTION: CORE SKILLS & 7 SKILL PILLS
        ==================================================================== */}
        <div className="relative z-30 mt-10 sm:mt-12 lg:mt-6 pt-2">
          {/* CORE SKILLS Label + Horizontal Line */}
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <h3 className="text-[14px] sm:text-[15.5px] uppercase tracking-[0.08em] font-semibold text-[#D95D0D] whitespace-nowrap">
              CORE SKILLS
            </h3>
            <span
              aria-hidden="true"
              className="w-36 sm:w-52 md:w-56 h-[1px] bg-[#DF833E]/80"
            />
          </div>

          {/* 7 Core Skill Pills Row */}
          <div className="flex flex-wrap xl:flex-nowrap items-center justify-start xl:justify-between gap-3 sm:gap-3.5">
            {/* 1. Python */}
            <button
              type="button"
              onMouseEnter={() => {
                setHoveredSkillId('python');
                setHoveredOrbitId('python');
              }}
              onMouseLeave={() => {
                setHoveredSkillId(null);
                setHoveredOrbitId(null);
              }}
              className={`skills-core-pill h-[50px] sm:h-[56px] px-4 sm:px-5 xl:px-5.5 rounded-full inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 ${
                hoveredOrbitId === 'python' ? 'skills-core-pill-active -translate-y-0.5' : ''
              }`}
            >
              <PythonLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="text-[13.5px] sm:text-[14.5px] font-medium text-[#211108] whitespace-nowrap">
                Python
              </span>
            </button>

            {/* 2. Generative AI */}
            <button
              type="button"
              onMouseEnter={() => {
                setHoveredSkillId('genai');
                setHoveredOrbitId('openai');
              }}
              onMouseLeave={() => {
                setHoveredSkillId(null);
                setHoveredOrbitId(null);
              }}
              className={`skills-core-pill h-[50px] sm:h-[56px] px-4 sm:px-5 xl:px-5.5 rounded-full inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 ${
                hoveredOrbitId === 'openai' ? 'skills-core-pill-active -translate-y-0.5' : ''
              }`}
            >
              <OpenAILogo className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A130E] shrink-0" />
              <span className="text-[13.5px] sm:text-[14.5px] font-medium text-[#211108] whitespace-nowrap">
                Generative AI
              </span>
            </button>

            {/* 3. Data Analytics */}
            <button
              type="button"
              onMouseEnter={() => {
                setHoveredSkillId('analytics');
                setHoveredOrbitId('analytics');
              }}
              onMouseLeave={() => {
                setHoveredSkillId(null);
                setHoveredOrbitId(null);
              }}
              className={`skills-core-pill h-[50px] sm:h-[56px] px-4 sm:px-5 xl:px-5.5 rounded-full inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 ${
                hoveredOrbitId === 'analytics' ? 'skills-core-pill-active -translate-y-0.5' : ''
              }`}
            >
              <AnalyticsBarsLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="text-[13.5px] sm:text-[14.5px] font-medium text-[#211108] whitespace-nowrap">
                Data Analytics
              </span>
            </button>

            {/* 4. Frontend Development */}
            <button
              type="button"
              onMouseEnter={() => {
                setHoveredSkillId('frontend');
                setHoveredOrbitId('react');
              }}
              onMouseLeave={() => {
                setHoveredSkillId(null);
                setHoveredOrbitId(null);
              }}
              className={`skills-core-pill h-[50px] sm:h-[56px] px-4 sm:px-5 xl:px-5.5 rounded-full inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 ${
                hoveredOrbitId === 'react' ? 'skills-core-pill-active -translate-y-0.5' : ''
              }`}
            >
              <CodeBracketsLogo
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                color="#E56812"
              />
              <span className="text-[13.5px] sm:text-[14.5px] font-medium text-[#211108] whitespace-nowrap">
                Frontend Development
              </span>
            </button>

            {/* 5. Problem Solving */}
            <button
              type="button"
              onMouseEnter={() => {
                setHoveredSkillId('problem-solving');
                setHoveredOrbitId('code');
              }}
              onMouseLeave={() => {
                setHoveredSkillId(null);
                setHoveredOrbitId(null);
              }}
              className={`skills-core-pill h-[50px] sm:h-[56px] px-4 sm:px-5 xl:px-5.5 rounded-full inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 ${
                hoveredOrbitId === 'code' ? 'skills-core-pill-active -translate-y-0.5' : ''
              }`}
            >
              {/* Glowing Orange Lightbulb Icon */}
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#E56812] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2zm-2 18h4v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1z" />
              </svg>
              <span className="text-[13.5px] sm:text-[14.5px] font-medium text-[#211108] whitespace-nowrap">
                Problem Solving
              </span>
            </button>

            {/* 6. Remote Sensing */}
            <button
              type="button"
              onMouseEnter={() => {
                setHoveredSkillId('remote-sensing');
                setHoveredOrbitId('aws');
              }}
              onMouseLeave={() => {
                setHoveredSkillId(null);
                setHoveredOrbitId(null);
              }}
              className={`skills-core-pill h-[50px] sm:h-[56px] px-4 sm:px-5 xl:px-5.5 rounded-full inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 ${
                hoveredOrbitId === 'aws' ? 'skills-core-pill-active -translate-y-0.5' : ''
              }`}
            >
              {/* Orange Satellite Icon */}
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#E56812] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M13 7 9 3 5 7l4 4" />
                <path d="m17 11 4 4-4 4-4-4" />
                <path d="m8 12 4 4 6-6-4-4Z" />
                <path d="m16 8 3-3" />
                <path d="M9 21a6 6 0 0 0-6-6" />
              </svg>
              <span className="text-[13.5px] sm:text-[14.5px] font-medium text-[#211108] whitespace-nowrap">
                Remote Sensing
              </span>
            </button>

            {/* 7. Business Analysis */}
            <button
              type="button"
              onMouseEnter={() => {
                setHoveredSkillId('business-analysis');
                setHoveredOrbitId('database');
              }}
              onMouseLeave={() => {
                setHoveredSkillId(null);
                setHoveredOrbitId(null);
              }}
              className={`skills-core-pill h-[50px] sm:h-[56px] px-4 sm:px-5 xl:px-5.5 rounded-full inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 ${
                hoveredOrbitId === 'database' ? 'skills-core-pill-active -translate-y-0.5' : ''
              }`}
            >
              {/* Orange Briefcase Icon */}
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#E56812] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9 3a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v4h8v-1h4v1h8V8a2 2 0 0 0-2-2h-3V5a2 2 0 0 0-2-2H9zm0 3V5h6v1H9zm5 8v1h-4v-1H2v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5h-8z" />
              </svg>
              <span className="text-[13.5px] sm:text-[14.5px] font-medium text-[#211108] whitespace-nowrap">
                Business Analysis
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
