import {
  Search,
  Check,
  ShieldCheck,
  Calendar,
  Tag,
  Users,
  Trash2,
  Download,
  Zap,
} from "lucide-react"
import Image from "next/image"

// Screen 1: Login / Welcome
function LoginScreen() {
  return (
    <div className="w-full bg-white px-5 py-6 flex flex-col items-center text-center">
      <Image
        src="/icon512.png"
        alt="InboxHero"
        width={40}
        height={40}
        className="rounded-xl mb-3"
      />
      <h3 className="text-[13px] font-bold text-slate-800 mb-1">InboxHero</h3>
      <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
        Clean your inbox. Keep your mind clear.
      </p>

      <div className="w-full bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2.5 mb-4 flex items-start gap-2 text-left">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-px" />
        <p className="text-[10px] text-emerald-700 leading-snug">
          We never delete emails permanently. We only move them to Trash.
        </p>
      </div>

      <p className="text-[10px] text-slate-400 mb-3">
        Connect your Gmail account to get started.
      </p>

      <div className="w-full h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-700">
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Sign in with Google
      </div>
    </div>
  )
}

// Screen 2: Analyze
function AnalyzeScreen() {
  return (
    <div className="w-full bg-white">
      <div className="bg-[#f4f6fc] px-5 pt-5 pb-4">
        <div className="flex justify-center mb-3">
          <div className="w-11 h-11 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center">
            <Search className="w-5 h-5 text-blue-500" />
          </div>
        </div>
        <h3 className="text-[13px] font-bold text-slate-800 text-center">
          Analyze my Inbox
        </h3>
        <p className="text-[10px] text-slate-400 text-center mt-0.5">
          Reading email metadata, not content.
        </p>
      </div>

      <div className="px-5 py-4 space-y-2.5">
        {["Old Emails", "Promotions & Newsletters", "Top Senders"].map(
          (item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-blue-500" strokeWidth={3} />
              </span>
              <span className="text-[11px] text-slate-600">{item}</span>
            </div>
          )
        )}
      </div>

      <div className="px-5 pb-4">
        <div className="w-full h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-[11px] font-bold">
          Analyze my Inbox
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="bg-blue-50 rounded-xl px-3 py-2.5 border border-blue-100">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-bold text-blue-700">
              Pro - Active
            </span>
          </div>
          <p className="text-[9px] text-blue-400 mt-0.5">
            Renews on 13 de abril de 2026
          </p>
        </div>
      </div>
    </div>
  )
}

// Screen 3: Results / Categories
function ResultsScreen() {
  return (
    <div className="w-full bg-white">
      {/* Stats */}
      <div className="flex gap-2 px-4 py-3 border-b border-slate-100">
        <div className="flex-1 bg-slate-50 rounded-xl px-2.5 py-2 border border-slate-100">
          <p className="text-[8px] text-slate-400 uppercase tracking-wide font-semibold mb-0.5">
            Emails Scanned
          </p>
          <p className="text-base font-bold text-slate-800 leading-none">18</p>
        </div>
        <div className="flex-1 bg-blue-50 rounded-xl px-2.5 py-2 border border-blue-100">
          <p className="text-[8px] text-blue-400 uppercase tracking-wide font-semibold mb-0.5">
            Can Be Deleted
          </p>
          <p className="text-base font-bold text-blue-700 leading-none">2</p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pt-3 pb-2 space-y-2">
        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-2">
          Select Categories to Clean
        </p>

        {/* Old Emails - selected */}
        <div className="bg-blue-50 rounded-xl p-2.5 border border-blue-100 flex items-start gap-2">
          <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center shrink-0 mt-px">
            <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-blue-400 shrink-0" />
                <span className="text-[11px] font-semibold text-slate-700">
                  Old Emails
                </span>
              </div>
              <span className="text-[9px] bg-blue-100 text-blue-500 px-1.5 py-0.5 rounded-full font-semibold shrink-0">
                0 emails
              </span>
            </div>
            <p className="text-[9px] text-slate-400 mt-0.5">
              Emails older than 3 years.
            </p>
          </div>
        </div>

        {/* Promotions - selected */}
        <div className="bg-orange-50 rounded-xl p-2.5 border border-orange-100 flex items-start gap-2">
          <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center shrink-0 mt-px">
            <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1">
                <Tag className="w-3 h-3 text-orange-400 shrink-0" />
                <span className="text-[11px] font-semibold text-slate-700 truncate">
                  Promotions &amp; Newsl...
                </span>
              </div>
              <span className="text-[9px] bg-orange-100 text-orange-500 px-1.5 py-0.5 rounded-full font-semibold shrink-0">
                2 emails
              </span>
            </div>
            <p className="text-[9px] text-slate-400 mt-0.5">
              Marketing or automated messages.
            </p>
          </div>
        </div>

        {/* Top Senders - unchecked */}
        <div className="rounded-xl p-2.5 border border-slate-100 flex items-start gap-2">
          <div className="w-4 h-4 rounded border border-slate-300 bg-white shrink-0 mt-px" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-slate-300 shrink-0" />
                <span className="text-[11px] font-semibold text-slate-500">
                  Top Senders
                </span>
              </div>
              <span className="text-[9px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded-full font-semibold shrink-0">
                0 emails
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action button */}
      <div className="px-4 pb-3">
        <div className="w-full h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-[11px] font-bold">
          Move to Trash (2)
        </div>
      </div>

      {/* Pro card */}
      <div className="px-4 pb-4">
        <div className="bg-blue-50 rounded-xl px-3 py-2 border border-blue-100">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-bold text-blue-700">
              Pro - Active
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Screen 4: Success
function SuccessScreen() {
  return (
    <div className="w-full bg-white px-5 py-6 flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
        <Check className="w-7 h-7 text-emerald-500" strokeWidth={2.5} />
      </div>

      <h3 className="text-[13px] font-bold text-slate-800 mb-1">
        Inbox Cleaned!
      </h3>
      <p className="text-[11px] text-slate-600 mb-1">
        2 emails were moved to Trash.
      </p>
      <p className="text-[10px] text-slate-400 mb-5 leading-relaxed">
        You can restore them from Gmail Trash anytime.
      </p>

      <div className="w-full grid grid-cols-2 gap-2 mb-5">
        <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100 text-left">
          <div className="flex items-center gap-1 mb-1">
            <Trash2 className="w-3 h-3 text-emerald-500" />
            <span className="text-[9px] text-emerald-600 font-semibold">
              Emails trashed
            </span>
          </div>
          <p className="text-xl font-bold text-emerald-700 leading-none">2</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-3 border border-blue-100 text-left">
          <div className="flex items-center gap-1 mb-1">
            <Download className="w-3 h-3 text-blue-500" />
            <span className="text-[9px] text-blue-600 font-semibold">
              Space freed
            </span>
          </div>
          <p className="text-sm font-bold text-blue-700 leading-none">
            104.1 KB
          </p>
        </div>
      </div>

      <div className="w-full h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-[11px] font-bold">
        Analyze Again
      </div>
    </div>
  )
}

// Step flow data
const STEPS = [
  {
    number: 1,
    title: "Connect your account",
    description: "Sign in securely with Google",
    Screen: LoginScreen,
  },
  {
    number: 2,
    title: "Analyze your inbox",
    description: "Scan for clutter by category",
    Screen: AnalyzeScreen,
  },
  {
    number: 3,
    title: "Select & clean",
    description: "Choose what to move to Trash",
    Screen: ResultsScreen,
  },
  {
    number: 4,
    title: "Done!",
    description: "Emails moved safely to Trash",
    Screen: SuccessScreen,
  },
]

export function Screenshots() {
  return (
    <section className="py-24 md:py-32 bg-[#f4f6fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Product preview
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            See InboxHero in action
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            A clean, focused interface that lives inside Gmail and gets out of
            your way.
          </p>
        </div>

        {/* 4-screen grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STEPS.map(({ number, title, description, Screen }) => (
            <div key={number} className="flex flex-col gap-3">
              {/* Step label */}
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {number}
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-slate-800 leading-tight">
                    {title}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {description}
                  </p>
                </div>
              </div>

              {/* Popup card */}
              <div className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white shadow-md shadow-slate-200/60 flex-1">
                <Screen />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
