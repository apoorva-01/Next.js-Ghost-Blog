const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const GhostContentAPI = require('@tryghost/content-api');

// Initialize Ghost Content API
const api = new GhostContentAPI({
  url: "https://ghost.apoorvaverma.in",
  key: "402ae69d00660c74a363d61d51",
  version: 'v3.0',
});

/**
 * Fetch posts using the GhostContentAPI
 */
async function fetchPosts() {
  try {
    // Fetch all posts including tags
    const posts = await api.posts.browse({ limit: 'all', include: 'tags' });

    return posts.map((post) => ({
      url: `/posts/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return [];
  }
}

/**
 * Generate Sitemap
 */
async function generateSitemap() {
  const hostname = 'https://apoorvaverma.in'; // Replace with your website's hostname

  // Define static pages
  const staticPages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  ];

  // Fetch dynamic posts from Ghost CMS
  const dynamicPosts = await fetchPosts();

  // Combine static and dynamic URLs
  const allPages = [...staticPages, ...dynamicPosts];

  // Create a sitemap stream
  const stream = new SitemapStream({ hostname });

  // Pipe the stream into an XML string
  const xmlString = await streamToPromise(Readable.from(allPages).pipe(stream)).then((data) =>
    data.toString()
  );

  // Write the sitemap to a file in the /public directory
  fs.writeFileSync('./public/sitemap.xml', xmlString);
  console.log('Sitemap generated successfully!');
}

// Run the script
generateSitemap();