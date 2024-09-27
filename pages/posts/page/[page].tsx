import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { getPosts } from '../../../lib/ghost'; // Adjust path based on your structure
import type { GhostPost } from "@/lib/types";

import { GetStaticPaths, GetStaticProps } from 'next';

type PostProps = {
  posts: GhostPost[];
  currentPage: number;
  totalPages: number;
};

const POSTS_PER_PAGE = 10;

export default function Posts({ posts, currentPage, totalPages }: PostProps) {
  return (
    <>
      <Page
        // title={`Posts - Page ${currentPage}`}
        title=""
        description="">
        <PostList posts={posts} />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <div className="pagination">
            <a href={currentPage > 1 ? `/posts/page/${currentPage - 1}` : '#'}>&laquo;</a>
            {Array.from({ length: totalPages }, (_, index) => (
              <a
                key={index}
                href={`/posts/page/${index + 1}`}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </a>
            ))}
            <a href={currentPage < totalPages ? `/posts/page/${currentPage + 1}` : '#'}>&raquo;</a>
          </div>
        </div>
      </Page>
 
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const paths = Array.from({ length: totalPages }, (_, index) => ({
    params: { page: (index + 1).toString() }
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = parseInt(context.params?.page as string, 10);
  const allPosts = await getPosts();


  // Define the script regex pattern
  const scriptRegex = /<script\s+type=["']application\/json["']>(.*?)<\/script>/s;

  // Filter posts based on the priority in metadata
  const filteredPosts = allPosts.filter(post => {
    if (post.codeinjection_head) {
      const metadataScript = post.codeinjection_head.match(scriptRegex);
      if (metadataScript) {
        try {
          const metadata = JSON.parse(metadataScript[1].trim());
          // Only include posts where priority is not 0
          return metadata.priority !== 0;
        } catch (error) {
          console.error('Error parsing JSON metadata:', error);
        }
      }
    }
    // Exclude posts that don't match the condition
    return true;
  });

    // Paginate the filtered posts
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const posts = filteredPosts.slice(start, end);
  
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  return {
    props: {
      posts,
      currentPage: page,
      totalPages
    }
  };
};