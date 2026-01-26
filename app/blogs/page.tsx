'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { blogTopics, blogPosts } from '../data/blogs';
import '../styles/blogs.css';

export default function Blogs() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!selectedTopic) return blogPosts;
    return blogPosts.filter(post => post.topic === selectedTopic);
  }, [selectedTopic]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <main>
      <Navigation />

      <div className="container">
        <div className="blogs-header">
          <h1 className="heading-1">Blogs</h1>
          <p className="text-large blogs-intro">
            Discover insights, updates, and practical knowledge from our team. We share our expertise on technology, product development, and industry best practices.
          </p>
        </div>

        <div className="topics-section">
          <span className="topics-label">Filter by Topic</span>
          <div className="topics-grid">
            {blogTopics.map(topic => (
              <button
                key={topic.id}
                className={`topic-button ${selectedTopic === topic.id ? 'active' : ''}`}
                onClick={() => setSelectedTopic(topic.id)}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-posts-section">
          <div className="blog-posts-header">
            <h2 className="heading-2">
              {selectedTopic
                ? `${blogTopics.find(t => t.id === selectedTopic)?.label} Posts`
                : 'All Posts'}
            </h2>
            {selectedTopic && (
              <button
                className="clear-filter"
                onClick={() => setSelectedTopic(null)}
              >
                Clear Filter
              </button>
            )}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map(post => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.slug}`}
                  className="blog-card"
                >
                  <div className="blog-header">
                    <h3 className="blog-title">{post.title}</h3>
                  </div>

                  <div className="blog-meta">
                    <span className="blog-date">
                      {formatDate(post.publishDate)}
                    </span>
                    <span className="blog-read-time">
                      {post.readTime} min read
                    </span>
                  </div>

                  <span className="blog-topic-tag">
                    {blogTopics.find(t => t.id === post.topic)?.label}
                  </span>

                  <p className="blog-excerpt">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No posts found</h3>
              <p>Try selecting a different topic or view all posts.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
