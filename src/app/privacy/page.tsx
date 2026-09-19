import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageHero, ContentPageMain, ContentSection } from "@/components/content-page";
import { SITE_NAME } from "@/lib/brand";
import { canonicalUrl } from "@/lib/site-url";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Privacy Policy – ${SITE_NAME}`,
    description:
      `Read the comprehensive Privacy Policy for ${SITE_NAME}. Learn how we collect, use, protect personal information, cookies, Google AdSense, third-party analytics, and data protection rights.`,
    alternates: { canonical: await canonicalUrl("/privacy") },
  };
}

export default function PrivacyPage() {
  return (
    <div className="min-h-[50vh] bg-zinc-50">
      <ContentPageHero
        title="Privacy Policy"
        subtitle={`This Privacy Policy explains how ${SITE_NAME} ("we", "us", or "our") collects, uses, discloses, and protects your information when you access or use our website, marketplace, and related services.`}
      />
      <ContentPageMain>
        <p className="text-xs font-medium text-zinc-500">Last updated: March 2026</p>

        <ContentSection title="1. Introduction & Scope">
          <p>
            At {SITE_NAME}, accessible at https://webstoreextensions.com, respecting user privacy and protecting personal data
            is a top priority. This Privacy Policy governs your use of our platform, directory, marketplace, and any
            associated subdomains or services (collectively, the &quot;Service&quot;).
          </p>
          <p>
            By accessing or using our Service, you acknowledge that you have read, understood, and agreed to be bound by
            this Privacy Policy and our{" "}
            <Link href="/terms" className="font-medium text-orange-600 hover:text-orange-700">
              Terms of Service
            </Link>
            . If you do not agree with any part of this policy, please do not access or use {SITE_NAME}.
          </p>
        </ContentSection>

        <ContentSection title="2. Information We Collect">
          <p>
            We collect personal and technical information to provide, maintain, optimize, and secure our marketplace.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-zinc-900">Personal Information You Provide:</strong> When you register an
              account, list an extension, make a marketplace inquiry, or contact us, you may provide your name, email
              address, username, bio, developer profile links (GitHub, Twitter/X, LinkedIn, website), and communication messages.
            </li>
            <li>
              <strong className="font-semibold text-zinc-900">Extension & Marketplace Submissions:</strong> Information
              about browser extensions submitted for listing or sale, including extension title, store URLs (Chrome Web Store,
              Firefox Add-ons, Microsoft Edge Add-ons), descriptions, pricing, metrics, categories, and uploaded assets.
            </li>
            <li>
              <strong className="font-semibold text-zinc-900">Log & Device Data:</strong> Like most online platforms, our
              servers automatically log information transmitted by your browser or device, such as Internet Protocol (IP) address,
              browser vendor and version, operating system, referring URLs, pages viewed, time spent on pages, and standard server request logs.
            </li>
            <li>
              <strong className="font-semibold text-zinc-900">Cookies & Tracking Technologies:</strong> We use cookies,
              local storage, and similar technologies to preserve sessions, remember user preferences, analyze platform usage,
              and deliver contextual advertising.
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="3. Google AdSense & Third-Party Advertising (Critical Notice)">
          <p>
            We may partner with third-party advertising networks, including <strong>Google AdSense</strong>, to display
            advertisements across our website.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Google and other third-party vendors use cookies to serve ads based on your prior visits to our website or
              other websites on the Internet.
            </li>
            <li>
              Google&apos;s use of advertising cookies (such as the DoubleClick DART cookie) enables it and its partners to
              serve ads to you based on your visits to our site and/or other sites across the web.
            </li>
            <li>
              You may opt out of personalized advertising by visiting Google&apos;s Ads Settings at{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-600 underline hover:text-orange-700"
              >
                https://www.google.com/settings/ads
              </a>
              .
            </li>
            <li>
              Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-600 underline hover:text-orange-700"
              >
                AboutAds.info Choices
              </a>{" "}
              or{" "}
              <a
                href="https://www.youronlinechoices.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-600 underline hover:text-orange-700"
              >
                Your Online Choices
              </a>
              .
            </li>
            <li>
              Third-party ad servers or ad networks may also use technologies like JavaScript or web beacons to measure the
              effectiveness of their advertisements and personalize the advertising content you see. {SITE_NAME} has no
              access to or control over cookies used by third-party advertisers.
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="4. How We Use Your Information">
          <p>We use the collected information for lawful business and operational purposes, including:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Operating, updating, and maintaining the {SITE_NAME} directory and marketplace.</li>
            <li>Creating, verifying, and administering user and developer accounts.</li>
            <li>Facilitating communications and inquiries between prospective extension buyers and sellers.</li>
            <li>Moderating extension listings to ensure safety, policy adherence, and authentic store links.</li>
            <li>Analyzing website performance, monitoring traffic trends, and troubleshooting technical issues.</li>
            <li>Detecting, investigating, and preventing fraud, unauthorized access, or abusive behavior.</li>
            <li>Serving relevant, non-intrusive advertisements to support the ongoing availability of the platform.</li>
            <li>Complying with applicable laws, regulations, and legal obligations.</li>
          </ul>
        </ContentSection>

        <ContentSection title="5. Data Sharing & Third-Party Service Providers">
          <p>
            <strong>We do not sell, rent, or trade your personal information.</strong> We only share information in the following limited circumstances:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-zinc-900">Infrastructure Providers:</strong> We work with trusted
              cloud hosting and database service providers (e.g., Supabase, Vercel/cloud infrastructure) who host data under
              rigorous confidentiality and security obligations.
            </li>
            <li>
              <strong className="font-semibold text-zinc-900">Public Marketplace Information:</strong> Any information you
              publicly submit for publication—such as your public username, bio, approved extension listings, and public community
              contributions—is visible to other users.
            </li>
            <li>
              <strong className="font-semibold text-zinc-900">Legal Compliance:</strong> We may disclose information if
              required to do so by law, subpoena, or in response to valid requests by public authorities to protect rights, safety, or property.
            </li>
            <li>
              <strong className="font-semibold text-zinc-900">Business Transfers:</strong> In the event of a merger, acquisition,
              or asset sale, user information may be transferred as a business asset subject to this Privacy Policy.
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="6. Cookies & Browser Controls">
          <p>
            Cookies are small text files stored on your device. We use essential session cookies to authenticate your account
            and remember settings, along with analytics and advertising cookies.
          </p>
          <p>
            You can configure your browser to refuse all or some browser cookies, or to alert you when cookies are being sent.
            Please note that disabling essential cookies may impact certain platform features like logging into your account.
          </p>
        </ContentSection>

        <ContentSection title="7. Data Protection Rights (GDPR, UK GDPR & CCPA/CPRA)">
          <p>
            Depending on your jurisdiction, you may hold certain statutory rights regarding your personal information:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li><strong className="font-semibold text-zinc-900">Right of Access:</strong> You have the right to request copies of your personal data held by us.</li>
            <li><strong className="font-semibold text-zinc-900">Right to Rectification:</strong> You can request correction of inaccurate or incomplete information.</li>
            <li><strong className="font-semibold text-zinc-900">Right to Erasure (Right to be Forgotten):</strong> You can request deletion of your account and personal data, subject to legal retention obligations.</li>
            <li><strong className="font-semibold text-zinc-900">Right to Restrict Processing & Object:</strong> You may object to or request restriction of data processing in certain circumstances.</li>
            <li><strong className="font-semibold text-zinc-900">Right to Data Portability:</strong> You can request transfer of your data to another organization.</li>
            <li><strong className="font-semibold text-zinc-900">California Privacy Rights (CCPA/CPRA):</strong> California residents have the right not to be discriminated against for exercising privacy rights and the right to opt out of the sale or sharing of personal information. As noted, {SITE_NAME} does not sell your personal data.</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please reach out through our{" "}
            <Link href="/contact" className="font-medium text-orange-600 hover:text-orange-700">
              Contact page
            </Link>
            . We respond to all verified requests within the statutory timeframe.
          </p>
        </ContentSection>

        <ContentSection title="8. Children's Privacy (COPPA Compliance)">
          <p>
            {SITE_NAME} does not knowingly solicit or collect personal information from children under the age of 13
            (or under 16 where applicable by law). If you believe that a child has provided us with personal data without parental consent,
            please contact us immediately, and we will promptly remove such information from our records.
          </p>
        </ContentSection>

        <ContentSection title="9. Data Security & Storage">
          <p>
            We implement industry-standard administrative, technical, and physical safeguards designed to protect personal
            data against unauthorized access, loss, destruction, or alteration. Authentication passwords are encrypted and
            hashed by cryptographic standards. While we strive to protect all information, no method of transmission over the Internet
            is 100% secure.
          </p>
        </ContentSection>

        <ContentSection title="10. External Links & Official Stores">
          <p>
            Our directory contains links to official browser extension stores (such as Google Chrome Web Store, Firefox Add-ons,
            and Microsoft Edge Add-ons) as well as third-party websites. {SITE_NAME} is not responsible for the privacy practices,
            content, or policies of external websites. We encourage you to read the privacy statements of every site you visit.
          </p>
        </ContentSection>

        <ContentSection title="11. Changes to This Privacy Policy">
          <p>
            We may revise this Privacy Policy periodically to reflect changes in our legal obligations, platform features,
            or advertising practices. We will post the revised policy on this page with an updated &quot;Last updated&quot; date.
            Your continued use of {SITE_NAME} after changes are posted constitutes acceptance of the modified policy.
          </p>
        </ContentSection>

        <ContentSection title="12. Contact Information">
          <p>
            If you have questions, feedback, or privacy-related requests, please contact us via our{" "}
            <Link href="/contact" className="font-medium text-orange-600 hover:text-orange-700">
              Contact Form
            </Link>{" "}
            or email us at <strong className="font-medium text-zinc-900">support@webstoreextensions.com</strong>.
          </p>
        </ContentSection>
      </ContentPageMain>
    </div>
  );
}
