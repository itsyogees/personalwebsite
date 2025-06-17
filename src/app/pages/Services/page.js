"use client";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaSchool,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./Services.module.scss";

export default function page() {
  const services = [
    {
      title: "Tech Mentorship",
      description:
        "1-on-1 or group sessions for junior to mid-level developers looking to accelerate their growth and career progression.",
      icon: <FaUserGraduate />,
      cta: "Book a session",
      link: "/mentorship",
    },
    {
      title: "Architecture Consulting",
      description:
        "Expert guidance for teams or founders needing help with application architecture, scalability, and technical decision-making.",
      icon: <FaLaptopCode />,
      cta: "Get consultation",
      link: "/consulting",
    },
    {
      title: "Final Year Project Guidance",
      description:
        "Personalized help for students completing their final year projects, from concept to implementation and documentation.",
      icon: <FaSchool />,
      cta: "Get help",
      link: "/student-help",
    },
    {
      title: "Training Academy (Coming Soon)",
      description:
        "Comprehensive training platform with courses, workshops, and resources for developers at all levels.",
      icon: <FaRocket />,
      cta: "Join waitlist",
      link: "/academy-waitlist",
      comingSoon: true,
    },
  ];

  return (
    <div className={styles.services}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>What I Do</h1>
          <p className={styles.subtitle}>
            Services designed to help developers and teams succeed
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  service.comingSoon ? styles.comingSoon : ""
                }`}
              >
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <a
                  href={service.link}
                  className={`${styles.button} ${
                    service.comingSoon ? styles.disabled : ""
                  }`}
                >
                  {service.cta} <FaArrowRight className={styles.arrowIcon} />
                </a>
                {service.comingSoon && (
                  <div className={styles.ribbon}>Coming Soon</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to level up your skills?</h2>
          <p className={styles.ctaText}>
            Get in touch to discuss how I can help you or your team achieve your
            technical goals.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}