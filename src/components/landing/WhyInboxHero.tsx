import { ShieldCheck } from "lucide-react"

const PRIVACY_POINTS = [
  "We never read your email content",
  "No data stored on external servers",
  "Actions only triggered by you",
  "OAuth verification by Google",
  "Emails go to Trash — never permanently deleted",
  "No sign-up or account required",
]

export function WhyInboxHero() {
  return (
    <section id="privacy" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl p-12 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-200">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Built with Privacy in Mind
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Your emails are personal. We believe your data should stay that way.
            InboxHero operates under strict privacy guidelines to ensure your safety.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5 text-left border-t border-gray-100 pt-10">
            {PRIVACY_POINTS.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


