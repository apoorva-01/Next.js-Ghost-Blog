import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { getPosts } from '../../lib/ghost';
import type { GhostPost } from "@/lib/types";


type PostProps = {
  posts: GhostPost[];
};
export default function Posts({ posts }: PostProps)  {
  return (
    <>
      <Page
        title="Posts"
        description="">
        <PostList posts={posts} />
      </Page>
    </>
  );
};


export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts }
  };
}

