import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service — InboxHero",
  description:
    "Read the Terms of Service for InboxHero, the Gmail inbox cleaner Chrome extension.",
}

const LAST_UPDATED = "March 17, 2026"

export default function TermsPage() {
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
        {/* Page title */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Content */}
        <div className="prose-custom space-y-10">
          <Section title="1. Acceptance of Terms">
            <p>
              By installing or using the InboxHero Chrome extension
              (&quot;Service&quot;), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;). If you do not agree to these Terms,
              please do not use the Service.
            </p>
            <p>
              These Terms apply to all users of InboxHero. We reserve the
              right to update these Terms at any time. Continued use of the
              Service after changes are posted constitutes your acceptance of
              the revised Terms.
            </p>
          </Section>

          <Divider />

          <Section title="2. Description of Service">
            <p>
              InboxHero is a Chrome browser extension that helps you manage and
              clean your Gmail inbox. It reads email metadata (sender, message
              count) and, upon your explicit action, moves selected emails to
              Gmail Trash.
            </p>
            <p>
              InboxHero does not permanently delete emails. All cleaned emails
              are moved to Gmail Trash, where they remain recoverable for 30
              days per Google&apos;s standard retention policy.
            </p>
          </Section>

          <Divider />

          <Section title="3. Eligibility">
            <p>
              You must be at least 13 years old to use InboxHero. By using the
              Service, you represent and warrant that you meet this age
              requirement and that you have the legal capacity to enter into
              these Terms.
            </p>
            <p>
              InboxHero requires a valid Google account with Gmail access. You
              are responsible for maintaining the security of your Google
              account.
            </p>
          </Section>

          <Divider />

          <Section title="4. Acceptable Use">
            <p>You agree to use InboxHero only for lawful purposes. You must not:</p>
            <ul>
              <li>Use the Service to violate any applicable law or regulation.</li>
              <li>
                Attempt to reverse-engineer, decompile, or extract the source
                code of InboxHero.
              </li>
              <li>
                Use the Service in any way that could damage, disable, or
                impair it or interfere with other users.
              </li>
              <li>
                Circumvent or attempt to bypass any security measures of the
                Service or of Google&apos;s systems.
              </li>
              <li>
                Use automated scripts or bots in conjunction with InboxHero.
              </li>
            </ul>
          </Section>

          <Divider />

          <Section title="5. Google Account and Permissions">
            <p>
              InboxHero uses Google OAuth 2.0 to access your Gmail account on
              your behalf. By granting access, you authorize InboxHero to
              perform the actions described in Section 2 within the scope of
              the permissions you approve.
            </p>
            <p>
              You can revoke InboxHero&apos;s access at any time by visiting{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                Google Account Permissions
              </a>
              . Revoking access will immediately stop InboxHero from accessing
              your Gmail data.
            </p>
            <Callout>
              InboxHero is not affiliated with, endorsed by, or sponsored by
              Google LLC. Gmail is a trademark of Google LLC.
            </Callout>
          </Section>

          <Divider />

          <Section title="6. Disclaimer of Warranties">
            <p>
              The Service is provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, either express or
              implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted,
              error-free, or free of viruses or other harmful components. You
              use the Service at your own risk.
            </p>
          </Section>

          <Divider />

          <Section title="7. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, InboxHero and
              its developers shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of data, loss of emails, or loss of profits,
              arising out of or in connection with your use of the Service.
            </p>
            <p>
              In no event shall our total liability to you for all claims
              arising from or related to the Service exceed the amount you paid
              for the Service in the twelve months preceding the claim, or
              €10, whichever is greater.
            </p>
          </Section>

          <Divider />

          <Section title="8. Indemnification">
            <p>
              You agree to indemnify and hold harmless InboxHero and its
              developers from and against any claims, damages, losses,
              liabilities, costs, and expenses (including reasonable legal
              fees) arising out of or relating to your use of the Service or
              your violation of these Terms.
            </p>
          </Section>

          <Divider />

          <Section title="9. Intellectual Property">
            <p>
              All content, design, code, and materials within InboxHero are
              the intellectual property of InboxHero and its developers. You
              may not copy, reproduce, distribute, or create derivative works
              from any part of the Service without our prior written consent.
            </p>
          </Section>

          <Divider />

          <Section title="10. Termination">
            <p>
              We reserve the right to suspend or terminate your access to the
              Service at any time, with or without notice, for conduct that we
              believe violates these Terms or is harmful to other users, us, or
              third parties, or for any other reason at our sole discretion.
            </p>
            <p>
              You may stop using the Service at any time by uninstalling the
              InboxHero extension from your browser.
            </p>
          </Section>

          <Divider />

          <Section title="11. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of Portugal, without regard to its conflict of law
              provisions. Any disputes arising from these Terms or the Service
              shall be subject to the exclusive jurisdiction of the courts
              located in Portugal.
            </p>
          </Section>

          <Divider />

          <Section title="12. Contact">
            <p>
              If you have any questions about these Terms of Service, please
              contact us:
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
            <Link
              href="/privacy"
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
            >
              Privacy Policy
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
      <h2 className="text-xl font-bold text-slate-900 mb-5">{title}</h2>
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
