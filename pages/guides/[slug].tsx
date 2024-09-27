import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import { getGuideIntroPost, getPosts } from "@/lib/ghost";
import Breadcrumb from '../../components/Breadcrumb';
interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

interface PostProps {
  guide: any; // Define a proper type based on the Ghost API response structure
}

const Post: NextPage<PostProps> = ({ guide }) => {
  const [guideIntroPost, ...posts] = guide.posts;
  // const guideScriptData = guide.posts[0].codeinjection_head.match(/<script type="application\/json">([\s\S]*?)<\/script>/);
  // const postMetadata = JSON.parse(guideScriptData[1].trim())
  return (
    <>
      {/* <Page title={guideIntroPost.title} description={guideIntroPost.excerpt} date={guideIntroPost.updated_at} > */}
        {/* <Prose>
          <div dangerouslySetInnerHTML={{ __html: guideIntroPost.html }} />
        </Prose> */}
         <Breadcrumb />
         <br /><br />

        <div className="w-full bg-gray-100 px-4 py-3 text-left text-gray-800 break-words max-w-md rounded">
          <div className="mx-auto text-3xl font-semibold"><strong>Table of content</strong></div>
          <ul className="mt-2 list-disc px-2 pl-6">

            {posts.map((post: any, index: any) => (
              <li className="flex items-center" key={index}>
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <h2 className="text-md">
                  <Link className="block hover:bg-gray-200 px-2 py-1 rounded" href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
              </li>
            ))}
          </ul>
        </div>
      {/* </Page> */}
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
  const guide = await getGuideIntroPost(slug); // Fetch the post by slug from Ghost

  return {
    props: {
      guide
    },
  };
};

export default Post;