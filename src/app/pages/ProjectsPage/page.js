"use client";
import { FaCode, FaMobile, FaShoppingCart, FaMicrochip, FaRobot } from "react-icons/fa";
import styles from "./Projects.module.scss";
import Image from "next/image";

export default function page() {
  const projects = [
    {
      title: "AI Code Generator",
      description: "OpenAI-powered tool that converts Figma designs to production-ready React code",
      icon: <FaCode className={styles.icon} />,
      tags: ["AI", "OpenAI", "React", "Figma"],
      image: "/images/ai-code-generator.jpg"
    },
    {
      title: "Ground Booking App",
      description: "Flutter application for booking sports grounds with real-time availability",
      icon: <FaMobile className={styles.icon} />,
      tags: ["Flutter", "Firebase", "Dart"],
      image: "/images/ground-booking.jpg"
    },
    {
      title: "Multi-Tenant E-Commerce Platform",
      description: "Scalable e-commerce solution supporting multiple stores with custom domains",
      icon: <FaShoppingCart className={styles.icon} />,
      tags: ["Node.js", "React", "MongoDB", "AWS"],
      image: "/images/ecommerce-platform.jpg"
    },
    {
      title: "IoT Fish Feeder App",
      description: "Android app controlling ESP32-based automated fish feeding system",
      icon: <FaMicrochip className={styles.icon} />,
      tags: ["Android", "Kotlin", "ESP32", "IoT"],
      image: "/images/iot-feeder.jpg"
    },
    {
      title: "AI Interview Bot",
      description: "Voice-enabled interview assistant with NLP analysis of candidate responses",
      icon: <FaRobot className={styles.icon} />,
      tags: ["Python", "NLP", "Voice Recognition", "AI"],
      image: "/images/interview-bot.jpg"
    }
  ];

  return (
    <div className={styles.projects}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.subtitle}>
            Real-world solutions combining cutting-edge technologies with practical applications
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.image}
                  />
                  <div className={styles.iconContainer}>
                    {project.icon}
                  </div>
                </div>
                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}