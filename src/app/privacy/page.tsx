import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy — InboxHero",
  description:
    "Learn how InboxHero handles your data. We do not read email content and do not store any email data on external servers.",
}

const LAST_UPDATED = "March 15, 2026"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/icon512.png"
                alt="InboxHero logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-sm font-semibold text-slate-900 tracking-tight">
                InboxHero
              </span>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Review notice */}
       

        {/* Page title */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Content */}
        <div className="prose-custom space-y-10">
          <Section title="1. Overview">
            <p>
              InboxHero (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a
              Chrome extension that helps users clean and organize their Gmail
              inbox. This Privacy Policy explains what information InboxHero
              accesses, how it is used, and what we do not do.
            </p>
            <p>
              We are committed to protecting your privacy. InboxHero is
              designed to operate with the minimum permissions necessary and
              with full transparency about data handling.
            </p>
          </Section>

          <Divider />

          <Section title="2. What InboxHero accesses">
            <p>
              InboxHero uses the Gmail API provided by Google. To function,
              the extension requests the following Gmail permissions:
            </p>
            <ul>
              <li>
                <strong>Read access to message metadata</strong> — InboxHero
                reads sender information and message counts to display
                them to you. It does not read the body or subject of
                your emails.
              </li>
              <li>
                <strong>Modify access to messages</strong> — InboxHero
                moves selected emails to Gmail Trash when you choose to
                clean them. This is only done upon your explicit action.
              </li>
            </ul>
            <Callout>
              InboxHero never reads the content of your emails. Subject lines,
              message bodies, and attachments are never accessed or processed.
            </Callout>
          </Section>

          <Divider />

          <Section title="3. What InboxHero does NOT do">
            <ul>
              <li>
                Does not read, scan, or store the content of your emails.
              </li>
              <li>
                Does not send your data to any external server or third party.
              </li>
              <li>
                Does not permanently delete emails. Emails you clean are moved
                to Gmail Trash, where they remain for 30 days before Gmail
                removes them automatically unless you restore them.
              </li>
              <li>Does not create an account or require sign-up.</li>
              <li>Does not track your usage or behavior for advertising.</li>
              <li>
                Does not share any data with other products, companies, or
                individuals.
              </li>
            </ul>
          </Section>

          <Divider />

          <Section title="4. Data storage">
            <p>
              InboxHero does not operate any backend server. No email data,
              metadata, or account information is stored outside of your
              device.
            </p>
            <p>
              Any temporary data required to operate the extension (such as
              session tokens from Google OAuth) is handled locally in your
              browser in accordance with Chrome extension storage APIs and
              Google&apos;s own security standards.
            </p>
          </Section>

          <Divider />

          <Section title="5. Google OAuth and permissions">
            <p>
              InboxHero uses Google&apos;s OAuth 2.0 flow to authenticate with
              your Gmail account. By granting access, you allow InboxHero to
              perform actions described in Section 2 on your behalf.
            </p>
            <p>
              You can revoke InboxHero&apos;s access to your Google account at
              any time by visiting{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                Google Account Permissions
              </a>
              .
            </p>
            <p>
              InboxHero&apos;s use of Google APIs complies with the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
          </Section>

          <Divider />

          <Section title="6. Children's privacy">
            <p>
              InboxHero is not intended for use by children under the age of
              13. We do not knowingly collect personal information from
              children. If you believe a child has provided personal
              information through our extension, please contact us so we can
              take appropriate action.
            </p>
          </Section>

          <Divider />

          <Section title="7. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will update the &quot;Last updated&quot; date at the top of this page.
              We encourage you to review this policy periodically.
            </p>
            <p>
              Continued use of InboxHero after any changes constitutes
              acceptance of the updated policy.
            </p>
          </Section>

          <Divider />

          <Section title="8. Contact">
            <p>
              If you have any questions or concerns about this Privacy Policy
              or how InboxHero handles your data, please reach out to us:
            </p>
            <div className="mt-4 inline-block bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
              <p className="text-sm text-slate-500 mb-1">Email</p>
              <a
                href="mailto:support@inboxhero.app"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                support@inboxhero.app
              </a>
            </div>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} InboxHero. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
            >
              Home
            </Link>
            <a
              href="mailto:support@inboxhero.app"
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ─── Sub-components ────────────────────────────────────────────────

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-5">
        {title}
      </h2>
      <div className="space-y-5 text-base text-slate-700 leading-[1.85] [&_ul]:space-y-3 [&_ul]:list-none [&_ul]:pl-0 [&_ul>li]:flex [&_ul>li]:gap-2.5 [&_ul>li]:before:content-['–'] [&_ul>li]:before:text-slate-400 [&_ul>li]:before:shrink-0 [&_strong]:font-semibold [&_strong]:text-slate-900">
        {children}
      </div>
    </section>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 mt-4">
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
      <p className="text-sm font-medium text-blue-800 leading-relaxed">
        {children}
      </p>
    </div>
  )
}

function Divider() {
  return <hr className="border-slate-100" />
}
