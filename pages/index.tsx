import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Page } from "@/components/Page";
import { getPosts, getPostsByTagForGuide } from "../lib/ghost";
import Image from 'next/image';
interface PostProps {
  guides: Array<any>;
}

const Posts: NextPage<PostProps> = ({ guides }) => {
  return (
    <>


      <Page
        title={`Hi, I'm ${process.env.NEXT_PUBLIC_AUTHOR_NAME}`}
        description={(<>I&apos;ve been diving into the world of DevOps, learning the ins and outs of making development and operations work better together. <br />
          <b>Along the way, I&apos;ve picked up some cool tips, tricks, and a few lessons learned the hard way—So why not share them? 😉 </b></>)}>

        {guides.map((guide, idx) => {
          const [guideIntroPost, ...posts] = guide.posts;
          const guideScriptData = guideIntroPost.codeinjection_head.match(/<script type="application\/json">([\s\S]*?)<\/script>/);
          const guideData = JSON.parse(guideScriptData[1].trim())


          return (
            <div className="mt-5 block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" key={idx}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Image */}
              {guideIntroPost.feature_image ? (
                <div className="md:col-span-1">
                  <a href={`/guides/${guideData.guide_name}`} className="flex-shrink-0">
                    <Image
                     className="rounded-lg w-full" // Added w-full for 100% width
                      src={guideIntroPost.feature_image}
                      alt="Description of the image"
                      width={500}
                      height={300}
                    />
                  </a>
                </div>
              ) : null}
          
              {/* Intro */}
              <div className="p-3 md:col-span-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  What you&apos;ll learn
                </h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {guideData.guide_description}
                </p>
              </div>
          
              {/* List */}
              <div className="p-3 md:col-span-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {posts.length} Resources
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  {posts.slice(0, 6).map((post: any, index: any) => (
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
                      <h2 className="text-sm">
                        <Link href={`/posts/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          );
        })}
      </Page>
    </>
  );
};


export async function getStaticProps() {
  const guides = await getPostsByTagForGuide();
  return {
    props: {
      guides,
    },
    revalidate: 10,
  };
}

export default Posts;
