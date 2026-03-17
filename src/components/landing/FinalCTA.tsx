import { Chrome } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-24 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
          Take Back Control of Your Inbox
        </h2>
        <p className="text-blue-100 text-xl mb-12 leading-relaxed">
          Join thousands of users who have already saved hundreds of hours by
          automating their email maintenance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-50 transition-all shadow-xl"
          >
            <Chrome className="w-5 h-5" />
            Add to Chrome — It&apos;s Free
          </a>
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center bg-blue-700 text-white border border-blue-400 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-800 transition-all"
          >
            Start Cleaning
          </a>
        </div>

        <p className="mt-8 text-blue-200 text-sm">
          No credit card required. Works with any standard Gmail account.
        </p>
      </div>
    </section>
  )
}
