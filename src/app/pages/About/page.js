"use client";
import {
  FaUserTie,
  FaLightbulb,
  FaChartLine,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import styles from "./About.module.scss";
import Image from "next/image";

export default function page() {
  const timeline = [
    {
      year: "2000-2005",
      title: "WinForms Developer",
      description: "Built desktop applications for enterprise clients",
      icon: <FaCode />,
    },
    {
      year: "2005-2010",
      title: "ASP.NET Specialist",
      description: "Developed web applications and services",
      icon: <FaCode />,
    },
    {
      year: "2010-2015",
      title: "Mobile Developer (Xamarin)",
      description: "Created cross-platform mobile solutions",
      icon: <FaCode />,
    },
    {
      year: "2015-2020",
      title: "Cloud Architect",
      description: "Designed cloud-native solutions on Azure/AWS",
      icon: <FaChartLine />,
    },
    {
      year: "2020-Present",
      title: "Solution Architect & Educator",
      description: "Mentoring developers and building SaaS products",
      icon: <FaUserTie />,
    },
  ];

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
          <div className={styles.profileImageContent}>
            <div className={styles.profileImage}>
              <Image 
                src="/images/profile.jpg"
                alt="Profile picture"
                width={400}
                height={400}
                priority
                className={styles.image}
              />
            </div>
            </div>
            <div className={styles.heroText}>
              <h1 className={styles.tagline}>
                <span className={styles.highlight}>20+ Years</span> Shaping
                <br />
                Technology Solutions
              </h1>
              <p className={styles.intro}>
                From WinForms to Cloud Architecture
                <br />
                Helping developers bridge the gap between code and architecture
              </p>

              <div className={styles.missionStatement}>
                <FaLightbulb className={styles.missionIcon} />
                <p>
                  My mission is to empower developers to become architects and
                  create meaningful software that solves real problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>My Journey</h2>
          <p className={styles.sectionSubtitle}>
            From junior developer to solution architect
          </p>

          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${
                  index % 2 === 0 ? styles.left : styles.right
                }`}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>{item.icon}</div>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophy}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>My Development Philosophy</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <FaCode className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Code with Purpose</h3>
              <p className={styles.cardText}>
                Every line of code should solve a real problem. I focus on
                creating maintainable, scalable solutions that stand the test of
                time.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <FaChartLine className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Architecture First</h3>
              <p className={styles.cardText}>
                Good architecture enables growth. I design systems that can
                evolve with business needs while minimizing technical debt.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <FaGraduationCap className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Lift Others Up</h3>
              <p className={styles.cardText}>
                Knowledge grows when shared. I'm committed to helping the next
                generation of developers become architects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}