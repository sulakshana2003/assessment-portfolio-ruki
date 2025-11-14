// src/pages/chapter/Chapter3.jsx
// Tailwind v2/v3 friendly. Simple English. Overview + key points + short paras + activities + self‑reflection.

import React from "react";

const chips = [
  "Job search",
  "Company research",
  "Interview basics",
  "Non‑verbal",
  "Active listening",
  "6/7 Cs",
  "STAR answers",
  "Mock interview",
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
  };
  const t = tones[tone] || tones.slate;
  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter3Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 03</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Job Hunting & Interview Skills</h1>
        <p className="mt-2 text-slate-600">Find roles that fit you, research companies, and face interviews with confident communication and clear examples.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Job hunting basics */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What’s out there? (Job search)">
          <ul className="list-disc pl-5 space-y-1">
            <li>Use multiple sources: company sites, LinkedIn, job boards, referrals, career fairs.</li>
            <li>Track roles in a simple table: role, company, link, deadline, status.</li>
            <li>Match your CV to the role. Use keywords from the job post naturally.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="Research the company">
          <ul className="list-disc pl-5 space-y-1">
            <li>Products/services, mission, culture, recent news.</li>
            <li>Team/tech stack (for IT roles), clients/markets.</li>
            <li>Prepare 1–2 questions that show this research.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Interview basics */}
      <SectionCard tone="amber" title="Job interview basics">
        <p className="mb-2">An interview is a two‑way conversation to check fit. You show evidence of skills; they show the role and environment.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Plan your message: what you want them to remember about you.</li>
          <li>Minimize weaknesses: choose honest, brief examples + how you improved.</li>
          <li>Prepare examples using <span className="font-semibold">STAR</span> (Situation, Task, Action, Result).</li>
        </ul>
      </SectionCard>

      {/* Communication focus */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Non‑verbal & verbal communication" tone="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>Greet, smile, comfortable eye contact, open posture, steady pace.</li>
            <li>Pick up interviewer’s cues; show enthusiasm and professionalism.</li>
            <li>Practice active listening: pay attention, show you’re listening, clarify if needed, avoid rushing to judge, respond appropriately.</li>
          </ul>
        </SectionCard>
        <SectionCard title="6/7 Cs for answers" tone="slate">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Clear</span> & <span className="font-semibold">Concise</span>: get to the point.</li>
            <li><span className="font-semibold">Correct</span> & <span className="font-semibold">Complete</span>: facts + needed details.</li>
            <li><span className="font-semibold">Concrete</span>: examples, outcomes, numbers.</li>
            <li><span className="font-semibold">Courteous/Confident</span>: polite tone, positive attitude.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Successful vs unsuccessful cues */}
      <SectionCard tone="cyan" title="What successful candidates do">
        <ul className="list-disc pl-5 space-y-1">
          <li>Are specific about the position; use the company name naturally.</li>
          <li>Show research; accept topic shifts; use relevant jargon appropriately.</li>
          <li>Answer with specifics and support claims; ask good questions; speak more than interviewer(s) without rambling.</li>
        </ul>
      </SectionCard>

      {/* Sample Q&A */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Common interview questions (prepare with STAR)" tone="amber">
          <ul className="list-disc pl-5 space-y-1">
            <li>Tell me about yourself.</li>
            <li>Describe a challenge and how you handled it.</li>
            <li>Tell me about a time you worked in a team conflict.</li>
            <li>A mistake you made and what you learned.</li>
            <li>Why this company? Why this role?</li>
          </ul>
        </SectionCard>
        <SectionCard title="Example STAR answer (challenge)" tone="emerald">
          <p className="mb-1"><span className="font-semibold">S/T:</span> Project was behind; client deadline 5PM; lead unavailable.</p>
          <p className="mb-1"><span className="font-semibold">A:</span> I coordinated 4 teammates by strengths, focused my day on key tasks, kept client updated.</p>
          <p><span className="font-semibold">R:</span> Delivered on time; later trusted to lead more projects. Shows leadership and time management.</p>
        </SectionCard>
      </div>

      {/* Practical checklist */}
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <SectionCard title="What to wear / take" tone="slate">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Neat, simple, role‑appropriate attire.</li>
            <li>Copies of CV, portfolio links, notebook/pen, ID.</li>
            <li>Plan travel; arrive 10–15 mins early.</li>
          </ul>
        </SectionCard>
        <SectionCard title="Language support (quick)" tone="slate">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Strengths: “I’m good at… / My main strength is…”</li>
            <li>Education: “I have completed… / I recently graduated…”</li>
            <li>Experience: “From 2023–2024 I worked as… / I volunteered as…”</li>
            <li>Future goals: “I’m looking to further my skills in…”</li>
          </ul>
        </SectionCard>
        <SectionCard title="Your questions to ask" tone="slate">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Team’s current priorities and tech/tools.</li>
            <li>What does success in 90 days look like?</li>
            <li>Growth, mentoring, and feedback cadence.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Activities */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Activity – Mock interview (pair/group)" tone="cyan">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Use your own CV; rotate roles: interviewer/interviewee/observer.</li>
            <li>Rate 1–5 on non‑verbal (eye contact, posture, tone) and verbal (clarity, examples).</li>
            <li>Write 2 strengths and 2 improvements after feedback.</li>
          </ul>
        </SectionCard>
        <SectionCard title="Activity – Q lists" tone="cyan">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Make two lists: (1) possible interviewer questions, (2) questions you will ask the interviewer.</li>
            <li>Practice speaking answers aloud with a timer (1–2 mins each).</li>
          </ul>
        </SectionCard>
      </div>

      {/* Self‑Reflection */}
      <SectionCard tone="emerald" title="My Self‑Reflection (Chapter 03)">
        <p>I learned how to prepare focused answers with STAR and how non‑verbal cues affect first impressions. I will research each company, prepare 3 example stories, and practice active listening. In the next mock interview, I will slow down, keep eye contact, and ask 2 thoughtful questions at the end.</p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter3Section from './Chapter3.jsx' and render <Chapter3Section /> where Chapter 03 should appear.
