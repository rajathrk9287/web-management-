import Head from 'next/head';
import Link from 'next/link';

export default function BlogIndexPage() {
  // Placeholder blog posts
  const posts = [
    { id: 1, title: 'Understanding Life Insurance', excerpt: 'A beginner\'s guide to life insurance types and benefits.' },
    { id: 2, title: 'Why Income Protection is Key for Self-Employed', excerpt: 'Exploring the importance of income protection for freelancers.' },
    { id: 3, title: 'Navigating TPD Claims', excerpt: 'What you need to know about the TPD claim process.' },
  ];

  return (
    <>
      <Head>
        <title>Resources & Blog - Your Fintech Partner</title>
        <meta name="description" content="Explore articles, guides, and resources on insurance and financial planning." />
      </Head>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Resources / Blog</h1>
        <p style={{ textAlign: 'center' }}>Welcome to our collection of articles and resources.</p>

        <div style={{ marginTop: '30px' }}>
          {posts.map(post => (
            <div key={post.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
              <h2>
                {/* In a real app, Link href would be to /blog/[slug] or /blog/[id] */}
                <Link href={`/blog#${post.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                  {post.title}
                </Link>
              </h2>
              <p>{post.excerpt}</p>
              {/* <Link href={`/blog#${post.id}`}>Read more</Link> */}
            </div>
          ))}
        </div>
        {/* Pagination can be added here later */}
      </div>
    </>
  );
}
