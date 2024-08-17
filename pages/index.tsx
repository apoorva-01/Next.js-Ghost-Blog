import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { PostList } from "@/components/PostList";
import { Page } from "@/components/Page";
import { getPosts } from "../lib/ghost";
import { ArrowRight } from "react-feather";
interface PostProps {
  posts: Array<any>;
}

const Posts: NextPage<PostProps> = ({ posts }) => {
  return (
    <>
      <Page
        title={`Hi, I'm ${process.env.NEXT_PUBLIC_AUTHOR_NAME}`}
        description="A personal blog focused on DevOps"
      >
        <PostList posts={posts} />
        <div className="mt-8">
          <Link
            passHref
            href="/posts"
            className="group inline-flex items-center gap-2 text-pink-600"
          >
            View more posts{" "}
            <ArrowRight
              className="group-hover:translate-x-0.5 transition-transform"
              width={".9em"}
            />
          </Link>
        </div>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
// console.log(posts)
  return {
    props: { posts },
  };
};

export default Posts;