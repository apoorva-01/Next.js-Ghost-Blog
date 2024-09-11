import GhostContentAPI from '@tryghost/content-api';
const api = new GhostContentAPI({
  url: "https://ghost.apoorvaverma.in" as string,
  key: "402ae69d00660c74a363d61d51" as string,
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

// Fetch posts by tag
export async function getPostsByTag(tag: string) {
  return await api.posts.browse({ limit: 'all', include: 'tags', filter: `tag:${tag}` });
}

interface CustomPost {
  guide_name?: string;
  priority?: number;
  // Add other properties if needed
}

// Define the type for the grouped posts object with dynamic keys
type GroupedPosts = {
  [guideName: string]: CustomPost[];
};

export async function getGuideIntroPost(guideName: string) {
  const posts = await api.posts.browse({
    limit: 'all',
    include: 'tags',
  });

  const scriptRegex = /<script\s+type=["']application\/json["']>(.*?)<\/script>/s;

  // Filter and extract metadata from posts
  const postsWithMetadata = posts.map(post => {
      const metadataScript = post.codeinjection_head?.match(scriptRegex);
      if (metadataScript) {
        try {
          const metadata = JSON.parse(metadataScript[1].trim());
          if (metadata.guide_name) {
            // Type assertion to inform TypeScript that guide_name exists
            const customPost = post as CustomPost;
            customPost.guide_name = metadata.guide_name;
            customPost.priority = metadata.priority;
            return customPost;
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
      return null;
    })
    .filter(post => post !== null) as CustomPost[]; // Type assertion to filter the array

  // Filter posts by the provided guideName
  const filteredPosts = postsWithMetadata.filter(post => post.guide_name === guideName);

  // Sort the filtered posts by priority
  const sortedPosts = filteredPosts.sort((a, b) => (a.priority || 0) - (b.priority || 0));

  // Return the sorted posts grouped under the guideName
  return {
    guide_name: guideName,
    posts: sortedPosts
  };
}


export async function getPostsByTagForGuide() {
  const posts = await api.posts.browse({
    limit: 'all',
    include: 'tags',
  });

  const scriptRegex = /<script\s+type=["']application\/json["']>(.*?)<\/script>/s;

  // Filter and extract metadata from posts
  const postsWithMetadata = posts.map(post => {
      const metadataScript = post.codeinjection_head?.match(scriptRegex);
      if (metadataScript) {
        try {
          const metadata = JSON.parse(metadataScript[1].trim());
          if (metadata.guide_name) {
            // Type assertion to inform TypeScript that guide_name exists
            const customPost = post as CustomPost;
            customPost.guide_name = metadata.guide_name;
            customPost.priority = metadata.priority;
            return customPost;
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
      return null;
    })
    .filter(post => post !== null) as CustomPost[]; // Type assertion to filter the array

  // Group posts by guide_name
  const groupedPosts: GroupedPosts = postsWithMetadata.reduce((acc, post) => {
    const guideName = post.guide_name!;
    if (!acc[guideName]) {
      acc[guideName] = [];
    }
    acc[guideName].push(post);
    return acc;
  }, {} as GroupedPosts);

  // Convert groupedPosts object to an array of groups
  const groupedArray = Object.entries(groupedPosts).map(([guide_name, posts]) => ({
    guide_name,
    posts: posts.sort((a, b) => (a.priority || 0) - (b.priority || 0)) // Sort posts within each group by priority
  }));

// console.log(groupedArray)
  return groupedArray;
}