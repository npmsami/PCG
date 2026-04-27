import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArticleSchema, BreadcrumbSchema } from '../../components/SchemaOrg';
import { blogPosts, blogTopics } from '../../data/blogs';
import type { Metadata } from 'next';
import '../../styles/blogs.css';

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | PCG Contractors Blog`,
    description: post.excerpt,
    keywords: [
      post.topic.replace(/-/g, ' '),
      'home repair Texas',
      'PCG Contractors',
      'storm damage restoration Texas',
    ],
    authors: [{ name: 'PCG Contractors' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://pcgroofing.net/blogs/${post.slug}`,
      siteName: 'PCG Contractors',
      type: 'article',
      publishedTime: post.publishDate,
      authors: ['PCG Contractors'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://pcgroofing.net/blogs/${post.slug}`,
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const topicLabel = blogTopics.find(t => t.id === post.topic)?.label;

  const breadcrumbItems = [
    { name: 'Home', url: 'https://pcgroofing.net' },
    { name: 'Blogs', url: 'https://pcgroofing.net/blogs' },
    { name: post.title, url: `https://pcgroofing.net/blogs/${post.slug}` }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.trim().startsWith('-')) {
        const items = paragraph.split('\n').filter(line => line.trim().startsWith('-'));
        return (
          <ul key={index}>
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>{item.replace(/^-\s*/, '')}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index}>{paragraph}</p>
      );
    });
  };

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        publishDate={post.publishDate}
        slug={post.slug}
        readTime={post.readTime}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <main>
        <Navigation />
        <div className="container">
        <Link href="/blogs" className="blog-back-link">
          ← Back to Blogs
        </Link>

        <div className="blog-detail-container">
          <div className="blog-detail-header">
            <h1 className="heading-1 blog-detail-title">{post.title}</h1>

            <div className="blog-detail-meta">
              <span className="blog-detail-date">
                {formatDate(post.publishDate)}
              </span>
              <span className="blog-detail-read-time">
                {post.readTime} min read
              </span>
              <span className="blog-detail-topic">
                {topicLabel}
              </span>
            </div>
          </div>

          <div className="blog-content">
            {renderContent(post.content)}
          </div>
        </div>
      </div>

        <Footer />
      </main>
    </>
  );
}
