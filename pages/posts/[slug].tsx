import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";
import { getPosts, getPostBySlug } from "@/lib/ghost";


interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

interface PostProps {
  post: any; // Define a proper type based on the Ghost API response structure
  previous: any | null;
  next: any | null;
}

const Post: NextPage<PostProps> = ({ post, previous, next }) => {
  // console.log(post)
  return (
    <>
      <Page title={post.title} description={post.excerpt} date={post.updated_at} >
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