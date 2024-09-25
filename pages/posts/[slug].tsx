import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";
import Breadcrumb from "../../components/Breadcrumb";
import { getPosts, getPostBySlug } from "@/lib/ghost";
import siteConfig from "@/data/siteConfig";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate";
import styled from "styled-components";
// import styles from '../../styles/Post.module.css';
interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

interface PostProps {
  post: any; // Define a proper type based on the Ghost API response structure
  previous: any | null;
  next: any | null;
}

const Post: NextPage<PostProps> = ({ post, previous, next }) => {
  console.log(post);
  const Container = styled.div`
    // Below is the styling that I want to apply only for posts not global styling

    body {
      line-height: 1.6;
      color: #374151;
      padding: 20px;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.4;
      color: rgb(0, 0, 0);
      margin-bottom: 10px;
    }

    h1 {
      font-size: 2rem;
      font-weight: 800;
    }

    h2 {
      font-size: 1.9rem;
      font-weight: 700;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    h4 {
      font-size: 1.125rem;
      font-weight: 600;
    }

    h5 {
      font-size: 1.125rem;
    }

    h6 {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 20px;
      font-weight: 400;
    }

    ul {
      list-style-type: disc;
      margin-left: 20px;
      margin-bottom: 15px;
    }

    li {
      margin-bottom: 10px;
    }

    figure {
      margin: 20px 0;
      text-align: center;
    }

    img {
      max-width: 100%;
      height: auto;
      border: 3px solid #ddd;
    }

    hr {
      border: 0;
      border-top: 2px solid #ccc;
      margin: 20px 0;
    }

    /* strong {
       color: #0399e3;
    } */

    blockquote {
      margin: 20px 0;
      padding: 10px 20px;
      border-left: 5px solid #ddd; /* Left border for emphasis */
      background-color: #f9f9f9; /* Light background color */
      color: #333; /* Text color */
      font-style: italic; /* Italic style for the quote */
    }


  
  `;

  return (
    <>
      <Breadcrumb />
      <br />
      <br />
      {/* Author Info Below the Tags */}
      <div className="flex items-center mb-2">
        {siteConfig?.authorName && (
          <Image
            width={30}
            height={30}
            src={siteConfig?.authorImage}
            alt={siteConfig?.authorName}
            className="rounded-full mr-3"
          />
        )}
        {siteConfig?.authorName && (
          <span className="text-xs text-gray-700 dark:text-gray-300">
            {siteConfig?.authorName} <br />
            {post.updated_at ? (
              <time
                className={cx(
                  "block mb-2",
                  "text-gray-500",
                  "dark:text-gray-400"
                )}
              >
                {formatDate(post.updated_at)}
              </time>
            ) : null}
          </span>
        )}
      </div>

      <Page
        title={post.title}
        description={post.excerpt}
        date={post.updated_at}
        slug={post.slug}
      >
        {/* <Prose> */}
        <Container>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
        {/* </Prose> */}
        {previous || next ? (
          <nav
            className={cx(
              "mt-8 pt-8 grid grid-cols-2 gap-8 border-t",
              "border-gray-200",
              "dark:border-gray-700"
            )}
          >
            {previous ? (
              <div>
                <p
                  className={cx(
                    "mb-2 uppercase tracking-wider text-sm",
                    "text-gray-500",
                    "dark:text-gray-400"
                  )}
                >
                  Previous
                </p>
                <Link href={`/posts/${previous.slug}`} className="font-bold">
                  {previous.title}
                </Link>
              </div>
            ) : null}
            {next ? (
              <div className="col-start-2 text-right">
                <p
                  className={cx(
                    "mb-2 uppercase tracking-wider text-sm",
                    "text-gray-500",
                    "dark:text-gray-400"
                  )}
                >
                  Next
                </p>
                <Link href={`/posts/${next.slug}`} className="font-bold">
                  {next.title}
                </Link>
              </div>
            ) : null}
          </nav>
        ) : null}
      </Page>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(); // Fetch all posts from Ghost
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false, // Or true/false based on your needs
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ContextProps;
  const post = await getPostBySlug(slug); // Fetch the post by slug from Ghost
  const posts = await getPosts();
  const postIndex = posts.findIndex((p) => p.slug === slug);

  return {
    props: {
      post,
      previous: posts[postIndex + 1] || null,
      next: posts[postIndex - 1] || null,
    },
  };
};

export default Post;
