// src/pages/chapter/Chapter7.jsx
// Tailwind v2/v3 friendly. Photo gallery + simple lightbox. Uses images in your assets folder.

import React, { useState } from "react";

// ---- import your photos (put the files in src/assets/) ----
// rename paths if your folder differs
import F1 from "../../assets/F1.jpeg";
import F2 from "../../assets/F2.jpeg";
import F3 from "../../assets/F3.jpeg";
import F4 from "../../assets/F4.jpeg";
import F5 from "../../assets/F5.jpeg";
import F6 from "../../assets/F6.jpeg";
import F7 from "../../assets/F7.jpeg";
import F10 from "../../assets/F10.jpeg";
import F11 from "../../assets/F11.jpeg";

const photos = [
  { src: F1, alt: "Ralahami Kade stall front" },
  { src: F2, alt: "Team preparing the stall" },
  { src: F3, alt: "Group selfie at the stall" },
  { src: F4, alt: "Serving customers" },
  { src: F5, alt: "Crowd around the stall" },
  { src: F6, alt: "Team with flyers and cash" },
  { src: F11, alt: "Team group photo" },
  { src: F7, alt: "Busy time at counter" },
  { src: F10, alt: "Ralahami Kade table close-up" },
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

export default function Chapter7Section() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => { setIndex(i); setOpen(true); };
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 07</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Food Festival – Ralahami Kadé</h1>
        <p className="mt-2 text-slate-600">Our team planned and ran a food stall featuring hot dogs, sandwiches and drinks. We practiced event planning, teamwork, money handling, and customer service under time pressure.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Event planning","Menu & pricing","Roles","Crowd handling","Sales","Reflection"].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Key details */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="Objectives">
          <ul className="list-disc pl-5 space-y-1">
            <li>Plan and operate a stall as a team.</li>
            <li>Practice budgeting, pricing, and cash handling.</li>
            <li>Serve customers quickly and politely; keep hygiene.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="Roles & tasks">
          <ul className="list-disc pl-5 space-y-1">
            <li>Lead & cash: set prices, track sales, manage change.</li>
            <li>Food prep: sauces, buns, assembly, packaging.</li>
            <li>Front desk: greeting, taking orders, flow control.</li>
            <li>Logistics: stock, ice, cleaning, photos.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Gallery */}
      <SectionCard tone="slate" title="Photo Gallery">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((p, i) => (
            <button
              key={i}
              className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100"
              onClick={() => openLightbox(i)}
              aria-label={`Open image ${i + 1}`}
            >
              <img src={p.src} alt={p.alt} className="h-40 md:h-48 w-full object-cover" />
              <span className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/30 text-white text-sm">Click to view</span>
            </button>
          ))}
        </div>
      </SectionCard>

      {/* Simple lightbox */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setOpen(false)} aria-label="Close">×</button>
          <button className="absolute left-4 md:left-8 text-white text-2xl" onClick={prev} aria-label="Previous">‹</button>
          <img src={photos[index].src} alt={photos[index].alt} className="max-h-[80vh] max-w-full rounded-lg" />
          <button className="absolute right-4 md:right-8 text-white text-2xl" onClick={next} aria-label="Next">›</button>
        </div>
      )}

      {/* Quick results */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="What went well" tone="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>Attractive booth branding and team energy drew a crowd.</li>
            <li>Fast assembly line improved serving speed.</li>
            <li>Clear roles reduced confusion during peak time.</li>
          </ul>
        </SectionCard>
        <SectionCard title="What to improve next time" tone="amber">
          <ul className="list-disc pl-5 space-y-1">
            <li>Prepare more change and pre‑slice ingredients.</li>
            <li>Better queue management; print menu with prices.</li>
            <li>Track sales & stock with a small sheet/app.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Self‑Reflection */}
      <SectionCard tone="emerald" title="My Self‑Reflection (Chapter 07)">
        <p>This event taught me real teamwork and customer service. I handled pressure, spoke clearly with customers, and learned to adjust prices/stock on the fly. Next time I will prepare a checklist, set clearer roles, and use a simple tracker for sales and expenses.</p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter7Section from './Chapter7.jsx' and render <Chapter7Section /> where Chapter 07 should appear.
