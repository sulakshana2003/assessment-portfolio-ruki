import { useEffect, useMemo, useRef, useState } from "react";
import Chapter1Section from "./pages/chapter/Chapter1.jsx";
import Chapter2Section from "./pages/chapter/Chapter2.jsx";
import Chapter3Section from "./pages/chapter/Chapter3.jsx";
import Chapter4Section from "./pages/chapter/Chapter4.jsx";
import Chapter5Section from "./pages/chapter/Chapter5.jsx";
import Chapter6Section from "./pages/chapter/Chapter6.jsx";
import Chapter7Section from "./pages/chapter/Chapter7.jsx";
import Chapter8Section from "./pages/chapter/Chapter8.jsx";
import Chapter9Section from "./pages/chapter/Chapter9.jsx";
import Chapter10Section from "./pages/chapter/Chapter10.jsx";
import Chapter11Section from "./pages/chapter/Chapter11.jsx";





// Tailwind v2/v3 compatible version (no arbitrary values).
export default function AssessmentPortfolio() {
  const chapters = useMemo(
    () => [
      { id: "ch1", title: "Introduction to Professional Skills", body: sampleIntro },
      { id: "ch2", title: "Teamwork & Collaboration", body: "Effective teamwork involves clear goals, defined roles, and open communication. Common tools include Kanban boards, daily stand-ups, and retrospectives." },
      { id: "ch3", title: "Communication Skills", body: "Active listening, concise writing, and confident presentations are core. Use the 7Cs: clear, concise, concrete, correct, coherent, complete, courteous." },
      { id: "ch4", title: "Leadership & Ethics", body: "Leadership blends vision with responsibility. Ethical behaviour drives trust and long-term outcomes." },
      { id: "ch5", title: "Problem Solving", body: "Define the problem, explore causes, generate options, test, and reflect. Tools: Fishbone, 5-Whys, Pareto." },
      { id: "ch6", title: "Time Management", body: "Plan → Prioritize → Protect focus. Use Pomodoro and time-boxing." },
      { id: "ch7", title: "Emotional Intelligence", body: "Self-awareness, self-regulation, empathy, motivation, social skills." },
      { id: "ch8", title: "Interview Prep", body: "STAR answers, portfolio evidence, and mock interviews." },
      { id: "ch9", title: "CV & Cover Letter", body: "Results-focused bullet points and tailored summaries." },
      { id: "ch10", title: "Dining & Business Etiquette", body: "Professional behaviour in formal settings." },
      { id: "ch11", title: "Research Writing", body: "Sources, citations, and avoiding plagiarism." },
    ],
    []
  );

  const [active, setActive] = useState(chapters[0].id);
  const sectionRefs = useRef({});
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    chapters.forEach((c) => sectionRefs.current[c.id] && obs.observe(sectionRefs.current[c.id]));
    return () => obs.disconnect();
  }, [chapters]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top bar (mobile only) */}
      <header className="sticky top-0 z-30 bg-white bg-opacity-90 backdrop-filter backdrop-blur border-b border-gray-200 md:hidden">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">Assessment Portfolio</h1>
          <a
            href="#ch1"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("ch1");
            }}
            className="text-sm underline"
          >
            Go to Start
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-6 pb-24 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky" style={{ top: "1.5rem" }}>
            {/* Left brand heading */}
            <div className="mb-4 text-sm font-semibold text-gray-600 tracking-wide">
              Assessment Portfolio
            </div>

            {/* Pale panel with its own vertical scrollbar */}
            <div className="rounded-2xl bg-green-50 border border-green-100 p-4">
              {/* maxHeight calc keeps it inside the viewport; custom thin scrollbar via CSS class */}
              <div
                className="sidebar-scroll pr-2"
                style={{ maxHeight: "calc(100vh - 9rem)" }}
              >
                <nav className="space-y-3">
                  {chapters.map((c, idx) => (
                    <button
                      key={c.id}
                      onClick={() => scrollTo(c.id)}
                      title={c.title}
                      className="w-full text-left"
                    >
                      <div
                        className={
                          "flex items-center justify-between rounded-full border px-4 py-2 transition " +
                          (active === c.id
                            ? "bg-white border-green-400 shadow-sm"
                            : "bg-white border-green-200 hover:border-green-300")
                        }
                      >
                        <span
                          className={
                            "text-sm font-semibold " +
                            (active === c.id ? "text-gray-900" : "text-gray-600")
                          }
                        >
                          Chapter
                        </span>
                        <span
                          className={
                            "h-8 w-8 grid place-items-center rounded-full border text-sm font-bold " +
                            (active === c.id
                              ? "bg-green-600 text-white border-green-600"
                              : "bg-white text-gray-700 border-green-300")
                          }
                        >
                          {idx + 1}
                        </span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <section className="md:col-span-9">
  {chapters.map((c, idx) => {
    // give a ref target for scroll-spy
    const setRef = (el) => (sectionRefs.current[c.id] = el);

    if (c.id === "ch1") {
      // Use your custom Chapter 01 component
      return (
        <article
          key={c.id}
          id={c.id}
          ref={setRef}
          className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
        >
          <Chapter1Section />
        </article>
      );
    }
    if (c.id === "ch2"){
      return (
      <div
        key="ch2"
        id="ch2"
        ref={(el) => (sectionRefs.current["ch2"] = el)}
        className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
      >
        <Chapter2Section />
      </div>
    ); 
  }
    if (c.id === "ch3") {
      return (
        <div
      key="ch3"
      id="ch3"
      ref={(el) => (sectionRefs.current["ch3"] = el)}
      className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
    >
      <Chapter3Section />
    </div>
      );
    }

    if (c.id === "ch4") {
      return (
            <div
        key="ch4"
        id="ch4"
        ref={(el) => (sectionRefs.current["ch4"] = el)}
        className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
      >
        <Chapter4Section />
      </div>
      );
    }
    if (c.id === "ch5") {
      return (
        <div
    key="ch5"
    id="ch5"
    ref={(el) => (sectionRefs.current["ch5"] = el)}
    className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
  >
    <Chapter5Section />
  </div>
      );
    }
    if (c.id === "ch6") {
      return (
        <div
    key="ch6"
    id="ch6"
    ref={(el) => (sectionRefs.current["ch6"] = el)}
    className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
  >
    <Chapter6Section />
  </div>
      );
    }
    if (c.id === "ch7") {
      return (
        <div
    key="ch7"
    id="ch7"
    ref={(el) => (sectionRefs.current["ch7"] = el)}
    className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
  >
    <Chapter7Section />
  </div>
      );
    }
    if (c.id === "ch8") {
  return (
    <div
      key="ch8"
      id="ch8"
      ref={(el) => (sectionRefs.current["ch8"] = el)}
      className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
    >
      <Chapter8Section />
    </div>
  );
}

if (c.id === "ch9") {
  return (
    <div
      key="ch9"
      id="ch9"
      ref={(el) => (sectionRefs.current["ch9"] = el)}
      className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
    >
      <Chapter9Section />
    </div>
  );
}
    if (c.id === "ch10") {
      return (
        <div
          key="ch10"
          id="ch10"
          ref={(el) => (sectionRefs.current["ch10"] = el)}
          className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
        >
          <Chapter10Section />
        </div>
      );
    }
    if (c.id === "ch11") {
  return (
    <div
      key="ch11"
      id="ch11"
      ref={(el) => (sectionRefs.current["ch11"] = el)}
      className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
    >
      <Chapter11Section />
    </div>
  );
}
    
    // default article for other chapters
            return (
              <article
                key={c.id}
                id={c.id}
                ref={setRef}
                className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:space-x-6 space-y-4 md:space-y-0">
                  <div className="md:flex-1">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                      {c.title}
                    </h2>
                    <p className="text-gray-600">Chapter overview</p>
                  </div>
                  <div className="md:w-5/12 md:self-start">
                    <div className="w-full h-56 md:h-64 rounded-xl bg-gray-100 border border-gray-200 overflow-hidden grid place-items-center text-gray-500 text-sm">
                      Add an image here
                    </div>
                  </div>
                </div>

                <div className="mt-6 leading-7 text-gray-700">
                  <p className="whitespace-pre-line">{c.body}</p>
                </div>
              </article>
            );
          })}
        </section>

      </main>

      <ReadingProgress />
    </div>
  );
}

function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const h =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setPct(Math.min(100, Math.max(0, (st / h) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-6 right-6 hidden md:flex items-center bg-white bg-opacity-90 border border-gray-200 shadow-lg rounded-full px-3 py-2">
      <div className="h-2 w-40 rounded-full bg-gray-200 overflow-hidden mr-2">
        <div className="h-2 bg-green-500" style={{ width: pct + "%" }} />
      </div>
      <span className="text-xs font-medium text-gray-600">
        {Math.round(pct)}%
      </span>
    </div>
  );
}

const sampleIntro = `If you read the introduction, the insight regarding the term 'Professional skills' had emerged that expressed how important it is to have clarity regarding this domain. To further exploration, the very first lecture was conducted by Miss Ishara Ravihara Weerasinghe encompassing almost all the aspects of professional skills.

The other terms for professional skills are soft skills or employability skills demonstrating the same meaning of non-technical, interpersonal abilities that are essential for success in the workplace. The technical skills would restrict their abilities to a particular sector but professional skills are not like that. They are transferable meaning that they can be applied across various roles and industries. For general examples, teamwork, problem-solving, adaptability, leadership and communication can be considered as employability skills. Indeed, workplace skills are divided into three classifications. They are technical skills, soft skills, and transferable skills.

The next topic is about the descriptions of values, beliefs, attitudes, and character…`;
