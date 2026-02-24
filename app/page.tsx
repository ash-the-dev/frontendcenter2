"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAV */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="font-semibold tracking-tight">Frontend Center</div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white" href="#how">How</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#results">Results</a>
          <a className="hover:text-white" href="#audit">Free Audit</a>
        </nav>

        <a
          className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold hover:bg-emerald-500 transition"
          href="#audit"
        >
          Free Audit
        </a>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Web Development + SEO for small businesses
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
          We Build & Optimize Websites That Bring You More Customers
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          We improve speed, search rankings, and conversions so your website actually
          works for you. Clear plan, fast turnaround, measurable results.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#audit"
            className="rounded-full bg-emerald-600 px-6 py-3 font-semibold hover:bg-emerald-500 transition"
          >
            Get a Free Website & SEO Audit
          </a>

          <a
            href="#how"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-900 transition"
          >
            See How We Improve Sites
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-xs text-slate-400">
          <span className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1">Core Web Vitals</span>
          <span className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1">Technical SEO</span>
          <span className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1">Local SEO</span>
          <span className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1">Lead-focused pages</span>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-xl font-semibold">How it works</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Simple process. Clear deliverables. No confusion.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="text-2xl">1️⃣</div>
            <h3 className="mt-3 font-semibold">Free audit</h3>
            <p className="mt-2 text-sm text-slate-300">
              We review performance, SEO setup, and UX. You get a prioritized fix list.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="text-2xl">2️⃣</div>
            <h3 className="mt-3 font-semibold">Plan + estimate</h3>
            <p className="mt-2 text-sm text-slate-300">
              We recommend improvements that fit your goals and budget.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="text-2xl">3️⃣</div>
            <h3 className="mt-3 font-semibold">Build + optimize</h3>
            <p className="mt-2 text-sm text-slate-300">
              We implement, measure, and deliver a faster site that ranks better.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-xl font-semibold">Pricing</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Starting points. Final quotes depend on your site and goals.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="font-semibold">Starter</h3>
            <p className="mt-2 text-3xl font-bold">From $499</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc pl-5">
              <li>Speed + CWV quick wins</li>
              <li>Technical SEO cleanup</li>
              <li>Top conversion fixes</li>
            </ul>
            <a href="#audit" className="mt-6 inline-block rounded-full border border-slate-700 px-5 py-2 font-semibold hover:bg-slate-900 transition">
              Get a free audit
            </a>
          </div>

          <div className="rounded-2xl border border-emerald-700/60 bg-slate-900/40 p-6 ring-1 ring-emerald-700/30">
            <div className="inline-flex rounded-full bg-emerald-600/20 border border-emerald-700/40 px-3 py-1 text-xs text-emerald-200">
              Most popular
            </div>
            <h3 className="mt-3 font-semibold">Growth</h3>
            <p className="mt-2 text-3xl font-bold">From $1,499</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc pl-5">
              <li>Performance + SEO implementation</li>
              <li>Local SEO essentials</li>
              <li>Lead-focused page improvements</li>
            </ul>
            <a href="#audit" className="mt-6 inline-block rounded-full bg-emerald-600 px-5 py-2 font-semibold hover:bg-emerald-500 transition">
              Start with free audit
            </a>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="font-semibold">Rebuild</h3>
            <p className="mt-2 text-3xl font-bold">From $3,500</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc pl-5">
              <li>Modern responsive rebuild</li>
              <li>SEO foundation + structure</li>
              <li>Speed + accessibility baked in</li>
            </ul>
            <a href="#audit" className="mt-6 inline-block rounded-full border border-slate-700 px-5 py-2 font-semibold hover:bg-slate-900 transition">
              Request audit
            </a>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-xl font-semibold">Results</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Replace these with real client results as you collect them.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm text-slate-300">
              “Site loads fast now. We’re getting more calls and quote requests.”
            </p>
            <p className="mt-4 text-xs text-slate-400">Local service business</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm text-slate-300">
              “We started showing up on Google for our main services.”
            </p>
            <p className="mt-4 text-xs text-slate-400">Small business</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm text-slate-300">
              “Clear plan, quick wins first, then improvements that kept working.”
            </p>
            <p className="mt-4 text-xs text-slate-400">Owner-operator</p>
          </div>
        </div>
      </section>

      {/* AUDIT */}
      <section id="audit" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-xl font-semibold">Request Your Free Website & SEO Audit</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">
            Submit your site and we’ll send a prioritized list of improvements for speed, SEO, and conversions.
          </p>

          <form
            className="mt-6 grid gap-3 max-w-xl"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Captured ✅ Next step: connect this to email/API.");
            }}
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              className="rounded-full border border-slate-700 bg-slate-950/40 px-5 py-3 text-white placeholder:text-slate-500 outline-none focus:border-slate-500"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="rounded-full border border-slate-700 bg-slate-950/40 px-5 py-3 text-white placeholder:text-slate-500 outline-none focus:border-slate-500"
            />
            <input
              type="url"
              required
              placeholder="Your Website URL (https://...)"
              className="rounded-full border border-slate-700 bg-slate-950/40 px-5 py-3 text-white placeholder:text-slate-500 outline-none focus:border-slate-500"
            />
            <button
              type="submit"
              className="rounded-full bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500 transition"
            >
              Request Free Audit
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900/80">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-400 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Frontend Center</span>
          <a className="hover:text-white" href="mailto:hello@frontendcenter.com">
            hello@frontendcenter.com
          </a>
        </div>
      </footer>
    </main>
  );
}