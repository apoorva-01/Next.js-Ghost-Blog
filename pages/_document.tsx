import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext } from "next/document";
import { cx } from "@/lib/utils";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html lang="en">
        <Head>
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0CD4FNJY1H"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0CD4FNJY1H');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        </Head>
        <body
          className={cx(
            "bg-gray-50 text-gray-800",
            "dark:bg-gray-900 dark:text-gray-50"
          )}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;