"use client";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import styles from "./Blog.module.scss";
import Image from "next/image";

export default function page() {
  const featuredPosts = [
    {
      title: "WinForms to WinUI3 Migration Guide",
      excerpt: "Step-by-step guide to modernizing your desktop applications with the latest Windows UI framework",
      category: "Architecture",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "/images/WinForms.jpg",
      slug: "winforms-to-winui3-migration"
    },
    {
      title: "Top 5 Mobile Architecture Mistakes",
      excerpt: "Common pitfalls in mobile app development and how to avoid them in your projects",
      category: "Mobile",
      date: "April 28, 2023",
      readTime: "6 min read",
      image: "/images/WinForms.jpg",
      slug: "mobile-architecture-mistakes"
    },
    {
      title: "How I Grew as a Tech Mentor",
      excerpt: "My personal journey from individual contributor to mentoring dozens of developers",
      category: "Career",
      date: "March 10, 2023",
      readTime: "5 min read",
      image:"/images/WinForms.jpg",
      slug: "tech-mentor-growth"
    }
  ];

  const recentPosts = [
    {
      title: "SOLID Principles in Modern .NET",
      excerpt: "Applying time-tested principles to contemporary .NET development",
      category: "Development",
      date: "June 2, 2023",
      readTime: "7 min read",
      slug: "solid-principles-dotnet"
    },
    {
      title: "Building Resilient Microservices",
      excerpt: "Patterns for creating fault-tolerant distributed systems",
      category: "Architecture",
      date: "May 22, 2023",
      readTime: "10 min read",
      slug: "resilient-microservices"
    },
    {
      title: "Interviewing for Architect Roles",
      excerpt: "How to prepare and what hiring managers really look for",
      category: "Career",
      date: "May 5, 2023",
      readTime: "6 min read",
      slug: "architect-interviews"
    },
    {
      title: "Flutter vs React Native in 2023",
      excerpt: "Updated comparison of cross-platform frameworks",
      category: "Mobile",
      date: "April 15, 2023",
      readTime: "9 min read",
      slug: "flutter-react-native-2023"
    }
  ];

  const categories = [
    { name: "Architecture", count: 12 },
    { name: "Mobile", count: 8 },
    { name: "Career", count: 10 },
    { name: "Development", count: 15 },
    { name: "Cloud", count: 7 }
  ];

  return (
    <div className={styles.blog}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Tech Blog</h1>
          <p className={styles.subtitle}>
            Insights on architecture, mobile development, and career growth from 20+ years in tech
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
                      <a href={`/blog/category/${category.name.toLowerCase()}`}>
                        {category.name} <span className={styles.categoryCount}>({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Newsletter</h3>
                <p className={styles.widgetText}>
                  Get the latest posts delivered to your inbox
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