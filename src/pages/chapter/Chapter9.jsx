// src/pages/chapter/Chapter9.jsx
// Dining Etiquette & Table Manners – portfolio style, simple English.

import React from "react";

const chips = [
  "Why table manners",
  "Place settings",
  "Bread & drinks",
  "Napkins & soup",
  "Cutlery styles",
  "Do & Don’t at table",
  "Thank-you notes",
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

export default function Chapter9Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 09</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Dining Etiquette & Table Manners
        </h1>
        <p className="mt-2 text-slate-600">
          This lesson showed why table manners are important and how to behave
          politely during a meal – from place settings and napkins to using
          cutlery, passing food and ending the meal.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Why etiquette matters */}
      <SectionCard tone="cyan" title="Why table manners matter">
        <p className="mb-2 text-sm">
          Eating together is more than just filling our stomach. It is a social
          ritual where we share food, show respect and make others comfortable.
          People notice how we behave at the table and often judge our
          professionalism and upbringing from it.
        </p>
        <p className="text-sm">
          Good dining etiquette helps us feel relaxed in formal events, business
          meetings and family gatherings, and shows respect to the host, server
          and other guests.
        </p>
      </SectionCard>

      {/* Place setting & where to start */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="emerald" title="Place settings – where do I begin?">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Modern place setting uses many plates, glasses and utensils.</li>
            <li>
              General rule: <span className="font-semibold">start from the outside and work in</span> for
              each course.
            </li>
            <li>
              The salad fork is usually the outer fork on the left (in US style)
              because salad often comes first.
            </li>
            <li>
              A charger or place plate is mainly decorative and protects the
              tablecloth from food drops.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="Bread & drinks – easy memory trick">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Make a lowercase <span className="font-semibold">“b”</span> with your left hand and a{" "}
              <span className="font-semibold">“d”</span> with your right hand using thumb and
              index finger.
            </li>
            <li>
              <span className="font-semibold">b = bread</span> (left side),{" "}
              <span className="font-semibold">d = drink</span> (right side).
            </li>
            <li>
              Break bread or rolls into small pieces and butter only the piece
              you are eating.
            </li>
            <li>
              Salt and pepper are “a couple” – always pass them together, held
              at the base of the shakers.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Napkins & soup */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="amber" title="Napkin rules">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              After sitting, wait for the host to place their napkin, then place
              yours on your lap (folded, not crumpled).
            </li>
            <li>
              In informal meals, put your napkin neatly to the left of your plate
              when you leave the table; in formal settings, place it on your chair.
            </li>
            <li>Never use the napkin as a tissue or hide food in it.</li>
          </ul>
        </SectionCard>

        <SectionCard tone="cyan" title="Soup and small rules">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Ladle soup away from you with small, quiet movements.</li>
            <li>
              Only drink soup from the cup if it is served in a small cup and only
              clear broth is left.
            </li>
            <li>
              When finished, place the spoon on the plate under the bowl, not
              inside the empty bowl.
            </li>
            <li>
              Lemon in tea: use one hand to squeeze and the other hand to shield
              so juice does not spray others.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Cutlery styles */}
      <SectionCard tone="emerald" title="Holding and using cutlery">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-sm">Two grips</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="font-semibold">Scalpel method</span> – hold the knife/fork like a
                surgeon’s scalpel, tines facing down.
              </li>
              <li>
                <span className="font-semibold">Pencil method</span> – like holding a pencil, resting
                between fingers.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-sm">Two dining styles</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="font-semibold">Continental / European style:</span> cut food and
                keep fork in left, knife in right; eat with fork tines down.
              </li>
              <li>
                <span className="font-semibold">American style:</span> cut food, place knife down,
                switch fork to right hand and eat with tines up.
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Do / Don't – quiz highlights */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="slate" title="Good practice at the table">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Pass food, condiments, salt and pepper to the right (unless the
              person asking is on your left).
            </li>
            <li>
              If you find hair or a foreign object in your food, quietly inform
              the server and request a new plate.
            </li>
            <li>
              If service is poor, speak to the manager rather than scolding the
              server.
            </li>
            <li>
              If you burp or sneeze, do it as quietly as possible, cover your mouth
              and turn slightly away. Do not make a big scene.
            </li>
            <li>
              If someone else makes a mistake, ignore it instead of correcting
              them in front of others.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Things to avoid (based on the quiz)">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Do not put used knives back on the tablecloth – rest them on the
              plate.
            </li>
            <li>
              Do not pick your teeth at the table or ask for a toothpick in front
              of everyone; go to the restroom.
            </li>
            <li>
              Do not crawl under the table to collect dropped cutlery; ask the
              server for a clean one.
            </li>
            <li>
              Do not rearrange place cards – the host has planned the seating.
            </li>
            <li>
              Do not leave early when you finish eating; wait until the host ends
              the meal.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Finished / resting signals + thank you notes */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="cyan" title="Finished or still eating? – cutlery signals">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              When you are <span className="font-semibold">not finished</span> in European style:
              utensils slightly crossed, fork tines down, handles on opposite
              sides of plate.
            </li>
            <li>
              When you are <span className="font-semibold">not finished</span> in American style:
              knife and fork form a small “V”, handles on the same side.
            </li>
            <li>
              When you are <span className="font-semibold">finished</span> (both styles): place knife
              and fork parallel at the “4:25” position on the plate, blade facing
              inward. This is a signal for the server to clear.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="Thank-you notes">
          <p className="mb-2 text-sm">
            A short handwritten thank-you note is powerful. It should be used
            when someone spends real time or effort on us (for example, hosting
            a formal dinner or helping with an event).
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Include a greeting and clear thanks.</li>
            <li>Mention something specific you enjoyed at the meal.</li>
            <li>Send it as soon as possible – but better late than never.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 09)">
        <p className="text-sm">
          Before this lesson I only knew basic table manners. Now I understand
          how small things like where I place my napkin, how I pass the salt and
          how I hold my cutlery can affect the way others see me. I also realised
          that good etiquette is mainly about making others comfortable, not
          about showing off rules. In future formal dinners or company events I
          will feel more confident using the correct utensils, napkin rules and
          “finished” signals. I also plan to write short thank-you notes after
          important invitations to show appreciation and professionalism.
        </p>
      </SectionCard>
    </div>
  );
}
