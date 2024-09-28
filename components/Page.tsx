import Head from "next/head";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@/lib/formatDate";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";
import siteConfig from "@/data/siteConfig";
import Image from "next/image";

interface PageProps {
  date?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  slug?: string;
  thumbnail?: string;
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  date,
  title,
  description,
  slug,
  thumbnail,
  children,
}) => {
  const metaTitle = onlyText(title);
  const metaDescription = description
    ? onlyText(description)
    : siteConfig.siteDescription;
  const metaThumbnail = thumbnail ? thumbnail : siteConfig.siteThumbnail;
  const customTitle = `${metaTitle} - ${siteConfig.siteName}`;

  // Create the JSON-LD schema
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metaTitle,
    description: metaDescription,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
    },
    datePublished: date || new Date().toISOString(),
    image: `${siteConfig.siteUrl}${metaThumbnail}`,
    articleBody: children ? onlyText(children) : "",
  };

  return (
    <>
      <Head>
        <title>{customTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`${siteConfig.siteUrl}posts/${slug}`} />

        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={date} />

        <meta name="apple-mobile-web-app-title" content={siteConfig.siteName} />
        <meta name="application-name" content={siteConfig.siteName} />
        <meta name="msapplication-TileColor" content="#0698E5" />
        <meta name="theme-color" content="#ffffff" />
        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`${siteConfig.siteUrl}posts/${slug}`} />
        <meta property="og:image" content={`${siteConfig.siteUrl}${metaThumbnail}`} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={siteConfig.siteName} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <meta property="article:publisher" content={siteConfig.social?.linkedin} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={siteConfig.siteThumbnail} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:creator" content={siteConfig.twitterUsername} />
        <meta name="twitter:site" content={siteConfig.twitterUsername} />
        {/* Add JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>

      </Head>
      <header
        className={cx(
          "mb-8 pb-8 border-b",
          "border-gray-200",
          "dark:border-gray-700"
        )}
      >
      
        {/* {date ? (
          <time className={cx("block mb-2", "text-gray-500", "dark:text-gray-400")}>
            {formatDate(date)}
          </time>
        ) : null} */}

        <h1 className="font-bold text-4xl">{title}</h1>

        {description ? (
          <div className="mt-4">
            <Prose>
              {typeof description === "string" ? (
                <p className="text-xl" >{description}</p>
              ) : (
                description
              )}
            </Prose>
          </div>
        ) : null}

      </header>
      {children}
    </>
  );
};
