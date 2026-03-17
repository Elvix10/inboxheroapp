export function ComingSoon() {
  const ITEMS = [
    { emoji: "🤖", title: "AI Cleaning", description: "Smart categorization of important vs junk mail." },
    { emoji: "🔕", title: "Unsubscribe Pro", description: "One-click unsubscribe from pesky newsletters." },
    { emoji: "📊", title: "Sender Insights", description: "Analytics on who sends you the most emails." },
    { emoji: "📈", title: "Inbox Velocity", description: "Track how fast your inbox grows over time." },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 text-lg">We&apos;re just getting started. Here&apos;s what&apos;s in the lab.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {ITEMS.map(({ emoji, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center"
            >
              <span className="text-3xl mb-4">{emoji}</span>
              <h5 className="font-bold text-gray-900 mb-2">{title}</h5>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Want a specific feature?{" "}
          <a
            href="mailto:support@inboxhero.app"
            className="text-blue-600 hover:text-blue-700 underline underline-offset-2 transition-colors"
          >
            Let us know
          </a>
        </p>
      </div>
    </section>
  )
}
