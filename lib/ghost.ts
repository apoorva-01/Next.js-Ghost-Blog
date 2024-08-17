import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL as string,
  key: process.env.GHOST_API_KEY as string,
  version: 'v3.0'
});

export async function getPosts() {
  return await api.posts.browse({ limit: 'all' , include: 'tags'});
}

// Fetch a specific post by its slug
export async function getPostBySlug(slug: string) {
    try {
      const post = await api.posts.read({ slug });
      return post;
    } catch (err) {
      console.error(`Error fetching post with slug ${slug}:`, err);
      return null;
    }
  }