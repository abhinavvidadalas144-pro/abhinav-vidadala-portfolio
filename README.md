# Abhinav Sai Vidadala | AI-First Student Builder

## Overview
Personal portfolio of **Abhinav Sai Vidadala**, an AI-First Student Builder and Prompt Engineer with **20+ competitions entered in 2026**, including **Top 3 Winner, CoLab Nation Prompt Engineering Challenge 2026** and **Rank 24, Top 50 of 1000 participants, RankUp Py-Quest**. The site presents Abhinav's competitive AI milestones, personal philosophy, interactive technical capabilities, and a 3D editorial showcase of nine real software and AI projects.

## Creative Feature & Interactive Waypoints
- **Hero Hint & Milestone Navigation**: In **Section 1 (Hero)**, the primary CTA button (`See my work`) smoothly scrolls visitors to the Projects showcase (`#projects`), while the top navigation bar smoothly scrolls to `#about`, `#skills`, `#achievements`, `#projects`, and `#contact-links` without blocking page scroll or keyboard navigation.
- **Interactive Orbital Capability Waypoints (Section 3 — Skills & Tech Stack)**: Visitors can explore seven floating 3D technology waypoints (`AWS`, `Data Analytics`, `Python`, `OpenAI`, `React`, `Programming </>`, and `Database`) using **mouse hover**, **touch tap**, or **keyboard navigation** (`Tab`, `Enter`, `Space`) with `aria-pressed` state synchronization, while the seven Core Skill badges cross-highlight their linked orbital waypoint on hover.
- **Interactive 3D Project Carousel & Case Study Modals (Section 4 — Projects)**: Visitors can cycle through all nine projects in 3D perspective using the carousel controls (`←` / `→`), click or press `Enter`/`Space` on any floating card to open its full case study modal (with focus management, focus trapping, `Escape` closing, and verified live demo / GitHub repository links), or open the complete filterable project archive via `View All Projects`.

## AWS Services Used
- **AWS Amplify Hosting** (static web hosting and continuous deployment from GitHub).

## Architecture
`GitHub repository -> AWS Amplify Hosting -> live URL`

## How to Run Locally
1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```
2. **Start the local development server (runs on port 3000):**
   ```bash
   npm run dev
   ```
3. **Create a production build (outputs static assets to `dist/`):**
   ```bash
   npm run build
   ```

## Portfolio Sections
1. **Section 1 — Hero (`#hero` / `#achievements` / `#contact-links`)**: Full-bleed studio portrait, headline (`"I build with AI, then compete to prove it."`), competitive achievement stat cards (`Top 3` CoLab Nation Winner and `20+` Hackathons in 2026), and personal motto card (`"Curiosity starts the journey. Building turns it into impact."`).
2. **Section 2 — About Me & My Journey (`#about` / `#my-journey`)**: Editorial introduction (`"More than just code."`), personal builder philosophy (`"Curiosity drives me. Building defines me."`), and core identity highlights (`Developer`, `AI Explorer`, `Problem Solver`).
3. **Section 3 — Skills & Tech Stack (`#skills`)**: 3D laptop centerpiece with seven interactive orbital technology waypoints (`Python`, `OpenAI`, `React`, `Code`, `Database`, `Data Analytics`, `AWS`) linked to seven Core Skill badges.
4. **Section 4 — Projects (`#projects`)**: Editorial 3D floating project gallery (`"Turning Ideas into Impact."`) showcasing nine real projects (**SpeakPR**, **BioScout**, **BrightLoop**, **ThreadBack**, **Netra**, **Smart Bharat AI**, **DecisIQ**, **TruthRX AI**, and **NeuroFlux Website**) with interactive case-study modals and archive filtering.
