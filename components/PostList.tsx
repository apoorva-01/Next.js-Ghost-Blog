import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/data/siteConfig";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "./Tag";
import Image from "next/image";
interface PostListProps {
  posts: Array<any>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  // console.log(posts)
  return (
    <ul
      className={cx(
        "divide-y -my-8",
        "divide-gray-200",
        "dark:divide-gray-700"
      )}
    >
      {posts.map((post, index) => (
        <li className="py-8" key={index}>
          <article>
            {/* <time
              className={cx(
                "block mb-2",
                "text-gray-500",
                "dark:text-gray-400"
              )}
            >
              {formatDate(post.updated_at)}
            </time> */}
            <h2 className="font-bold text-xl">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            {post.excerpt ? (
              <div className="mt-3">
                <Prose>
                  <p>{post.excerpt}</p>
                </Prose>
              </div>
            ) : null}
            {post.tags?.length ? (
              <ul className="mt-4 flex flex-wrap space-x-2">
                {post.tags.filter((tag: any) => tag.visibility === 'public').map((tag: any, index: number) => (
                  <li key={index}>
                    <Tag href={`/posts/tagged/${slugify(tag.name)}`}>{tag.name}</Tag>
                  </li>
                ))}
              </ul>
            ) : null}
            {/* Author Info Below the Tags */}
            <div className="flex items-center mt-4">
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
                  {siteConfig?.authorName}<br />
                  <time className={cx("block mb-2", "text-gray-500", "dark:text-gray-400")}>
                    {formatDate(post.updated_at)}
                  </time>
                </span>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};