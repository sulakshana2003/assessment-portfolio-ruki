// src/pages/chapter/Chapter2.jsx
// Tailwind v2/v3 friendly. Simple English. Overview + key points + short paras + activity prompts + self‑reflection.

import React from "react";

const chips = [
  "CV purpose",
  "Resume vs CV",
  "Structure",
  "ATS keywords",
  "Tailoring",
  "Achievements",
  "Cover letter",
  "Do & Don't",
];

const chipTone = {
  wrapper: "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-200 bg-emerald-50 text-emerald-900",
  dot: "h-2 w-2 rounded-full bg-emerald-500",
};

function Chip({ label }) {
  return (
    <span className={chipTone.wrapper}>
      <span className={chipTone.dot} />
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
  };
  const t = tones[tone] || tones.slate;
  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter2Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 02</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">CV & Cover Letter Writing</h1>
        <p className="mt-2 text-slate-600">What a CV is, how it differs from a resume, how to structure and tailor it, and how to write a short, effective cover letter.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* CV: Overview */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What is a CV?">
          <p>A CV (Curriculum Vitae) is a formal 1–2 page document showing education, experience, skills, and achievements. It helps recruiters see your fit quickly. A resume is usually shorter and more condensed; some countries use the terms differently.</p>
        </SectionCard>
        <SectionCard tone="emerald" title="Purpose">
          <ul className="list-disc pl-5 space-y-1">
            <li>Make a strong first impression with clear, error‑free writing.</li>
            <li>Show relevant proof of impact (numbers, outcomes).</li>
            <li>Pass ATS by using keywords from the job description.</li>
          </ul>
        </SectionCard>
      </div>

      {/* CV Structure */}
      <SectionCard tone="amber" title="CV Structure (common order)">
        <ol className="list-decimal pl-5 space-y-1">
          <li><span className="font-semibold">Header:</span> name, phone, email, city; optional LinkedIn/GitHub/portfolio.</li>
          <li><span className="font-semibold">Profile / Summary:</span> 2–3 lines on strengths and goals tailored to the role.</li>
          <li><span className="font-semibold">Experience:</span> reverse‑chronological. Title · Company · Dates · Impact bullets.</li>
          <li><span className="font-semibold">Education:</span> degree, institute, year, key coursework (optional).</li>
          <li><span className="font-semibold">Skills:</span> technical + soft skills; be honest on levels.</li>
          <li><span className="font-semibold">Projects / Achievements:</span> brief bullets with outcomes/metrics.</li>
          <li><span className="font-semibold">Extras:</span> certifications, extracurriculars, languages, referees (optional/on request).</li>
        </ol>
      </SectionCard>

      {/* Dos & Don'ts */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="CV – Do This" tone="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>Use action verbs + metrics (e.g., “Improved load time by 35%”).</li>
            <li>Keep layout clean, consistent fonts, adequate white space.</li>
            <li>Tailor for each job; mirror keywords naturally.</li>
            <li>Limit to 1–2 pages; prioritize relevance.</li>
          </ul>
        </SectionCard>
        <SectionCard title="CV – Avoid" tone="slate">
          <ul className="list-disc pl-5 space-y-1">
            <li>Spelling/grammar errors, long paragraphs, tiny fonts.</li>
            <li>Irrelevant personal data (NIC, marital status, photo) unless asked.</li>
            <li>Responsibilities without results; vague claims without proof.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Cover Letter */}
      <SectionCard tone="cyan" title="Cover Letter: purpose & structure">
        <p>A cover letter introduces your CV and shows why you fit this specific role. Keep to one page.</p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li><span className="font-semibold">Header:</span> your details + date + employer details.</li>
          <li><span className="font-semibold">Opening:</span> role you’re applying for + where you saw it + a focused hook.</li>
          <li><span className="font-semibold">Fit paragraph:</span> 1–2 achievements that match the job’s needs.</li>
          <li><span className="font-semibold">Why them:</span> show research; align with their goals/products.</li>
          <li><span className="font-semibold">Close:</span> call‑to‑action, availability, polite sign‑off.</li>
        </ol>
      </SectionCard>

      {/* Mini Examples */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Impact Bullet Examples" tone="amber">
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed React feature that reduced user drop‑off by 18%.</li>
            <li>Automated test suite with Selenium; cut manual QA time by 40%.</li>
            <li>Led 4‑member team to deliver e‑commerce MVP in 3 weeks.</li>
          </ul>
        </SectionCard>
        <SectionCard title="Keywords (ATS) – Example: Frontend" tone="emerald">
          <p>React, JavaScript/TypeScript, Tailwind CSS, REST/JSON, Git, CI/CD, Jest, Accessibility, Responsive design, API integration.</p>
        </SectionCard>
      </div>

      {/* Activities from lesson */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Activity – Career Ambitions" tone="slate">
          <p className="mb-2">Write 3 roles you like and 3 you don’t, and explain briefly why.</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>I like to be: ____________</li>
            <li>I don’t like to be: ____________</li>
          </ul>
        </SectionCard>
        <SectionCard title="Activity – Cover Letter (Gap‑fill)" tone="slate">
          <p className="mb-2">Practice with words like: advertised, candidate, contribute, apply, enclosed, opportunity.</p>
          <p className="text-sm">Example prompt included in class handout.</p>
        </SectionCard>
      </div>

      {/* Self‑Reflection */}
      <SectionCard tone="emerald" title="My Self‑Reflection (Chapter 02)">
        <p>Now I understand how to present my skills clearly and prove impact with numbers. I will tailor my CV for each job and keep a simple design. For cover letters, I will mention the role, show 1–2 strong matches, and explain why I want that company. My next step is to update my CV with recent projects and ask a friend to review it.</p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter2Section from './Chapter2.jsx' and render <Chapter2Section /> where Chapter 02 should appear.
