import { Chrome, ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-24 md:pt-36 md:pb-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8 border border-blue-100">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          Chrome Extension for Gmail
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
          Clean Your Gmail Inbox{" "}
          <br className="hidden sm:block" />
          <span className="text-blue-600">In Seconds</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed">
          InboxHero helps you review, organize, and bulk-clean unwanted emails
          directly inside Gmail — with a simple, safe workflow.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg"
          >
            <Chrome className="w-5 h-5" />
            Add to Chrome — Free
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all"
          >
            See how it works
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-5">
          Free to install · No credit card · Works with any Gmail account
        </p>
      </div>
    </section>
  )
}
