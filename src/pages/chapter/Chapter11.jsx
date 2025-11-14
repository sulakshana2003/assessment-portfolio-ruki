// src/pages/chapter/Chapter11.jsx
// Email & Online Etiquette – portfolio style, simple English.

import React from "react";

const chips = [
  "Why etiquette",
  "Subject lines",
  "Greetings & closings",
  "Confidential info",
  "Tone & grammar",
  "Reply / Reply all",
  "Online & social media",
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

export default function Chapter11Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Chapter 11
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Email & Online Etiquette
        </h1>
        <p className="mt-2 text-slate-600">
          This lesson explained the basic rules for writing professional emails
          and behaving responsibly online. It showed how one careless message or
          post can affect our studies, career and reputation.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Why etiquette matters */}
      <SectionCard tone="cyan" title="Why email & online etiquette matter">
        <p className="text-sm">
          Etiquette means the rules for correct behaviour in a particular time
          and place. Email and online etiquette are important because teachers,
          employers and co-workers judge us by how we write and what we post.
          Good habits show that we are respectful, mature and ready for the
          workplace.
        </p>
      </SectionCard>

      {/* Core email rules */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="emerald" title="Seven basic email rules">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Always add a subject</span> and
              use the person’s name and correct title in the greeting.
            </li>
            <li>
              <span className="font-semibold">Do not write in ALL CAPITALS</span>{" "}
              – it looks like shouting.
            </li>
            <li>
              <span className="font-semibold">
                Do not send confidential information
              </span>{" "}
              like bank details, ID numbers or medical data.
            </li>
            <li>
              <span className="font-semibold">
                Be careful with abbreviations and emoticons
              </span>{" "}
              – they are not always understood and look unprofessional.
            </li>
            <li>
              <span className="font-semibold">THINK before you send</span>:
              could this email hurt, embarrass or offend someone?
            </li>
            <li>
              <span className="font-semibold">Use correct grammar</span> and
              spelling; emails are not text messages.
            </li>
            <li>
              <span className="font-semibold">
                Do not forward unnecessary emails
              </span>{" "}
              or chain messages.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="Professional email structure">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">To:</span> correct email address
              of the recipient.
            </li>
            <li>
              <span className="font-semibold">Subject line:</span> a short
              phrase that summarises the main point.
            </li>
            <li>
              <span className="font-semibold">Greeting:</span> “Dear
              Ms./Mr./Dr. …” for formal emails.
            </li>
            <li>
              <span className="font-semibold">Body:</span> clear paragraphs,
              complete sentences, no slang.
            </li>
            <li>
              <span className="font-semibold">Closing:</span> “Best regards,”
              “Kind regards,” “Sincerely,” etc.
            </li>
            <li>
              <span className="font-semibold">Signature:</span> full name and,
              if needed, course, phone and a professional email address.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Tone, address & before send */}
      <SectionCard tone="amber" title="Tone, address and checks before sending">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-sm">Tone & address</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Use a professional email address (example:
                <span className="italic"> firstname.lastname@gmail.com</span>,
                not funny nicknames).
              </li>
              <li>
                Be polite and respectful – request help instead of demanding it.
              </li>
              <li>
                Avoid exclamation marks and emotional language in formal
                emails.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-sm">Before you hit “send”</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Run spell-check and read once more from top to bottom.</li>
              <li>Check the subject, greeting, closing and attachments.</li>
              <li>
                Make sure you chose <span className="font-semibold">
                  “Reply”
                </span>{" "}
                or <span className="font-semibold">“Reply all”</span> correctly.
              </li>
              <li>
                If you wrote the email while angry, save it and read it again
                later before sending.
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Online & social media etiquette */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="cyan" title="Online classroom & office etiquette">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Use respectful language in chats, forums and group emails – the
              same way you would speak in class.
            </li>
            <li>
              Avoid spamming group chats with memes or unrelated messages,
              especially in academic groups.
            </li>
            <li>
              Follow camera/mic rules in online meetings; avoid multitasking and
              side conversations.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="violet" title="Social media and your digital footprint">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Employers and universities may check social media before giving
              offers.
            </li>
            <li>
              Inappropriate posts, photos or comments can damage your
              reputation or even cost you a job.
            </li>
            <li>
              Use social media to build a positive personal brand – share your
              projects, achievements and interests in a responsible way.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 11)">
        <p className="text-sm">
          From this session I realised that email and online messages are
          permanent records, not private chats that disappear. Earlier I did not
          always think about subject lines, greetings or how my tone sounded on
          screen. Now I understand that one careless email or social media post
          can affect my relationship with lecturers, friends and future
          employers. In the future I plan to use clear subjects, formal
          greetings and proper grammar in academic or work emails. Before
          sending or posting anything, I want to pause for a moment and ask
          myself whether I would be happy for a lecturer, manager or parent to
          read it later.
        </p>
      </SectionCard>
    </div>
  );
}
