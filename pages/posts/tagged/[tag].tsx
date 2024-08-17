import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { slugify } from "@/lib/utils";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { getPosts } from "@/lib/ghost";

interface ContextProps extends ParsedUrlQuery {
  tag: string;
}

interface PostsProps {
  tag: string;
  posts: Array<any>; // Update this type based on the structure returned by Ghost
}

const Posts: NextPage<PostsProps> = ({ tag, posts }) => {
  return (
    <>
      <Page title={`Posts tagged: "${tag}"`}>
        <PostList posts={posts} />
      </Page>
    </>
  );
};

// Fetch all possible tags from the Ghost API
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const allTags = Array.from(
    new Set(
      posts
        .flatMap((post) =>
          post.tags?.map((tag) => tag.name).filter((name): name is string => !!name) || []
        )
        .map((tag) => slugify(tag))
    )
  );

  return {
    paths: allTags.map((tag) => ({
      params: { tag },
    })),
    fallback: false,
  };
};

// Fetch all posts with the specified tag
export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as ContextProps;
  const posts = await getPosts();
  const filteredPosts = posts.filter((post) =>
    post.tags?.some((t) => t.name && slugify(t.name) === tag)
  );

  return {
    props: {
      tag,
      posts: filteredPosts,
    },
  };
};

export default Posts;