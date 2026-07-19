const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-white">
          Programs & Services
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          This page is currently under development.
        </p>

        <div className="mt-16 rounded-xl border border-slate-800 bg-slate-900 p-10">
          <h2 className="text-2xl font-semibold text-cyan-400">
            Coming Soon
          </h2>

          <ul className="mt-8 space-y-4 text-slate-300">
            <li>🎓 College Training</li>
            <li>🚀 Interview Preparation</li>
            <li>👨‍🏫 Career Mentoring</li>
            <li>⚙ Corporate Consulting</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;