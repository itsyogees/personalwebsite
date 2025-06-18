"use client";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import styles from "./Blog.module.scss";
import Image from "next/image";

export default function page() {
  const featuredPosts = [
    {
      title: "Clean Architecture for Mobile Apps",
      excerpt: "Implementing clean architecture principles in Flutter and React Native applications",
      category: "Architecture",
      date: "June 10, 2023",
      readTime: "9 min read",
      image: "/images/WinForms.jpg",
      slug: "clean-architecture-mobile"
    },
    {
      title: "From .NET Dev to Architect",
      excerpt: "My personal roadmap for transitioning from developer to solution architect",
      category: "Career",
      date: "May 28, 2023",
      readTime: "7 min read",
      image: "/images/WinForms.jpg",
      slug: "dotnet-to-architect"
    },
    {
      title: "Server-Driven UI Explained",
      excerpt: "How we reduced app store submissions by 80% with server-driven UI",
      category: "Mobile",
      date: "May 15, 2023",
      readTime: "6 min read",
      image: "/images/WinForms.jpg",
      slug: "server-driven-ui"
    }
  ];

  const recentPosts = [
    {
      title: "My CTO Transition Plan",
      excerpt: "Preparing for executive leadership in tech organizations",
      category: "Career",
      date: "June 5, 2023",
      readTime: "8 min read",
      slug: "cto-transition-plan"
    },
    {
      title: "Cloud Cost Optimization Patterns",
      excerpt: "Architectural patterns that reduced our AWS bill by 40%",
      category: "Cloud",
      date: "May 22, 2023",
      readTime: "10 min read",
      slug: "cloud-cost-optimization"
    },
    {
      title: "Flutter State Management 2023",
      excerpt: "Comparing Riverpod, Bloc, and Provider for large-scale apps",
      category: "Mobile",
      date: "May 10, 2023",
      readTime: "12 min read",
      slug: "flutter-state-management"
    },
    {
      title: "Architecting for Scale",
      excerpt: "Lessons from building systems that handle 10x traffic spikes",
      category: "Architecture",
      date: "April 28, 2023",
      readTime: "15 min read",
      slug: "architecting-for-scale"
    }
  ];

  const categories = [
    { name: "Architecture", count: 15 },
    { name: "Cloud", count: 9 },
    { name: "Mobile", count: 12 },
    { name: "Career Advice", count: 11 },
    { name: "Leadership", count: 5 }
  ];

  return (
    <div className={styles.blog}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Tech Architecture Blog</h1>
          <p className={styles.subtitle}>
            Practical insights on software architecture, mobile development, and tech career growth
          </p>
          <div className={styles.ctaWrapper}>
            <a href="#featured" className={styles.ctaButton}>
              Read Featured Posts <FaArrowRight className={styles.arrowIcon} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured" className={styles.featured}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Posts</h2>
          <div className={styles.featuredGrid}>
            {featuredPosts.map((post, index) => (
              <div key={index} className={styles.featuredCard}>
                <div className={styles.postImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className={styles.image}
                  />
                  <div className={styles.categoryTag}>{post.category}</div>
                </div>
                <div className={styles.postContent}>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span className={styles.metaItem}>
                      <FaCalendarAlt className={styles.metaIcon} /> {post.date}
                    </span>
                    <span className={styles.metaItem}>
                      <FaClock className={styles.metaIcon} /> {post.readTime}
                    </span>
                  </div>
                  <a href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read More <FaArrowRight className={styles.arrowIcon} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Recent Posts */}
            <div className={styles.postsColumn}>
              <h2 className={styles.sectionTitle}>Recent Articles</h2>
              <div className={styles.postsList}>
                {recentPosts.map((post, index) => (
                  <article key={index} className={styles.postCard}>
                    <div className={styles.postHeader}>
                      <span className={styles.postCategory}>{post.category}</span>
                      <h3 className={styles.postTitle}>
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                      </h3>
                    </div>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <div className={styles.postMeta}>
                      <span className={styles.metaItem}>
                        <FaCalendarAlt className={styles.metaIcon} /> {post.date}
                      </span>
                      <span className={styles.metaItem}>
                        <FaClock className={styles.metaIcon} /> {post.readTime}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
              <div className={styles.pagination}>
                <a href="#" className={styles.pageLink}>1</a>
                <a href="#" className={styles.pageLink}>2</a>
                <a href="#" className={styles.pageLink}>3</a>
                <a href="#" className={styles.nextLink}>
                  Next <FaArrowRight className={styles.arrowIcon} />
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Categories</h3>
                <ul className={styles.categoryList}>
                  {categories.map((category, index) => (
                    <li key={index} className={styles.categoryItem}>
                      <a href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}>
                        {category.name} <span className={styles.categoryCount}>({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Architect's Digest</h3>
                <p className={styles.widgetText}>
                  Get monthly architecture insights and career advice
                </p>
                <form className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className={styles.emailInput}
                    required
                  />
                  <button type="submit" className={styles.subscribeButton}>
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}