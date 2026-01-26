export const blogTopics = [
  { id: 'technology', label: 'Technology' },
  { id: 'ai', label: 'AI' },
  { id: 'product', label: 'Product' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'security', label: 'Security' },
  { id: 'business', label: 'Business' },
  { id: 'updates', label: 'Updates' },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  topic: string;
  publishDate: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-future-of-cloud-infrastructure',
    title: 'The Future of Cloud Infrastructure',
    excerpt: 'Exploring the latest trends in cloud computing and how they\'re transforming enterprise architecture.',
    content: `Cloud infrastructure continues to evolve at a rapid pace. In this comprehensive guide, we explore the key trends shaping the future of cloud computing.

From edge computing to serverless architecture, organizations are finding new ways to build scalable and efficient systems. The shift towards containerization and Kubernetes has fundamentally changed how we think about deployment and orchestration.

Key areas to focus on:
- Multi-cloud strategies
- Edge computing capabilities
- Cost optimization techniques
- Security and compliance

The organizations that adapt quickly to these changes will gain significant competitive advantages. Whether you're just starting with cloud or looking to optimize your existing infrastructure, understanding these trends is critical.`,
    topic: 'technology',
    publishDate: '2024-01-15',
    readTime: 8,
  },
  {
    id: '2',
    slug: 'ai-driven-automation-transforming-workflows',
    title: 'AI-Driven Automation: Transforming Workflows',
    excerpt: 'How artificial intelligence is revolutionizing business processes and improving efficiency.',
    content: `Artificial intelligence has moved beyond theoretical applications into practical, business-critical solutions. AI-driven automation is now transforming workflows across industries.

Modern AI systems can learn from data, identify patterns, and make intelligent decisions with minimal human intervention. This capability is being leveraged to streamline processes that previously required significant manual effort.

Practical applications include:
- Intelligent document processing
- Predictive maintenance systems
- Customer service automation
- Data analysis and insights

Organizations implementing AI automation are seeing measurable improvements in efficiency, accuracy, and cost reduction. The key to success is identifying the right processes to automate and ensuring proper integration with existing systems.`,
    topic: 'ai',
    publishDate: '2024-01-12',
    readTime: 10,
  },
  {
    id: '3',
    slug: 'building-scalable-product-architecture',
    title: 'Building Scalable Product Architecture',
    excerpt: 'Best practices for designing systems that grow with your business needs.',
    content: `Designing architecture for a growing product is one of the most important decisions you'll make. The decisions made early can have lasting impacts on your ability to scale effectively.

Scalable architecture isn't just about handling more users—it's about building systems that can evolve as requirements change. This means considering modularity, separation of concerns, and clear interfaces.

Essential principles:
- Database optimization and sharding strategies
- API design for scalability
- Caching mechanisms
- Load balancing approaches
- Microservices considerations

Starting with these principles in mind helps prevent costly rewrites and migrations later. While you don't need to anticipate every future requirement, building with flexibility and modularity in mind pays dividends.`,
    topic: 'product',
    publishDate: '2024-01-10',
    readTime: 9,
  },
  {
    id: '4',
    slug: 'security-best-practices-for-modern-applications',
    title: 'Security Best Practices for Modern Applications',
    excerpt: 'Essential security measures every development team should implement.',
    content: `Security is not an afterthought—it's a fundamental requirement. Modern applications face increasingly sophisticated threats, making robust security practices essential.

Every layer of your application needs attention: from API authentication to data encryption to infrastructure hardening. A single vulnerability can compromise your entire system.

Critical security measures:
- Secure authentication and authorization
- Data encryption in transit and at rest
- Regular security audits and penetration testing
- Dependency vulnerability scanning
- Incident response planning

By implementing comprehensive security practices from the start, you reduce risk and build trust with your users. Security should be baked into your development process, not added as an afterthought.`,
    topic: 'security',
    publishDate: '2024-01-08',
    readTime: 11,
  },
  {
    id: '5',
    slug: 'engineering-practices-that-scale',
    title: 'Engineering Practices That Scale',
    excerpt: 'Proven methodologies for building reliable and maintainable code.',
    content: `Building reliable systems at scale requires more than just writing code. It requires discipline, practices, and a culture focused on quality.

As teams grow and codebases expand, inconsistent practices become increasingly expensive. Implementing standardized engineering practices from early stages prevents technical debt accumulation.

Core practices to implement:
- Code review processes
- Automated testing strategies
- Continuous integration and deployment
- Documentation standards
- Performance monitoring

Teams that invest in these practices early enjoy smoother scaling and higher code quality. The initial overhead is quickly offset by reduced bugs, faster onboarding, and easier maintenance.`,
    topic: 'engineering',
    publishDate: '2024-01-05',
    readTime: 7,
  },
  {
    id: '6',
    slug: 'launching-new-features-effectively',
    title: 'Launching New Features Effectively',
    excerpt: 'Strategies for shipping features with confidence and measuring impact.',
    content: `Shipping new features is exciting, but it requires planning to ensure successful adoption and minimize issues. A thoughtful approach to feature launches leads to better outcomes.

From beta testing to gradual rollouts, there are multiple strategies to reduce risk. Feature flags, A/B testing, and monitoring are essential tools in a successful launch strategy.

Launch strategies to consider:
- Beta testing with selected users
- Gradual rollout to percentage of users
- Feature flag management
- A/B testing variations
- Performance monitoring

By implementing these strategies, you can gather real-world feedback, identify issues early, and make data-driven decisions. Each successful launch also provides valuable insights for future releases.`,
    topic: 'product',
    publishDate: '2024-01-03',
    readTime: 6,
  },
  {
    id: '7',
    slug: 'january-product-updates-2024',
    title: 'January Product Updates 2024',
    excerpt: 'This month we\'re excited to share our latest improvements and new capabilities.',
    content: `We're thrilled to announce a series of improvements and new features rolling out this month.

Performance improvements: Our optimization efforts have resulted in a 30% improvement in API response times across core endpoints.

New capabilities:
- Enhanced reporting dashboard
- Advanced filtering options
- Improved user interface responsiveness
- Better mobile experience
- Expanded API capabilities

We're also investing in infrastructure improvements to ensure reliability as we grow. Thank you to everyone who provided feedback—these updates directly address the issues you raised.

These updates are available to all users immediately. For detailed documentation, please visit our help center.`,
    topic: 'updates',
    publishDate: '2024-01-01',
    readTime: 5,
  },
];
