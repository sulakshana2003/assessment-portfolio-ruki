// src/pages/chapter/Chapter8.jsx
// Emotional Intelligence – simple English, portfolio style

import React from "react";

const chips = [
  "Emotions",
  "Brain & EQ vs IQ",
  "Hard-wired vs learned",
  "Understanding emotions",
  "Managing emotions",
  "Health & decisions",
  "Self-reflection",
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
    emerald: { wrap: "border-emerald-200 bg-emerald-50", title: "text-emerald-900" },
    cyan: { wrap: "border-cyan-200 bg-cyan-50", title: "text-cyan-900" },
    amber: { wrap: "border-amber-200 bg-amber-50", title: "text-amber-900" },
    slate: { wrap: "border-slate-200 bg-white", title: "text-slate-900" },
    violet: { wrap: "border-violet-200 bg-violet-50", title: "text-violet-900" },
  };
  const t = tones[tone] || tones.slate;

  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter8Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 08</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Emotional Intelligence (EI)
        </h1>
        <p className="mt-2 text-slate-600">
          This lesson explained what emotions are, how the brain handles them, and how emotional
          intelligence helps us in study, work and daily life.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Emotions basics */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What are emotions?">
          <p className="mb-2">
            An emotion is a complex psychological state. It includes how we feel, what happens in
            our body and how we behave.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Feeling / subjective experience</span> – the inside
              feeling (sad, happy, angry, afraid).
            </li>
            <li>
              <span className="font-semibold">Physiological response</span> – body reactions such as
              heartbeat, sweating, tight muscles.
            </li>
            <li>
              <span className="font-semibold">Behavioural / social response</span> – facial
              expressions, voice, posture, actions.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="emerald" title="Hard-wired vs taught emotions">
          <p className="mb-2 text-sm">
            Some emotions are inborn. Others we learn from family, culture and experience.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Hard-wired:</span> sadness, joy, disgust, anger,
              surprise, fear.
            </li>
            <li>
              <span className="font-semibold">Taught / social:</span> humility, forgiveness,
              empathy, optimism, compassion, shame, pride, gratitude.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Brain & EQ vs IQ */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="amber" title="The emotional brain">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Limbic system & amygdala:</span> emotion centre, fast
              “fight or flight” reactions.
            </li>
            <li>
              <span className="font-semibold">Prefrontal cortex:</span> the “CEO” of the brain –
              planning, judgement, self-control.
            </li>
            <li>
              Teenagers often react more from the amygdala, so moods and behaviour can swing
              quickly.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="EQ vs IQ">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">IQ</span> – thinking skills, logic, problem solving.
              Helps us learn content.
            </li>
            <li>
              <span className="font-semibold">EQ / EI</span> – ability to recognise and manage
              emotions in ourselves and others to reach good outcomes.
            </li>
            <li>IQ helps us enter a field; EI helps us grow, lead and work with people.</li>
            <li>EI can be improved through practice at any age.</li>
          </ul>
        </SectionCard>
      </div>

      {/* EI abilities */}
      <SectionCard tone="emerald" title="Four main abilities of Emotional Intelligence">
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>
            <span className="font-semibold">Perceiving emotions</span> – notice feelings in self
            and others (faces, tone, body language).
          </li>
          <li>
            <span className="font-semibold">Using emotions</span> – use feelings to focus, be
            creative and solve problems (e.g. mild stress can push us to act).
          </li>
          <li>
            <span className="font-semibold">Understanding emotions</span> – know what triggers
            feelings, how they can mix and change over time.
          </li>
          <li>
            <span className="font-semibold">Managing emotions</span> – stay open to feelings but
            respond in a wise, controlled way.
          </li>
        </ol>
      </SectionCard>

      {/* Emotions, health & decisions */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="cyan" title="Emotions, health and others">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Long-term negative states (chronic anger, fear, stress) can harm the heart and immune
              system.
            </li>
            <li>Positive emotions support better health and stronger relationships.</li>
            <li>
              Emotions are contagious – our mood can spread to people around us (emotional
              contagion).
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Gut feelings & decision making">
          <p className="mb-2 text-sm">
            The brain does a lot of work unconsciously before we “decide”. A gut feeling is often
            the result of these quick emotional calculations.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>The brain quickly checks rewards, risks and past experiences.</li>
            <li>
              Emotions give each option a value (good / bad / dangerous / exciting) and guide our
              choice.
            </li>
            <li>
              Wise decisions blend emotion and thinking – not emotion alone and not logic alone.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Managing emotions in daily life */}
      <SectionCard tone="violet" title="Managing strong emotions – simple steps">
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>
            <span className="font-semibold">Pause</span> – notice the feeling; name it (e.g. “I feel
            angry and embarrassed”).
          </li>
          <li>
            <span className="font-semibold">Breathe & ground</span> – slow breathing, short break,
            drink water.
          </li>
          <li>
            <span className="font-semibold">Think</span> – ask: what triggered this? what is the
            real problem? what outcome do I want?
          </li>
          <li>
            <span className="font-semibold">Choose a response</span> – speak calmly, ask for time,
            or use “I” statements instead of blaming.
          </li>
          <li>
            <span className="font-semibold">Reflect later</span> – what did I learn? what can I do
            differently next time?
          </li>
        </ol>
      </SectionCard>

      {/* EI at uni / work */}
      <SectionCard tone="slate" title="Why EI matters for students and work">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Helps in teamwork, conflict handling and customer service.</li>
          <li>
            Supports leadership – understanding people, motivating them, and staying calm under
            pressure.
          </li>
          <li>
            Makes it easier to manage stress from exams, deadlines, internships and new
            environments.
          </li>
        </ul>
      </SectionCard>

      {/* Self-reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 08)">
        <p className="text-sm">
          This session helped me understand that emotions are not random; they follow patterns in
          the brain and body. I realised that sometimes I react from emotion first and think later,
          especially when I am stressed or feel criticised. From now on, I want to pause, name my
          feelings and respond more calmly. I also plan to practise empathy by asking myself how the
          other person might feel before I speak. Building emotional intelligence will help me work
          better in teams, handle pressure during exams and be more prepared for future workplace
          situations.
        </p>
      </SectionCard>
    </div>
  );
}
