'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { blogPosts, blogTopics } from '../../data/blogs';
import '../../styles/blogs.css';

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const topicLabel = blogTopics.find(t => t.id === post.topic)?.label;

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
  );
}
