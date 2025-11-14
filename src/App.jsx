import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiBook, FiUser } from "react-icons/fi";

// Chapter components
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

export default function AssessmentPortfolio() {
  const chapters = useMemo(
    () => [
      { id: "ch1", title: "Introduction to Professional Skills" },
      { id: "ch2", title: "Teamwork & Collaboration" },
      { id: "ch3", title: "Communication Skills" },
      { id: "ch4", title: "Leadership & Ethics" },
      { id: "ch5", title: "Problem Solving" },
      { id: "ch6", title: "Time Management" },
      { id: "ch7", title: "Emotional Intelligence" },
      { id: "ch8", title: "Interview Prep" },
      { id: "ch9", title: "CV & Cover Letter" },
      { id: "ch10", title: "Dining & Business Etiquette" },
      { id: "ch11", title: "Research Writing" },
    ],
    []
  );

  const [active, setActive] = useState("ch1");
  const sectionRefs = useRef({});

  // Scroll spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.2 }
    );

    chapters.forEach((c) => {
      if (sectionRefs.current[c.id]) obs.observe(sectionRefs.current[c.id]);
    });

    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative min-h-screen bg-[#010F16] text-white overflow-hidden">

      {/* PARALLAX BACKGROUND LAYERS */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500 blur-[180px] opacity-40"
        animate={{ y: [0, 80, 0] }}
        transition={{ repeat: Infinity, duration: 18 }}
      />

      <motion.div
        className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-500 blur-[180px] opacity-40"
        animate={{ y: [0, -80, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />

      {/* POP-UP CHAPTER HEADER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full 
          bg-white/10 backdrop-blur-xl border border-cyan-400/40 shadow-xl z-[50]"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-purple-300 bg-clip-text text-transparent font-semibold">
            {chapters.find((x) => x.id === active)?.title}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* MAIN GRID */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-28 grid grid-cols-1 md:grid-cols-12 gap-10 relative z-20">

        {/* SIDEBAR (desktop) */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">
              Assessment Portfolio
            </h2>

            <div className="mt-6 rounded-2xl bg-white/10 backdrop-blur-xl p-4 border border-white/20">
              <nav className="space-y-4">
                {chapters.map((c, idx) => (
                  <motion.div
                    key={c.id}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <button
                      onClick={() => scrollTo(c.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl
                      transition border
                      ${
                        active === c.id
                          ? "bg-cyan-500/20 border-cyan-300 shadow"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }
                      `}
                    >
                      <span className="text-sm">{c.title}</span>
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <section className="md:col-span-9 space-y-10">

          {chapters.map((c) => {
            const setRef = (el) => (sectionRefs.current[c.id] = el);

            return (
              <motion.div
                key={c.id}
                id={c.id}
                ref={setRef}
                initial={{ opacity: 0, y: 70, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="scroll-mt-24 rounded-2xl p-8 bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl card-tilt"
              >
                {c.id === "ch1" && <Chapter1Section />}
                {c.id === "ch2" && <Chapter2Section />}
                {c.id === "ch3" && <Chapter3Section />}
                {c.id === "ch4" && <Chapter4Section />}
                {c.id === "ch5" && <Chapter5Section />}
                {c.id === "ch6" && <Chapter6Section />}
                {c.id === "ch7" && <Chapter7Section />}
                {c.id === "ch8" && <Chapter8Section />}
                {c.id === "ch9" && <Chapter9Section />}
                {c.id === "ch10" && <Chapter10Section />}
                {c.id === "ch11" && <Chapter11Section />}
              </motion.div>
            );
          })}

        </section>

      </main>

      {/* MODERN BOTTOM MOBILE NAVBAR */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden z-[100]">
        <div className="flex items-center gap-6 bg-white/10 backdrop-blur-xl 
        border border-white/20 shadow-xl px-6 py-3 rounded-full">

          <button onClick={() => scrollTo("ch1")} className="text-white">
            <FiHome size={22} />
          </button>

          <button onClick={() => scrollTo(active)} className="text-white">
            <FiBook size={22} />
          </button>

          <button onClick={() => scrollTo("ch11")} className="text-white">
            <FiUser size={22} />
          </button>

        </div>
      </div>

      {/* 3D TILT EFFECT */}
      <script>
        {`
        document.querySelectorAll('.card-tilt').forEach(card => {
          card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / 20) * -1;
            const rotateY = (x - centerX) / 20;
            card.style.transform = 
              'perspective(900px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
          });
          card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
          });
        });
        `}
      </script>

    </div>
  );
}
