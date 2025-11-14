// src/pages/chapter/Chapter1.jsx
// Tailwind v2/v3 friendly (no arbitrary values). Simple English + overview + points + short paras + self-reflection.

import React from "react";

// If you already use ChapterLayout, uncomment the next line and wrap <Chapter1Section /> below with it.
// import ChapterLayout from "../../layouts/ChapterLayout.jsx";

const chips = [
  "Professional skills",
  "Employability",
  "Communication",
  "Teamwork",
  "Problem‑solving",
  "Adaptability",
  "Time management",
  "Leadership",
  "Values",
  "Beliefs",
  "Attitudes",
  "Character",
  "Johari Window",
];

const chipStyles = {
  "Professional skills": { wrapper: "border-emerald-200 bg-emerald-50 text-emerald-900", dot: "bg-emerald-500" },
  Employability: { wrapper: "border-cyan-200 bg-cyan-50 text-cyan-900", dot: "bg-cyan-500" },
  Communication: { wrapper: "border-amber-200 bg-amber-50 text-amber-900", dot: "bg-amber-500" },
  Teamwork: { wrapper: "border-indigo-200 bg-indigo-50 text-indigo-900", dot: "bg-indigo-500" },
  "Problem‑solving": { wrapper: "border-rose-200 bg-rose-50 text-rose-900", dot: "bg-rose-500" },
  Adaptability: { wrapper: "border-violet-200 bg-violet-50 text-violet-900", dot: "bg-violet-500" },
  "Time management": { wrapper: "border-sky-200 bg-sky-50 text-sky-900", dot: "bg-sky-500" },
  Leadership: { wrapper: "border-teal-200 bg-teal-50 text-teal-900", dot: "bg-teal-500" },
  Values: { wrapper: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-900", dot: "bg-fuchsia-500" },
  Beliefs: { wrapper: "border-lime-200 bg-lime-50 text-lime-900", dot: "bg-lime-500" },
  Attitudes: { wrapper: "border-pink-200 bg-pink-50 text-pink-900", dot: "bg-pink-500" },
  Character: { wrapper: "border-slate-200 bg-slate-50 text-slate-900", dot: "bg-slate-500" },
  "Johari Window": { wrapper: "border-amber-200 bg-amber-50 text-amber-900", dot: "bg-amber-500" },
};

function Chip({ label }) {
  const s = chipStyles[label] || { wrapper: "border-gray-200 bg-gray-50 text-gray-900", dot: "bg-gray-400" };
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${s.wrapper}`}>
      <span className={`h-2 w-2 rounded-full ${s.dot}`} />
      {label}
    </span>
  );
}

function SectionCard({ tone = "emerald", title, children }) {
  const tones = {
    emerald: { wrap: "border-emerald-200 bg-emerald-50/70", title: "text-emerald-900" },
    cyan: { wrap: "border-cyan-200 bg-cyan-50/70", title: "text-cyan-900" },
    amber: { wrap: "border-amber-200 bg-amber-50/70", title: "text-amber-900" },
    violet: { wrap: "border-violet-200 bg-violet-50/70", title: "text-violet-900" },
    slate: { wrap: "border-slate-200 bg-white", title: "text-slate-900" },
  };
  const t = tones[tone] || tones.slate;
  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6`}> 
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter1Section() {
  return (
    // If using ChapterLayout, wrap children with it instead of the outer div
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 01</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Introduction to Professional Skills</h1>
        <p className="mt-2 text-slate-600">Simple overview + important bullet points + short explanations + a self‑reflection at the end.</p>

        {/* Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Assessment Weights */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <SectionCard tone="amber" title="Continuous Assessment (100%)">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Assignment 1 (30%)</span> — CV, Cover Letter, Mock Interview</li>
            <li><span className="font-semibold">Assignment 2 (20%)</span> — Food Festival & Report</li>
            <li><span className="font-semibold">Assignment 3 (50%)</span> — Self‑Reflective Portfolio & Presentation</li>
          </ul>
          <p className="mt-2 text-sm"><span className="font-medium">Attendance:</span> Compulsory • <span className="font-medium">Enrolment key:</span> PS25M#</p>
        </SectionCard>
        <SectionCard tone="cyan" title="What are Professional / Employability Skills?">
          <p>Non‑technical, people‑focused skills that help us succeed at work. They are <span className="font-semibold">transferable</span> across roles and industries.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Communication</li>
            <li>Teamwork & collaboration</li>
            <li>Problem‑solving & critical thinking</li>
            <li>Adaptability & flexibility</li>
            <li>Time management</li>
            <li>Leadership</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="Classifying Workplace Skills">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Technical skills:</span> job‑specific tools & methods.</li>
            <li><span className="font-semibold">Soft skills:</span> communication, teamwork, ethics.</li>
            <li><span className="font-semibold">Transferable skills:</span> useful anywhere (e.g., problem‑solving).</li>
          </ul>
        </SectionCard>
      </div>

      {/* Values, Beliefs, Attitudes, Character */}
      <div className="space-y-4 mb-6">
        <SectionCard title="Values, Beliefs, Attitudes, and Character">
          <p className="mb-2">These explain <em>why</em> we act the way we do at work.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1">Values</h4>
              <p className="mb-2">Core principles that guide choices. They act like a moral compass.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Honesty, Integrity, Respect</li>
                <li>Responsibility, Compassion, Fairness</li>
                <li>Courage, Excellence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Beliefs</h4>
              <p className="mb-2">What we think is true about ourselves and the world.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Self‑efficacy, Growth mindset, Optimism</li>
                <li>Locus of control, Self‑worth</li>
                <li>Prejudices, Fatalism (to be challenged)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Attitudes</h4>
              <p className="mb-2">Positive or negative leanings that shape our behaviour.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Positive attitude, Open‑mindedness, Tolerance</li>
                <li>Confidence, Empathy</li>
                <li>Avoid: prejudice, cynicism</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Character</h4>
              <p className="mb-2">Consistent moral and ethical behaviour over time.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Trustworthiness, Respectfulness</li>
                <li>Responsibility, Caring, Citizenship</li>
                <li>Fairness, Courage</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard tone="violet" title="Johari Window (1955)">
          <p className="mb-2">A simple model to understand self‑awareness in relationships.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Open</span> (known to self & others)</li>
            <li><span className="font-semibold">Blind</span> (others see, I don’t)</li>
            <li><span className="font-semibold">Hidden</span> (I know, others don’t)</li>
            <li><span className="font-semibold">Unknown</span> (no one knows yet)</li>
          </ul>
          <p className="mt-2">Goal: grow the <span className="font-semibold">Open</span> area by sharing and seeking feedback.</p>
        </SectionCard>

        <SectionCard tone="slate" title="Tips to Develop Professional Skills">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Continuous learning:</span> short courses, workshops, reading.</li>
            <li><span className="font-semibold">Practice:</span> apply skills in projects, clubs, part‑time work.</li>
            <li><span className="font-semibold">Feedback:</span> ask mentors/peers; act on suggestions.</li>
            <li><span className="font-semibold">Embrace challenges:</span> try new tasks; reflect after.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Self‑Reflection */}
      <SectionCard tone="emerald" title="My Self‑Reflection (Chapter 01)">
        <p>I learned that professional skills are as important as technical knowledge. Good communication, teamwork, and time management make study and project work smoother. I also noticed some blind spots about my attitude under pressure. My next steps are: practice clear writing, join more group tasks to build collaboration, and ask for feedback to improve my open area in the Johari Window.</p>
      </SectionCard>

      {/* References (short format) */}
      <div className="mt-6">
        <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">References</h3>
        <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
          <li>Peterson & Seligman (2004) — Character Strengths and Virtues.</li>
          <li>Rokeach (1973) — The Nature of Human Values.</li>
          <li>Schwartz (1992) — Universals in Values (AESP, Vol. 25).</li>
          <li>Ajzen & Fishbein (1980) — Attitudes & Behaviour.</li>
          <li>Eagly & Chaiken (1993) — The Psychology of Attitudes.</li>
        </ul>
      </div>
    </div>
  );
}

// Usage examples:
// 1) Standalone page: export default Chapter1Section and render in a route.
// 2) Inside your AllChapters page, import { default as Chapter1Section } from './Chapter1.jsx' and place <Chapter1Section />.
