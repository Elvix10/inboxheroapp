import { Search, UserX, Mail, ShieldCheck, EyeOff, Zap } from "lucide-react"

const FEATURES = [
  {
    icon: Search,
    title: "Inbox Analysis",
    description:
      "Quickly review your inbox and identify the senders taking up the most space — so you know exactly what to clean.",
  },
  {
    icon: UserX,
    title: "Clean by Sender",
    description:
      "Select and remove all emails from specific senders at once, rather than deleting them one by one.",
  },
  {
    icon: Mail,
    title: "Works inside Gmail",
    description:
      "No external site needed. Open InboxHero while on Gmail and get straight to work — no new tabs.",
  },
  {
    icon: ShieldCheck,
    title: "Move to Trash",
    description:
      "Emails are moved to Gmail Trash, not permanently deleted. You can recover them for 30 days.",
  },
  {
    icon: EyeOff,
    title: "Privacy First",
    description:
      "InboxHero processes only metadata. Your actual email content is never read or stored on any server.",
  },
  {
    icon: Zap,
    title: "Lightweight",
    description:
      "Optimized for performance. It won't slow down your browser or your Gmail experience.",
  },
]

export function CurrentFeatures() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Yet Minimal
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to stay organized, nothing you don&apos;t.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-50/50 group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
