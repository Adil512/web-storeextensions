import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageHero, ContentPageMain, ContentSection } from "@/components/content-page";
import { SITE_NAME } from "@/lib/brand";
import { canonicalUrl } from "@/lib/site-url";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Terms of Service – ${SITE_NAME}`,
    description:
      `Review the detailed Terms of Service for ${SITE_NAME}. Covers listing requirements, marketplace interactions, intellectual property, advertising policies, and platform rules.`,
    alternates: { canonical: await canonicalUrl("/terms") },
  };
}

export default function TermsPage() {
  return (
    <div className="min-h-[50vh] bg-zinc-50">
      <ContentPageHero
        title="Terms of Service"
        subtitle={`Please read these Terms of Service carefully before accessing or using ${SITE_NAME}.`}
      />
      <ContentPageMain>
        <p className="text-xs font-medium text-zinc-500">Last updated: March 2026</p>

        <ContentSection title="1. Agreement to Terms">
          <p>
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;)
            and {SITE_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing, browsing, submitting content to, or registering an account on
            {SITE_NAME} (accessible at https://webstoreextensions.com), you acknowledge that you have read, understood, and agreed to be bound by these Terms and our{" "}
            <Link href="/privacy" className="font-medium text-orange-600 hover:text-orange-700">
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            If you do not agree to these Terms in their entirety, you must immediately discontinue your use of our platform.
          </p>
        </ContentSection>

        <ContentSection title="2. Description of the Platform & Marketplace">
          <p>
            {SITE_NAME} operates as an independent discovery directory and community marketplace for browser extensions (including extensions for Google Chrome, Mozilla Firefox, Microsoft Edge, Opera, and Brave).
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>We allow extension developers (&quot;Sellers&quot; or &quot;Makers&quot;) to create profiles, showcase approved extensions, and indicate availability for acquisition or sale.</li>
            <li>We enable prospective users, developers, and acquirers (&quot;Buyers&quot;) to discover extensions, inspect public performance metrics, and submit acquisition inquiries.</li>
            <li><strong>Zero Broker Model:</strong> {SITE_NAME} is an introductory discovery directory and communication facilitator. Unless expressly stated in a written escrow service agreement, {SITE_NAME} does not act as an escrow agent, broker, or financial custodian in extension transactions. Parties conduct their own legal and financial due diligence.</li>
          </ul>
        </ContentSection>

        <ContentSection title="3. User Accounts & Registration">
          <p>
            To access certain platform features—such as submitting an extension, upvoting, participating in the community, or sending direct marketplace inquiries—you must register an account.
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>You agree to provide true, accurate, and current information during registration and keep your account profile updated.</li>
            <li>You are responsible for safeguarding your login credentials and for all activities that occur under your account.</li>
            <li>You must notify us immediately of any unauthorized access or security compromise involving your account.</li>
            <li>We reserve the right to suspend, disable, or terminate any account that violates these Terms or engages in deceptive practices.</li>
          </ul>
        </ContentSection>

        <ContentSection title="4. Extension Submissions & Moderation Guidelines">
          <p>
            All browser extension listings submitted to {SITE_NAME} are subject to administrative review and moderation. By submitting an extension, you represent and warrant that:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-zinc-900">Legitimate Ownership or Authorization:</strong> You are the verified author, developer, or authorized representative with full rights to list the extension.
            </li>
            <li>
              <strong className="font-semibold text-zinc-900">Official Store Verification:</strong> Your extension is published on an official, publicly accessible browser store (e.g., Chrome Web Store, Mozilla Add-ons, Microsoft Edge Add-ons) and complies with that store&apos;s developer program policies.
            </li>
            <li>
              <strong className="font-semibold text-zinc-900">Safety & Malware Prohibition:</strong> The extension does not contain spyware, malware, adware, hidden crypto-miners, unauthorized data loggers, or malicious code that compromises user privacy or browser security.
            </li>
            <li>
              <strong className="font-semibold text-zinc-900">Truth in Metrics:</strong> Any reported active user counts, revenue metrics, download figures, or store links are truthful, verifiable, and not manipulated through artificial means.
            </li>
            <li>
              <strong className="font-semibold text-zinc-900">Right of Rejection or Removal:</strong> {SITE_NAME} reserves the sole right to approve, reject, edit, categorize, or permanently remove any listing at any time for any reason, including policy violations, store takedowns, or reports of abuse.
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="5. Prohibited Conduct & Community Standards">
          <p>When using {SITE_NAME}, you agree not to:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Violate any applicable federal, state, local, or international law or regulation.</li>
            <li>Post or transmit spam, chain letters, pyramid schemes, or unsolicited commercial advertising.</li>
            <li>Attempt to reverse engineer, decompile, scrape, crawl, or harvest platform data without our prior written consent.</li>
            <li>Artificially manipulate upvotes, rankings, reviews, or listing popularity through bots, automated scripts, or fake accounts.</li>
            <li>Engage in harassment, abusive behavior, hate speech, defamation, or impersonation of another person or entity.</li>
            <li>Interfere with or disrupt the security, integrity, or operational performance of the website or servers.</li>
          </ul>
        </ContentSection>

        <ContentSection title="6. Intellectual Property & Trademarks">
          <p>
            The website design, branding, code, layouts, and compilation of listings on {SITE_NAME} are the proprietary intellectual property of {SITE_NAME} and its licensors.
          </p>
          <p>
            <strong>Third-Party Trademarks:</strong> &quot;Google Chrome&quot;, &quot;Chrome Web Store&quot;, &quot;Mozilla Firefox&quot;, &quot;Microsoft Edge&quot;, &quot;Brave&quot;, &quot;Opera&quot;, and related logos and trademarks are the property of their respective owners. Their mention on this platform is solely for descriptive and informational identification purposes. {SITE_NAME} is an independent directory and is not affiliated with, sponsored by, or endorsed by Google, Mozilla, Microsoft, or any browser vendor.
          </p>
        </ContentSection>

        <ContentSection title="7. Google AdSense & Third-Party Advertising Policy">
          <p>
            {SITE_NAME} displays digital advertisements provided by third-party ad networks, including <strong>Google AdSense</strong>.
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Users agree not to click on advertisements deceitfully or encourage others to artificially inflate clicks or impressions.</li>
            <li>We do not place ads on pages containing prohibited content under Google Publisher Policies (e.g., malware, illegal goods, copyrighted infringements).</li>
            <li>Advertisements are labeled appropriately according to advertising standards. For more information on how Google AdSense handles advertising cookies, please consult our{" "}
              <Link href="/privacy" className="font-medium text-orange-600 hover:text-orange-700">
                Privacy Policy
              </Link>.
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="8. Marketplace Inquiries & Transaction Disclaimers">
          <p>
            Any negotiations, communications, agreements, or transactions conducted between buyers and sellers who connect through {SITE_NAME} are solely between those respective parties.
          </p>
          <p>
            {SITE_NAME} makes no representations, warranties, or guarantees regarding the legal transferability, quality, revenue, accuracy, or profitability of any browser extension listed for sale. Both buyers and sellers are strongly advised to engage licensed legal and escrow professionals before transferring funds, source code, developer accounts, or API keys.
          </p>
        </ContentSection>

        <ContentSection title="9. Disclaimer of Warranties">
          <p>
            {SITE_NAME} IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
        </ContentSection>

        <ContentSection title="10. Limitation of Liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {SITE_NAME}, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS REPUTATION) ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF (OR INABILITY TO USE) THE PLATFORM, ANY LISTINGS, OR ANY THIRD-PARTY EXTENSIONS.
          </p>
        </ContentSection>

        <ContentSection title="11. Indemnification">
          <p>
            You agree to defend, indemnify, and hold harmless {SITE_NAME} and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your violation of these Terms, your submitted listings, or your infringement of third-party rights.
          </p>
        </ContentSection>

        <ContentSection title="12. Modifications to Terms & Service">
          <p>
            We reserve the right to revise or replace these Terms at our discretion at any time. When modifications are made, the updated version will be posted here with a revised &quot;Last updated&quot; timestamp. Continued use of {SITE_NAME} after any amendments signifies your acceptance of the updated Terms.
          </p>
        </ContentSection>

        <ContentSection title="13. Contact & Inquiries">
          <p>
            If you have questions, inquiries, or need support regarding these Terms of Service, please get in touch via our{" "}
            <Link href="/contact" className="font-medium text-orange-600 hover:text-orange-700">
              Contact Form
            </Link>{" "}
            or email us directly at <strong className="font-medium text-zinc-900">support@webstoreextensions.com</strong>.
          </p>
        </ContentSection>
      </ContentPageMain>
    </div>
  );
}
