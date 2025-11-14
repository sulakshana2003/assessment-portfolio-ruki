// src/pages/chapter/Chapter10.jsx
// Telephone Etiquette & Customer Service – portfolio style, simple English.

import React from "react";

const chips = [
  "First impressions",
  "Answering calls",
  "Holding & transfers",
  "Messages & callbacks",
  "Professional language",
  "Handling complaints",
  "Customer service mindset",
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
    emerald: {
      wrap: "border-emerald-200 bg-emerald-50/70",
      title: "text-emerald-900",
    },
    cyan: {
      wrap: "border-cyan-200 bg-cyan-50/70",
      title: "text-cyan-900",
    },
    amber: {
      wrap: "border-amber-200 bg-amber-50/70",
      title: "text-amber-900",
    },
    slate: {
      wrap: "border-slate-200 bg-white",
      title: "text-slate-900",
    },
    violet: {
      wrap: "border-violet-200 bg-violet-50/70",
      title: "text-violet-900",
    },
  };
  const t = tones[tone] || tones.slate;

  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">
        {children}
      </div>
    </div>
  );
}

export default function Chapter10Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Chapter 10
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Telephone Etiquette & Customer Service
        </h1>
        <p className="mt-2 text-slate-600">
          This lesson showed how a simple phone call can create a good or bad
          image of an organisation. We learned step by step how to answer,
          handle and end calls in a polite and professional way.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* First impressions & basics */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="Why telephone etiquette matters">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              The phone is often the{" "}
              <span className="font-semibold">first contact</span> between a
              customer and a company.
            </li>
            <li>
              Within a few seconds callers decide if we sound friendly,
              organised and helpful.
            </li>
            <li>
              Good phone manners can turn a new caller into a loyal customer;
              poor manners can push them away.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="emerald" title="Professional attitude on the phone">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Answer with a smile – it changes the tone of your voice.</li>
            <li>
              Sit up straight, avoid eating or chewing gum while on the phone.
            </li>
            <li>
              Give full attention to the caller, not to side chats or other
              screens.
            </li>
            <li>
              Remember: you represent the organisation every time you speak.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Answering & greeting */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="amber" title="Answering the call">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Aim to answer within <span className="font-semibold">3 rings</span>.
            </li>
            <li>
              Use a simple structure: greeting + organisation + your name +
              offer of help.
              <br />
              <span className="italic">
                “Good morning, SLIIT City Uni support desk, this is Senal, how
                may I help you?”
              </span>
            </li>
            <li>
              Speak clearly into the mouthpiece or headset; avoid shouting or
              whispering.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="Giving your full attention">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Do not talk to co-workers while on the call; if needed, excuse
              yourself and use the hold button.
            </li>
            <li>
              Keep a notepad ready to write names, numbers and key details.
            </li>
            <li>
              Listen without interrupting. When they finish, summarise:
              <span className="italic"> “So what I’m hearing is…”</span>
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Hold & transfers */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="violet" title="Putting a caller on hold">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>Ask permission first: “May I put you on hold for a moment?”</li>
            <li>Wait for the answer before pressing the hold button.</li>
            <li>
              Check back every 30–45 seconds, thank them for waiting and give
              options: keep holding, a call-back, or take a message.
            </li>
          </ol>
        </SectionCard>

        <SectionCard tone="emerald" title="Transferring calls politely">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>
              Explain why you are transferring: “I’ll transfer you to our
              finance desk who can access your account.”
            </li>
            <li>
              Contact the other person if possible, check they can take the call,
              and give them the caller’s name and issue.
            </li>
            <li>
              Tell the caller the name and extension of the person they are going
              to, in case they get disconnected.
            </li>
          </ol>
        </SectionCard>
      </div>

      {/* Messages & callbacks */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="Taking clear messages">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Use a message pad or form to avoid missing details.</li>
            <li>
              Always record: who the message is for, caller’s name, organisation,
              phone number, date/time and short message.
            </li>
            <li>
              Mark the action: “Please call”, “Will call back”, “Urgent”.
            </li>
            <li>
              Read back names and numbers to confirm spelling and digits.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Returning calls & leaving voicemails">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Try to return calls within one working day.</li>
            <li>
              When leaving a voicemail: give your name, department, phone
              number, brief reason for the call and best time to reach you.
            </li>
            <li>
              Keep it short and clear: the goal is to make it easy for them to
              call back.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Language & tone */}
      <SectionCard tone="slate" title="Professional telephone language">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-sm">Better phrases to use</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>“May I put you on hold for a moment?”</li>
              <li>“How may I help you today?”</li>
              <li>“Let me check that for you.”</li>
              <li>“Thank you for waiting.”</li>
              <li>“I understand your concern.”</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-sm">Phrases to avoid</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>“Hang on.” / “What?” / “Yeah…?”</li>
              <li>“That’s not my job.”</li>
              <li>“You have to…” / “Why didn’t you…?”</li>
              <li>“It’s your problem.”</li>
              <li>Slang, sarcasm or bored tone.</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Difficult callers */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="emerald" title="Handling angry or upset callers">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>Stay calm; let them speak without interrupting.</li>
            <li>
              Show empathy: “I’m sorry this happened; let’s see what we can do.”
            </li>
            <li>
              Take notes and repeat back the key points to show you understood.
            </li>
            <li>
              Focus on solutions and next steps, not on blaming other people.
            </li>
            <li>
              If you need help, explain what you can do and who you will contact.
            </li>
          </ol>
        </SectionCard>

        <SectionCard tone="violet" title="Customer service mindset">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Go the extra mile – don’t just forward calls; try to solve or guide.
            </li>
            <li>
              Treat every caller as important, even if the question is simple.
            </li>
            <li>
              Be honest if you don’t know something, but promise to find out and
              call back.
            </li>
            <li>
              Finish with a positive closing: “Thank you for calling, have a nice
              day.”
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 10)">
        <p className="text-sm">
          This lesson changed how I see telephone calls. Earlier I answered calls
          without thinking about tone, greeting or follow up. Now I understand
          that the person on the other side forms a picture of me and my
          organisation in the first few seconds. I learned practical habits such
          as asking before putting someone on hold, using polite language instead
          of blaming words, and taking complete messages. In my future work I
          want to practise smiling before I answer, listening fully, and ending
          calls with a clear action plan and a thank you, so that callers feel
          respected and well supported.
        </p>
      </SectionCard>
    </div>
  );
}
