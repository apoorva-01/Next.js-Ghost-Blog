import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import siteConfig from "@/data/siteConfig";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Page
        title="Privacy Policy - Apoorva Verma"
        description="This Privacy Policy explains how we collect, use, and disclose information about you when you use our website.">
        <Prose>
          <p>Effective date: September 21, 2024</p>
          <p>
            At {siteConfig.siteName}, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This information may include:
          </p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Any other details you provide us with</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            The information we collect may be used for the following purposes:
          </p>
          <ul>
            <li>To provide, maintain, and improve our website and services</li>
            <li>To respond to your comments, questions, and requests</li>
            <li>To send you promotional materials or communications</li>
            <li>To monitor and analyze trends and usage of our website</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>
            We do not sell or share your personal information with third parties for their marketing purposes. However, we may share your information with trusted third-party service providers to help us operate and improve our website, as well as comply with legal obligations.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can choose to accept or decline cookies through your browser settings.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect the personal information we collect from unauthorized access, use, or disclosure.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may opt-out of receiving promotional communications from us by following the unsubscribe instructions in those communications or by contacting us directly.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make changes, we will notify you by updating the effective date at the top of this policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at {siteConfig.contactEmail}.
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default PrivacyPolicy;