import { AlertCircle, ArchiveX, Clock } from "lucide-react"

export function TrustStrip() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Inbox Is Out of Control
          </h2>
          <p className="text-gray-600 text-lg">
            Managing an overflowing inbox is a full-time job. It shouldn&apos;t be.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-6">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">10,000+ Unread</h3>
            <p className="text-gray-600 leading-relaxed">
              Crucial emails buried under months of automated reports and notifications you never read.
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
              <ArchiveX className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Newsletter Hell</h3>
            <p className="text-gray-600 leading-relaxed">
              Subscribed to dozens of newsletters? Finding the email you actually want is like finding a needle in a haystack.
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Wasted Time</h3>
            <p className="text-gray-600 leading-relaxed">
              Deleting emails one by one costs you hours every month. A messy inbox shouldn&apos;t steal your focus every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
