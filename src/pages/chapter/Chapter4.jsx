// src/pages/chapter/Chapter4.jsx
// Tailwind v2/v3 friendly. Simple English. Overview + key points + short paras + checklist + self‑reflection.

import React from "react";

const chips = [
  "Portfolio types",
  "PEAKS",
  "Master vs Targeted",
  "Organization",
  "Assessment portfolio",
  "Reflection (WSN)",
  "Platforms",
];

function Chip({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-200 bg-emerald-50 text-emerald-900">
      <span className="h-2 w-2 rounded-full bg-emerald-500" />
      {label}
    </span>
  );
}

function SectionCard({ title, tone = "emerald", children }) {
  const tones = {
    emerald: { wrap: "border-emerald-200 bg-emerald-50/70", title: "text-emerald-900" },
    cyan: { wrap: "border-cyan-200 bg-cyan-50/70", title: "text-cyan-900" },
    amber: { wrap: "border-amber-200 bg-amber-50/70", title: "text-amber-900" },
    slate: { wrap: "border-slate-200 bg-white", title: "text-slate-900" },
    violet: { wrap: "border-violet-200 bg-violet-50/70", title: "text-violet-900" },
  };
  const t = tones[tone] || tones.slate;
  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter4Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 04</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Portfolio Management</h1>
        <p className="mt-2 text-slate-600">Build a portfolio that presents the real you, organized clearly, and tailored to your goals.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* What a portfolio is */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What is a portfolio?">
          <p>It is a presentation of yourself — a place to organize who you are, what you can do, and what you have achieved. It should reflect the <span className="font-semibold">real you</span>.</p>
        </SectionCard>
        <SectionCard tone="emerald" title="Why keep one?">
          <ul className="list-disc pl-5 space-y-1">
            <li>Draw attention and add credibility with proof.</li>
            <li>Make intangibles (like teamwork or leadership) visible.</li>
            <li>Build confidence and open links to opportunities.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Types & PEAKS */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="amber" title="Types of portfolios">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Personal</span> – creative work, interests, style.</li>
            <li><span className="font-semibold">Career/Dossier</span> – CV, letters, achievements.</li>
            <li><span className="font-semibold">Employment</span> – work samples, evaluations, training.</li>
            <li><span className="font-semibold">Assessment</span> – growth over time for study.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="PEAKS checklist">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">P</span>ersonal characteristics</li>
            <li><span className="font-semibold">E</span>xperience</li>
            <li><span className="font-semibold">A</span>ccomplishments</li>
            <li><span className="font-semibold">K</span>nowledge</li>
            <li><span className="font-semibold">S</span>kills</li>
          </ul>
          <p className="mt-2 text-sm">Keep PEAKS in mind when you collect and select items.</p>
        </SectionCard>
      </div>

      {/* Master vs Targeted */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="slate" title="Master portfolio (your archive)">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Big collection of useful documents (PEAKS‑based).</li>
            <li>Include bio data, people skills, learning skills, self‑management, tasks, community service.</li>
            <li>Recent documents are powerful; note missing items to add later.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="slate" title="Targeted portfolio (for a role)">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Describe the opportunity realistically.</li>
            <li>Identify PEAKS the interviewer wants.</li>
            <li>Select only items that prove you have those PEAKS.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Organizing & After */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="violet" title="Organizing your portfolio">
          <ul className="list-disc pl-5 space-y-1">
            <li>Cover page (name, date, professional photo, address).</li>
            <li>Table of contents and clear divisions.</li>
            <li>Keep it neat, precise, and professional.</li>
            <li>Decorate only after content is organized.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="After you build it">
          <ul className="list-disc pl-5 space-y-1">
            <li>Look back and reflect: what improved, what’s missing?</li>
            <li>Update regularly; keep a carrying case/binder if physical.</li>
            <li>Share evaluation criteria when used for assessment.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Assessment portfolio */}
      <SectionCard tone="amber" title="Assessment portfolio: purpose & advantages">
        <ul className="list-disc pl-5 space-y-1">
          <li>Shows real performance, progress, and responsibility.</li>
          <li>Supports reflective and creative learning.</li>
          <li>Clear evidence for teacher–student collaboration.</li>
          <li>Advantages: shows progress, different learning styles, motivation, meta‑cognition, individual differences, and clear communication.</li>
          <li>Challenges: time‑consuming; high student involvement.</li>
        </ul>
      </SectionCard>

      {/* Reflection model */}
      <SectionCard tone="cyan" title="Reflection model – What? So what? Now what?">
        <ol className="list-decimal pl-5 space-y-1">
          <li><span className="font-semibold">What?</span> Facts: what happened?</li>
          <li><span className="font-semibold">So what?</span> Meaning and feelings: what was learned?</li>
          <li><span className="font-semibold">Now what?</span> Next steps: apply lessons; plan action.</li>
        </ol>
      </SectionCard>

      {/* Platforms */}
      <SectionCard tone="slate" title="Popular platforms for digital portfolios">
        <p className="mb-2">Pick one format and keep it updated.</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>LinkedIn, GitHub Pages (for developers), WordPress, Google Sites</li>
          <li>Behance, Adobe Portfolio (creatives), Wix, Squarespace</li>
          <li>Blogs/websites, PPT/PDF for simple sharing</li>
        </ul>
      </SectionCard>

      {/* Self‑Reflection */}
      <SectionCard tone="emerald" title="My Self‑Reflection (Chapter 04)">
        <p>Building my portfolio helps me see my growth and strengths. I will keep a master archive and create a targeted version for each job. Using the What–So what–Now what model, I will update items after each project and write a short reflection. My next actions: add recent projects, map each to PEAKS, and prepare a clean cover page and contents.</p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter4Section from './Chapter4.jsx' and render <Chapter4Section /> where Chapter 04 should appear.
