// app/(main)/page.tsx
"use client";
import {
  FaArrowRight,
  FaPlay,
  FaUserGraduate,
  FaCode,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";
// import { SiMicrosoftazure, SiDotnet, SiReact, SiFlutter, SiAmazonaws, SiNextdotjs } from 'react-icons/si';
import styles from "./Home.module.scss";
import Image from "next/image";
import profileImage from '../../public/images/profile.jpg';

export default function Home() {
  const techStack = [
    { name: "AWS", src: "/images/AWS.png", alt: "Amazon Web Services" },
    { name: "Flutter", src: "/images/Flutter.png", alt: "Flutter" },
    { name: "Azure", src: "/images/Azure.png", alt: "Microsoft Azure" },
    { name: ".NET", src: "/images/NET.png", alt: ".NET Framework" },
    {
      name: "React Native",
      src: "/images/React Native.png",
      alt: "React Native",
    },
  ];
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
          <div className={styles.profileImageContent}>
            <div className={styles.profileImage}>
              <Image 
                src={profileImage}
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
                <span className={styles.highlight}>Architecting</span> Tech
                Careers.
                <br />
                <span className={styles.highlight}>Building</span> Future
                Leaders
              </h1>
              <p className={styles.intro}>
                Solution Architect | Tech Educator | SaaS Builder
                <br />
                20+ years transforming ideas into scalable digital solutions
              </p>

              <div className={styles.ctaButtons}>
                <a
                  href="/projects"
                  className={`${styles.button} ${styles.primary}`}
                >
                  <FaArrowRight className={styles.icon} /> View My Work
                </a>
                <a
                  href="https://youtube.com/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.secondary}`}
                >
                  <FaPlay className={styles.icon} /> Watch on YouTube
                </a>
                <a
                  href="/mentorship"
                  className={`${styles.button} ${styles.tertiary}`}
                >
                  <FaUserGraduate className={styles.icon} /> Join Mentorship
                </a>
              </div>
            </div>
          </div>

          <div className={styles.techStack}>
            <p className={styles.techLabel}>Technologies I work with:</p>
            <div className={styles.techIcons}>
              {techStack.map((tech, index) => (
                <div key={tech.name} className={styles.techIcon}>
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    width={100}
                    height={100}
                    className={styles.techImage}
                  />
                  <span className={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className={styles.valueProp}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How I Can Help You</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <FaCode className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Technical Architecture</h3>
              <p className={styles.cardText}>
                Design scalable, maintainable systems that grow with your
                business needs.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <FaChartLine className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Career Growth</h3>
              <p className={styles.cardText}>
                Strategic guidance to accelerate your career in technology.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <FaLightbulb className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Product Development</h3>
              <p className={styles.cardText}>
                From idea to implementation, creating products users love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What People Say</h2>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <blockquote className={styles.quote}>
                "Transformed our technical approach and helped us build a
                scalable architecture."
              </blockquote>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <strong>Sarah Johnson</strong>
                  <span>CTO, TechCorp</span>
                </div>
              </div>
            </div>

            <div className={styles.testimonial}>
              <blockquote className={styles.quote}>
                "The mentorship program completely changed my career
                trajectory."
              </blockquote>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <strong>Michael Chen</strong>
                  <span>Senior Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
