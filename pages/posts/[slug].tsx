import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";
import Breadcrumb from '../../components/Breadcrumb';
import { getPosts, getPostBySlug } from "@/lib/ghost";
import siteConfig from "@/data/siteConfig";
import Image from "next/image";
interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

interface PostProps {
  post: any; // Define a proper type based on the Ghost API response structure
  previous: any | null;
  next: any | null;
}

const Post: NextPage<PostProps> = ({ post, previous, next }) => {
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
                 Written by<br/>
                  {siteConfig?.authorName}
                </span>
              )}
            </div>
      <Page title={post.title} description={post.excerpt} date={post.updated_at} slug={post.slug} >

        <Prose>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Prose>
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