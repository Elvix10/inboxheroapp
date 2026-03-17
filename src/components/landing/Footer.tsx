import Image from "next/image"
import Link from "next/link"

const LINKS = [
  {
    label: "Product",
    items: [
      { text: "Features", href: "#features" },
      { text: "How it works", href: "#how-it-works" },
      { text: "Roadmap", href: "#roadmap" },
      { text: "Chrome Web Store", href: "#" },
    ],
  },
  {
    label: "Support",
    items: [
      { text: "Help Center", href: "#" },
      { text: "Contact", href: "mailto:support@inboxhero.app" },
      { text: "Report an issue", href: "mailto:support@inboxhero.app" },
    ],
  },
  {
    label: "Legal",
    items: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Image
                src="/icon512.png"
                alt="InboxHero logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold tracking-tight text-gray-900">
                InboxHero
              </span>
            </div>
            <p className="text-gray-600 text-lg max-w-sm">
              Built for Gmail users who want a cleaner inbox and a clearer mind.
            </p>
          </div>

          {/* Link columns */}
          {LINKS.map(({ label, items }) => (
            <div key={label}>
              <p className="font-bold text-gray-900 mb-6">
                {label}
              </p>
              <ul className="space-y-4">
                {items.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} InboxHero. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Not affiliated with Google or Gmail.
          </p>
        </div>
      </div>
    </footer>
  )
}
