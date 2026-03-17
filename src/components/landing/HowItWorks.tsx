import Image from "next/image"

const STEPS = [
  {
    number: "1",
    title: "Connect Your Account",
    description: "Securely link your Gmail account with one click using Google OAuth. No password stored.",
  },
  {
    number: "2",
    title: "Analyze Your Inbox",
    description: "InboxHero scans for bulk senders and email patterns without reading your private content.",
  },
  {
    number: "3",
    title: "Select & Clean",
    description: "Choose the senders you want to clear out. Bulk move hundreds of emails to Trash in seconds.",
  },
  {
    number: "4",
    title: "Inbox Cleaned!",
    description: "Enjoy your tidy inbox. Emails go to Gmail Trash where you can recover them anytime within 30 days.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            See InboxHero in Action
          </h2>
          <p className="text-gray-600 text-lg">A simple 4-step workflow to reach Inbox Zero.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {STEPS.map(({ number, title, description }) => (
              <div
                key={number}
                className="flex gap-6 items-start p-6 rounded-2xl bg-white shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-base">
                  {number}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-blue-50 rounded-3xl p-12 flex flex-col items-center justify-center gap-6">
              <Image
                src="/icon512.png"
                alt="InboxHero"
                width={96}
                height={96}
                className="rounded-2xl shadow-lg"
              />
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">InboxHero</p>
                <p className="text-gray-500 mt-1">Gmail Inbox Cleaner</p>
              </div>
              <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100">
                  <p className="text-2xl font-bold text-blue-600">10x</p>
                  <p className="text-xs text-gray-500 mt-1">Faster cleanup</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-emerald-100">
                  <p className="text-2xl font-bold text-emerald-600">Safe</p>
                  <p className="text-xs text-gray-500 mt-1">Trash, not delete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
