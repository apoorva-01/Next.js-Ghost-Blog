import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import siteConfig from "@/data/siteConfig";

const TermsOfService: NextPage = () => {
  return (
    <>
      <Page
        title="Terms of Service - Apoorva Verma"
        description="These Terms of Service govern your use of our website and services.">
        <Prose>
          <p>Effective date: September 21, 2024</p>
          <p>
            Welcome to {siteConfig.siteName}. By accessing or using our website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
          </p>

          <h2>Use of Our Website</h2>
          <p>
            You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The content, design, and layout of our website are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
          </p>

          <h2>User Accounts</h2>
          <p>
            If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {siteConfig.siteName} shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law principles.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by updating the effective date at the top of this policy. Your continued use of the website after any changes constitutes your acceptance of the new terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at {siteConfig.contactEmail}.
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default TermsOfService;