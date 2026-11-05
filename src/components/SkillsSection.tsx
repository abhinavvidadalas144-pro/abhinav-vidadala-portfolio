import React, { useState } from 'react';

interface SkillItem {
  name: string;
  tag: string;
  detail: string;
}

interface CapabilityCategory {
  id: 'development' | 'ai' | 'data' | 'business';
  number: string;
  kicker: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  {
    id: 'development',
    number: '01',
    kicker: '01 — DEVELOPMENT',
    title: 'Software & Systems Architecture',
    subtitle:
      'Clean, maintainable codebases engineered from relational foundations to responsive interfaces.',
    skills: [
      {
        name: 'Python',
        tag: 'Core Language',
        detail: 'Automation, backend pipelines, scripting & algorithmic implementation',
      },
      {
        name: 'Frontend Development',
        tag: 'Interface Engineering',
        detail: 'Responsive web architecture, semantic DOM systems & interactive UI',
      },
      {
        name: 'Database Management Systems (DBMS)',
        tag: 'Data Architecture',
        detail: 'Relational schema design, indexing, query optimization & data integrity',
      },
      {
        name: 'Problem Solving',
        tag: 'Algorithmic Logic',
        detail: 'First-principles decomposition, edge-case hardening & complexity reduction',
      },
    ],
  },
  {
    id: 'ai',
    number: '02',
    kicker: '02 — ARTIFICIAL INTELLIGENCE',
    title: 'Applied & Generative Intelligence',
    subtitle:
      'Precision prompt architectures and human-in-the-loop workflows that turn foundation models into reliable systems.',
    skills: [
      {
        name: 'Generative AI',
        tag: 'Foundation Models',
        detail: 'Multimodal synthesis, LLM orchestration & structured output pipelines',
      },
      {
        name: 'Prompt Engineering',
        tag: 'Reasoning Design',
        detail: 'Zero-hallucination system constraints, chain-of-thought & adversarial evaluation',
      },
      {
        name: 'AI Tools & Productivity',
        tag: 'Workflow Acceleration',
        detail: 'Custom agentic toolchains, rapid prototyping & research synthesis',
      },
      {
        name: 'AI-assisted Development',
        tag: 'Augmented Engineering',
        detail: 'Accelerated full-stack iteration, automated testing & code verification',
      },
    ],
  },
  {
    id: 'data',
    number: '03',
    kicker: '03 — DATA & ANALYTICS',
    title: 'Analytical Intelligence & Storytelling',
    subtitle:
      'Distilling complex, high-dimensional datasets into clear statistical patterns and decisive narratives.',
    skills: [
      {
        name: 'Data Analysis',
        tag: 'Quantitative Inquiry',
        detail: 'Statistical cleansing, hypothesis testing & structured pattern extraction',
      },
      {
        name: 'Exploratory Data Analysis (EDA)',
        tag: 'Signal Discovery',
        detail: 'Distribution profiling, anomaly detection & feature correlation mapping',
      },
      {
        name: 'Data Visualization',
        tag: 'Visual Encoding',
        detail: 'High-clarity graphical representation of multi-variable relationships',
      },
      {
        name: 'Predictive Analytics',
        tag: 'Forward Modeling',
        detail: 'Trend forecasting, regression analysis & scenario estimation',
      },
      {
        name: 'Data Storytelling',
        tag: 'Executive Synthesis',
        detail: 'Translating raw analytical findings into persuasive strategic decisions',
      },
    ],
  },
  {
    id: 'business',
    number: '04',
    kicker: '04 — BUSINESS & RESEARCH',
    title: 'Strategy, Risk & Spatial Research',
    subtitle:
      'Bridging technical execution with operational process design, risk modeling and geospatial observation.',
    skills: [
      {
        name: 'Business Analysis',
        tag: 'Requirements & Value',
        detail: 'Stakeholder alignment, system specification & operational feasibility',
      },
      {
        name: 'Business Process Management',
        tag: 'Workflow Optimization',
        detail: 'End-to-end process mapping, bottleneck elimination & lifecycle governance',
      },
      {
        name: 'Investment Risk Management',
        tag: 'Exposure & Downside',
        detail: 'Portfolio sensitivity evaluation, variance analysis & risk mitigation',
      },
      {
        name: 'Remote Sensing',
        tag: 'Earth & Spatial Data',
        detail: 'Satellite imagery interpretation, spectral indices & geospatial analysis',
      },
      {
        name: 'Technology Research',
        tag: 'Frontier Evaluation',
        detail: 'Literature synthesis, benchmark comparison & emerging tech assessment',
      },
    ],
  },
];

const CORE_STRENGTHS = [
  {
    index: 'I',
    title: 'Critical Thinking',
    descriptor: 'First-principles evaluation & structured inquiry',
  },
  {
    index: 'II',
    title: 'Communication',
    descriptor: 'Articulating complex technical systems with clarity',
  },
  {
    index: 'III',
    title: 'Presentation Skills',
    descriptor: 'Compelling stage presence & visual narrative delivery',
  },
  {
    index: 'IV',
    title: 'Research',
    descriptor: 'Rigorous methodology & synthesis across domains',
  },
  {
    index: 'V',
    title: 'Team Collaboration',
    descriptor: 'Cross-functional synergy under high-stakes deadlines',
  },
];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CapabilityCategory['id']>('development');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>('Python');

  return (
    <section
      id="skills"
      aria-label="Skills and Tech Stack"
      className="relative w-full skills-universe-bg text-[#FFFDF9] overflow-hidden select-none border-t border-[#E6AE5C]/20"
    >
      {/* =====================================================================
          ATMOSPHERIC STUDIO LIGHTING & FINE ARCHITECTURAL CONTOURS
      ====================================================================== */}
      {/* Dynamic ambient golden spotlight that shifts smoothly with active category */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute w-[760px] h-[760px] rounded-full blur-[130px] transition-all duration-700 ease-out opacity-45 ${
          activeCategory === 'development'
            ? 'top-[12%] left-[6%] bg-[radial-gradient(circle,#F59E1D_0%,#B83B06_55%,transparent_75%)]'
            : activeCategory === 'ai'
            ? 'top-[12%] left-[48%] bg-[radial-gradient(circle,#FAD17A_0%,#D96B0C_52%,transparent_75%)]'
            : activeCategory === 'data'
            ? 'top-[48%] left-[8%] bg-[radial-gradient(circle,#F59E1D_0%,#A63405_55%,transparent_75%)]'
            : 'top-[48%] left-[50%] bg-[radial-gradient(circle,#FAD17A_0%,#C84E09_55%,transparent_75%)]'
        }`}
      />

      {/* Restrained abstract studio horizon waves & fine golden meridian contours */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 1300"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-55"
      >
        <defs>
          <linearGradient id="skillsGoldRibbon1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E6AE5C" stopOpacity="0" />
            <stop offset="28%" stopColor="#FAD17A" stopOpacity="0.34" />
            <stop offset="68%" stopColor="#F59E2D" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#E6AE5C" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="skillsGoldRibbon2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#E6AE5C" stopOpacity="0" />
            <stop offset="35%" stopColor="#F59E2D" stopOpacity="0.24" />
            <stop offset="75%" stopColor="#FAD17A" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#E6AE5C" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="skillsSunGlow" cx="84%" cy="14%" r="48%">
            <stop offset="0%" stopColor="#FAD17A" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#D96B0C" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3B0D01" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle warm upper-right atmospheric glow */}
        <rect width="1600" height="1300" fill="url(#skillsSunGlow)" />

        {/* Sweeping fine golden contour lines connecting the composition */}
        <path
          d="M-120 260 C 340 160, 720 350, 1720 190"
          stroke="url(#skillsGoldRibbon1)"
          strokeWidth="1.2"
        />
        <path
          d="M-120 278 C 360 182, 740 368, 1720 212"
          stroke="url(#skillsGoldRibbon1)"
          strokeWidth="0.6"
          strokeDasharray="3 6"
        />
        <path
          d="M-100 1040 C 480 940, 1020 1130, 1700 980"
          stroke="url(#skillsGoldRibbon2)"
          strokeWidth="1.2"
        />
      </svg>

      {/* =====================================================================
          MAIN EDITORIAL CONTAINER
      ====================================================================== */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-20 sm:pt-28 pb-20 sm:pb-28 select-text">
        {/* -------------------------------------------------------------------
            SECTION 3 EDITORIAL HEADER
        -------------------------------------------------------------------- */}
        <header className="max-w-[920px] mb-16 sm:mb-24">
          {/* Small section identifier: 03 — MY CAPABILITIES */}
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[11.5px] sm:text-[13px] uppercase tracking-[0.22em] text-[#E6AE5C] font-medium whitespace-nowrap">
              03 — MY CAPABILITIES
            </span>
            <span
              aria-hidden="true"
              className="w-24 sm:w-32 h-[1px] bg-gradient-to-r from-[#E6AE5C]/70 to-transparent"
            />
          </div>

          {/* Main Editorial Serif Heading */}
          <h2 className="font-serif-editorial font-normal text-[#FFFDF9] text-[40px] sm:text-[56px] lg:text-[68px] xl:text-[74px] leading-[1.05] tracking-[-0.015em] drop-shadow-[0_4px_24px_rgba(35,6,0,0.5)]">
            What I Bring <span className="about-gold-text">to the Table.</span>
          </h2>

          {/* Supporting Description */}
          <p className="mt-6 text-[15.5px] sm:text-[17.5px] lg:text-[19px] leading-[1.58] text-[#FBEAD6]/85 font-normal max-w-[680px]">
            A combination of technology, creativity and analytical thinking — turning ideas into
            meaningful solutions.
          </p>
        </header>

        {/* -------------------------------------------------------------------
            FOUR CAPABILITY DOMAINS — CONTINUOUS ARCHITECTURAL 2x2 LEDGER
            (No boxed cards; separated strictly by 1px golden hairlines & space)
        -------------------------------------------------------------------- */}
        <div className="relative border-t border-b border-[#E6AE5C]/25">
          {/* Central Vertical Hairline Divider on Desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-[#E6AE5C]/30 via-[#E6AE5C]/22 to-[#E6AE5C]/30 pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {CAPABILITY_CATEGORIES.map((category, catIdx) => {
              const isCategoryActive = activeCategory === category.id;
              const isTopRow = catIdx < 2;
              const isLeftCol = catIdx % 2 === 0;

              return (
                <div
                  key={category.id}
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onFocus={() => setActiveCategory(category.id)}
                  className={`group relative flex flex-col justify-between py-12 sm:py-16 transition-colors duration-500 ${
                    isLeftCol ? 'lg:pr-14 xl:pr-18' : 'lg:pl-14 xl:pl-18'
                  } ${
                    !isTopRow ? 'border-t border-[#E6AE5C]/22' : ''
                  } ${
                    catIdx === 1 ? 'border-t lg:border-t-0 border-[#E6AE5C]/22' : ''
                  }`}
                >
                  {/* Top Active Golden Illumination Line */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute top-0 ${
                      isLeftCol ? 'left-0 right-0 lg:right-14' : 'left-0 lg:left-14 right-0'
                    } h-[2px] bg-gradient-to-r from-[#FAD17A] via-[#F59E2D] to-transparent transition-opacity duration-500 ${
                      isCategoryActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-65'
                    }`}
                  />

                  {/* Subtle Ambient Warm Glow Inside Active Quadrant (No border box) */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                      isCategoryActive ? 'opacity-100' : 'opacity-0'
                    } bg-[radial-gradient(ellipse_75%_65%_at_50%_28%,rgba(245,158,45,0.09)_0%,transparent_75%)]`}
                  />

                  {/* CATEGORY TOP HEADER + BESPOKE DOMAIN ARTWORK */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        {/* Kicker */}
                        <div className="flex items-center gap-3">
                          <span
                            className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              isCategoryActive
                                ? 'bg-[#FAD17A] shadow-[0_0_10px_#FAD17A] scale-125'
                                : 'bg-[#E6AE5C]/45'
                            }`}
                          />
                          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#E6AE5C] font-medium">
                            {category.kicker}
                          </span>
                        </div>

                        {/* Category Editorial Title */}
                        <h3 className="mt-3 font-serif-editorial font-normal text-[28px] sm:text-[34px] xl:text-[38px] leading-[1.12] tracking-[-0.01em] text-[#FFFDF9]">
                          {category.title}
                        </h3>
                      </div>

                      {/* BESPOKE CATEGORY VISUAL EMBLEM / TECHNICAL COMPOSITION */}
                      <div className="shrink-0 pt-1">
                        {category.id === 'development' && (
                          <DevelopmentVisual isActive={isCategoryActive} />
                        )}
                        {category.id === 'ai' && <AIVisual isActive={isCategoryActive} />}
                        {category.id === 'data' && <DataVisual isActive={isCategoryActive} />}
                        {category.id === 'business' && (
                          <BusinessVisual isActive={isCategoryActive} />
                        )}
                      </div>
                    </div>

                    {/* Category Subtitle */}
                    <p className="mt-3.5 text-[14px] sm:text-[15px] leading-[1.55] text-[#FBEAD6]/75 max-w-[520px]">
                      {category.subtitle}
                    </p>

                    {/* Authentic Technology Marks Strip for Development & AI */}
                    {category.id === 'development' && (
                      <div className="mt-6 flex flex-wrap items-center gap-6 pt-1 text-[#FAD17A]/85">
                        {/* Authentic Python Emblem */}
                        <div className="flex items-center gap-2 text-[11.5px] tracking-[0.06em] uppercase text-[#FBEAD6]/80">
                          <PythonLogo className="w-4 h-4 text-[#FAD17A]" />
                          <span>Python 3</span>
                        </div>
                        <span aria-hidden="true" className="text-[#E6AE5C]/30">
                          /
                        </span>
                        {/* Authentic HTML5 / Frontend Mark */}
                        <div className="flex items-center gap-2 text-[11.5px] tracking-[0.06em] uppercase text-[#FBEAD6]/80">
                          <FrontendLogo className="w-4 h-4 text-[#FAD17A]" />
                          <span>HTML5 · CSS3 · React</span>
                        </div>
                        <span aria-hidden="true" className="text-[#E6AE5C]/30">
                          /
                        </span>
                        {/* Authentic SQL / DBMS Mark */}
                        <div className="flex items-center gap-2 text-[11.5px] tracking-[0.06em] uppercase text-[#FBEAD6]/80">
                          <DatabaseLogo className="w-4 h-4 text-[#FAD17A]" />
                          <span>SQL &amp; Relational DBMS</span>
                        </div>
                      </div>
                    )}

                    {category.id === 'ai' && (
                      <div className="mt-6 flex flex-wrap items-center gap-5 pt-1 text-[11.5px] tracking-[0.06em] uppercase text-[#FBEAD6]/80">
                        <span className="inline-flex items-center gap-2">
                          <SparkNodeIcon className="w-4 h-4 text-[#FAD17A]" />
                          <span>LLM Architecture</span>
                        </span>
                        <span aria-hidden="true" className="text-[#E6AE5C]/30">
                          /
                        </span>
                        <span>System Prompting</span>
                        <span aria-hidden="true" className="text-[#E6AE5C]/30">
                          /
                        </span>
                        <span>Agentic Workflows</span>
                      </div>
                    )}

                    {category.id === 'data' && (
                      <div className="mt-6 flex flex-wrap items-center gap-5 pt-1 text-[11.5px] tracking-[0.06em] uppercase text-[#FBEAD6]/80">
                        <span className="inline-flex items-center gap-2">
                          <AnalyticsWaveIcon className="w-4 h-4 text-[#FAD17A]" />
                          <span>Statistical Modeling</span>
                        </span>
                        <span aria-hidden="true" className="text-[#E6AE5C]/30">
                          /
                        </span>
                        <span>Visual Encoding</span>
                        <span aria-hidden="true" className="text-[#E6AE5C]/30">
                          /
                        </span>
                        <span>Forecasting</span>
                      </div>
                    )}

                    {category.id === 'business' && (
                      <div className="mt-6 flex flex-wrap items-center gap-5 pt-1 text-[11.5px] tracking-[0.06em] uppercase text-[#FBEAD6]/80">
                        <span className="inline-flex items-center gap-2">
                          <OrbitalGlobeIcon className="w-4 h-4 text-[#FAD17A]" />
                          <span>Process Strategy</span>
                        </span>
                        <span aria-hidden="true" className="text-[#E6AE5C]/30">
                          /
                        </span>
                        <span>Risk Quantitative</span>
                        <span aria-hidden="true" className="text-[#E6AE5C]/30">
                          /
                        </span>
                        <span>Earth Observation</span>
                      </div>
                    )}
                  </div>

                  {/* INTERACTIVE SKILL LIST (Editorial typographic rows, no cards) */}
                  <ul className="relative z-10 mt-9 divide-y divide-[#E6AE5C]/15 border-t border-[#E6AE5C]/15">
                    {category.skills.map((skill, sIdx) => {
                      const isSkillHovered = hoveredSkill === skill.name;
                      return (
                        <li key={skill.name}>
                          <button
                            type="button"
                            onMouseEnter={() => {
                              setActiveCategory(category.id);
                              setHoveredSkill(skill.name);
                            }}
                            onFocus={() => {
                              setActiveCategory(category.id);
                              setHoveredSkill(skill.name);
                            }}
                            onClick={() => {
                              setActiveCategory(category.id);
                              setHoveredSkill(skill.name);
                            }}
                            className="w-full py-4 text-left flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-4 transition-all duration-300 cursor-pointer group/skill focus-visible:outline-none"
                          >
                            <div className="flex items-baseline gap-3.5">
                              <span
                                className={`font-mono text-[11px] tracking-[0.08em] transition-colors duration-300 ${
                                  isSkillHovered
                                    ? 'text-[#FAD17A]'
                                    : 'text-[#E6AE5C]/45 group-hover/skill:text-[#E6AE5C]/80'
                                }`}
                              >
                                {category.number}.0{sIdx + 1}
                              </span>
                              <span
                                className={`font-display text-[17.5px] sm:text-[19px] tracking-[-0.01em] transition-all duration-300 ${
                                  isSkillHovered
                                    ? 'text-[#FFFDF9] font-medium translate-x-1'
                                    : 'text-[#FBEAD6]/90 font-normal group-hover/skill:text-[#FFFDF9] group-hover/skill:translate-x-1'
                                }`}
                              >
                                {skill.name}
                              </span>
                            </div>

                            <div className="flex items-center gap-3 pl-8 sm:pl-0">
                              <span
                                className={`text-[12px] tracking-[0.04em] transition-colors duration-300 ${
                                  isSkillHovered
                                    ? 'text-[#FAD17A]'
                                    : 'text-[#FBEAD6]/50 group-hover/skill:text-[#FBEAD6]/80'
                                }`}
                              >
                                {skill.tag}
                              </span>
                              <span
                                aria-hidden="true"
                                className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                  isSkillHovered
                                    ? 'bg-[#FAD17A] shadow-[0_0_8px_#FAD17A] scale-110'
                                    : 'bg-[#E6AE5C]/25 group-hover/skill:bg-[#E6AE5C]/65'
                                }`}
                              />
                            </div>
                          </button>

                          {/* Subtle Expandable Editorial Micro-Note for Active Skill */}
                          <div
                            className={`overflow-hidden transition-all duration-300 pl-8 pr-2 ${
                              isSkillHovered ? 'max-h-14 pb-3.5 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="text-[13px] leading-[1.45] text-[#FBEAD6]/75">
                              {skill.detail}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* -------------------------------------------------------------------
            5. CORE STRENGTHS — SUBTLE EDITORIAL TYPOGRAPHIC LEDGER
            (No cards, no boxes; refined typography & fine golden separators)
        -------------------------------------------------------------------- */}
        <div className="mt-18 sm:mt-24 pt-2">
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <span className="text-[11.5px] sm:text-[12.5px] uppercase tracking-[0.22em] text-[#E6AE5C] font-medium whitespace-nowrap">
              CORE STRENGTHS
            </span>
            <span
              aria-hidden="true"
              className="flex-1 h-[1px] bg-gradient-to-r from-[#E6AE5C]/45 via-[#E6AE5C]/15 to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 lg:gap-y-0">
            {CORE_STRENGTHS.map((strength, idx) => (
              <div
                key={strength.title}
                className={`group flex flex-col justify-between ${
                  idx > 0 ? 'lg:border-l lg:border-[#E6AE5C]/22 lg:pl-7 xl:pl-8' : ''
                } ${idx < CORE_STRENGTHS.length - 1 ? 'lg:pr-6' : ''}`}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="font-serif-editorial italic text-[13px] text-[#FAD17A]/85">
                      {strength.index}.
                    </span>
                    <span
                      aria-hidden="true"
                      className="w-4 h-[1px] bg-[#E6AE5C]/40 transition-all duration-300 group-hover:w-7 group-hover:bg-[#FAD17A]"
                    />
                  </div>
                  <h4 className="font-serif-editorial font-normal text-[21px] sm:text-[22px] xl:text-[23px] text-[#FFFDF9] leading-[1.2] tracking-[-0.01em] transition-colors duration-300 group-hover:text-[#FAD17A]">
                    {strength.title}
                  </h4>
                </div>
                <p className="mt-2 text-[12.5px] sm:text-[13px] leading-[1.48] text-[#FBEAD6]/68 font-normal">
                  {strength.descriptor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   AUTHENTIC MONOCHROME TECHNOLOGY SYMBOLS & BESPOKE EDITORIAL ILLUSTRATIONS
============================================================================ */

const PythonLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.914 0zm-3.2 1.85a1.046 1.046 0 1 1 0 2.092 1.046 1.046 0 0 1 0-2.092z" />
    <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.451s-3.24-.052-3.24 3.148v5.292S5.72 24 12.086 24zm3.2-1.85a1.046 1.046 0 1 1 0-2.092 1.046 1.046 0 0 1 0 2.092z" />
  </svg>
);

const FrontendLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const DatabaseLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </svg>
);

const SparkNodeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const AnalyticsWaveIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 3v18h18" />
    <path d="M7 15c2.5-5 4.5-5 7-1s4-6 6-8" />
  </svg>
);

const OrbitalGlobeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

/* ----------------------------------------------------------------------------
   CATEGORY 01 VISUAL: Refined Coding & Syntax Architecture Geometry
----------------------------------------------------------------------------- */
const DevelopmentVisual: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <svg
    viewBox="0 0 120 76"
    fill="none"
    className={`w-24 sm:w-28 h-16 transition-all duration-500 ${
      isActive ? 'opacity-100 scale-105' : 'opacity-65'
    }`}
    aria-hidden="true"
  >
    {/* Subtle terminal coordinate frame lines */}
    <line x1="8" y1="14" x2="112" y2="14" stroke="#E6AE5C" strokeOpacity="0.3" strokeWidth="1" />
    <circle cx="14" cy="9" r="1.5" fill="#FAD17A" fillOpacity="0.8" />
    <circle cx="21" cy="9" r="1.5" fill="#E6AE5C" fillOpacity="0.5" />
    <circle cx="28" cy="9" r="1.5" fill="#E6AE5C" fillOpacity="0.3" />
    {/* Code structure indents & algorithmic tree */}
    <path
      d="M20 30 L12 38 L20 46"
      stroke="#FAD17A"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 30 L50 38 L42 46"
      stroke="#FAD17A"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="34"
      y1="28"
      x2="28"
      y2="48"
      stroke="#F59E2D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Relational node graph */}
    <circle cx="76" cy="28" r="4" stroke="#FAD17A" strokeWidth="1.4" />
    <circle cx="102" cy="28" r="4" stroke="#E6AE5C" strokeOpacity="0.7" strokeWidth="1.4" />
    <circle cx="89" cy="50" r="4.5" fill="#FAD17A" fillOpacity="0.25" stroke="#FAD17A" strokeWidth="1.4" />
    <line x1="80" y1="28" x2="98" y2="28" stroke="#E6AE5C" strokeOpacity="0.5" strokeWidth="1.1" />
    <line x1="78" y1="32" x2="87" y2="46" stroke="#FAD17A" strokeOpacity="0.7" strokeWidth="1.1" />
    <line x1="100" y1="32" x2="91" y2="46" stroke="#E6AE5C" strokeOpacity="0.5" strokeWidth="1.1" />
    <line x1="12" y1="62" x2="68" y2="62" stroke="#E6AE5C" strokeOpacity="0.35" strokeWidth="1" />
    <line x1="76" y1="62" x2="106" y2="62" stroke="#FAD17A" strokeOpacity="0.7" strokeWidth="1.5" />
  </svg>
);

/* ----------------------------------------------------------------------------
   CATEGORY 02 VISUAL: Abstract Intelligence & Prompt Reasoning Constellation
----------------------------------------------------------------------------- */
const AIVisual: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <svg
    viewBox="0 0 120 76"
    fill="none"
    className={`w-24 sm:w-28 h-16 transition-all duration-500 ${
      isActive ? 'opacity-100 scale-105' : 'opacity-65'
    }`}
    aria-hidden="true"
  >
    {/* Concentric intelligence illumination arcs */}
    <circle
      cx="60"
      cy="38"
      r="28"
      stroke="#E6AE5C"
      strokeOpacity="0.28"
      strokeWidth="1"
      strokeDasharray="3 4"
    />
    <circle cx="60" cy="38" r="17" stroke="#FAD17A" strokeOpacity="0.5" strokeWidth="1.1" />
    {/* Neural / Prompt convergence curves */}
    <path
      d="M12 22 C 32 22, 42 38, 60 38 C 78 38, 88 20, 108 20"
      stroke="#FAD17A"
      strokeOpacity="0.75"
      strokeWidth="1.3"
    />
    <path
      d="M12 54 C 32 54, 42 38, 60 38 C 78 38, 88 56, 108 56"
      stroke="#F59E2D"
      strokeOpacity="0.65"
      strokeWidth="1.2"
    />
    {/* Central golden intelligence core */}
    <circle cx="60" cy="38" r="4.5" fill="#FAD17A" />
    <circle cx="14" cy="22" r="2.5" fill="#E6AE5C" />
    <circle cx="14" cy="54" r="2.5" fill="#E6AE5C" />
    <circle cx="106" cy="20" r="2.5" fill="#FAD17A" />
    <circle cx="106" cy="56" r="2.5" fill="#FAD17A" />
  </svg>
);

/* ----------------------------------------------------------------------------
   CATEGORY 03 VISUAL: Editorial Analytical Curves & Distribution Geometry
----------------------------------------------------------------------------- */
const DataVisual: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <svg
    viewBox="0 0 120 76"
    fill="none"
    className={`w-24 sm:w-28 h-16 transition-all duration-500 ${
      isActive ? 'opacity-100 scale-105' : 'opacity-65'
    }`}
    aria-hidden="true"
  >
    {/* Subtle baseline & vertical reference */}
    <line x1="10" y1="62" x2="112" y2="62" stroke="#E6AE5C" strokeOpacity="0.35" strokeWidth="1" />
    <line x1="28" y1="14" x2="28" y2="62" stroke="#E6AE5C" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 3" />
    <line x1="64" y1="14" x2="64" y2="62" stroke="#E6AE5C" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 3" />
    <line x1="96" y1="14" x2="96" y2="62" stroke="#FAD17A" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 3" />
    {/* Smooth analytical distribution & trend curve */}
    <path
      d="M10 56 C 26 54, 34 32, 48 36 C 62 40, 76 16, 96 18 C 104 19, 108 24, 112 22"
      stroke="#FAD17A"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Secondary harmonic curve */}
    <path
      d="M10 60 C 30 58, 44 48, 64 44 C 82 40, 94 30, 112 32"
      stroke="#F59E2D"
      strokeOpacity="0.55"
      strokeWidth="1.1"
    />
    {/* Inflection observation points */}
    <circle cx="48" cy="36" r="2.8" fill="#3B0D01" stroke="#FAD17A" strokeWidth="1.5" />
    <circle cx="96" cy="18" r="3.5" fill="#FAD17A" />
  </svg>
);

/* ----------------------------------------------------------------------------
   CATEGORY 04 VISUAL: Orbital Meridian & Strategic Research Geometry
----------------------------------------------------------------------------- */
const BusinessVisual: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <svg
    viewBox="0 0 120 76"
    fill="none"
    className={`w-24 sm:w-28 h-16 transition-all duration-500 ${
      isActive ? 'opacity-100 scale-105' : 'opacity-65'
    }`}
    aria-hidden="true"
  >
    {/* Tilted orbital ellipse (Remote sensing & global research) */}
    <ellipse
      cx="60"
      cy="38"
      rx="44"
      ry="16"
      transform="rotate(-16 60 38)"
      stroke="#FAD17A"
      strokeOpacity="0.7"
      strokeWidth="1.3"
    />
    <ellipse
      cx="60"
      cy="38"
      rx="44"
      ry="16"
      transform="rotate(20 60 38)"
      stroke="#E6AE5C"
      strokeOpacity="0.35"
      strokeWidth="1"
      strokeDasharray="3 4"
    />
    {/* Central meridian sphere */}
    <circle cx="60" cy="38" r="15" stroke="#FAD17A" strokeOpacity="0.55" strokeWidth="1.2" />
    <line x1="38" y1="38" x2="82" y2="38" stroke="#E6AE5C" strokeOpacity="0.35" strokeWidth="1" />
    <line x1="60" y1="16" x2="60" y2="60" stroke="#E6AE5C" strokeOpacity="0.35" strokeWidth="1" />
    {/* Satellite / Orbital research node */}
    <circle cx="100" cy="26" r="3.2" fill="#FAD17A" />
    <circle cx="20" cy="50" r="2.4" fill="#F59E2D" />
  </svg>
);
