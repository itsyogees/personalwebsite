"use client";
import {
  FaUserTie,
  FaLightbulb,
  FaChartLine,
  FaCode,
  FaGraduationCap,
  FaCloud,
  FaMobile,
  FaCogs,
} from "react-icons/fa";
import styles from "./About.module.scss";
import Image from "next/image";

export default function page() {
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
                <span className={styles.highlight}>Solution Architect</span> with
                <br />
                20+ Years of Experience
              </h1>
              <p className={styles.intro}>
                From .NET & SQL Server to Cloud-Native Development
                <br />
                Leading mobile-first solutions with Flutter, React Native & MAUI
              </p>

              <div className={styles.missionStatement}>
                <FaLightbulb className={styles.missionIcon} />
                <p>
                  Passionate about mentoring developers, creating educational content (8.6K+ YouTube subscribers),
                  and working toward launching my own software company and training institute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className={styles.experienceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <p className={styles.sectionSubtitle}>
            Building enterprise-grade solutions across multiple platforms
          </p>

          <div className={styles.experienceGrid}>
            <div className={styles.experienceCard}>
              <div className={styles.cardIcon}>
                <FaUserTie className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Solution Architect</h3>
              <p className={styles.cardText}>
                Leading mobile-first cloud-native development using React Native, Flutter, Azure, and AWS. 
                Designing scalable architectures for enterprise applications.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.cardIcon}>
                <FaCode className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Senior .NET Developer</h3>
              <p className={styles.cardText}>
                Built robust desktop and web applications using WinForms, ASP.NET, and SQL Server. 
                Developed internal tools and reporting applications for enterprise clients.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.cardIcon}>
                <FaMobile className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Mobile Tech Lead</h3>
              <p className={styles.cardText}>
                Led cross-platform mobile development using Xamarin and MAUI. 
                Built mobile-cloud systems and cross-platform solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={styles.techSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Tech Stack & Skills</h2>
          
          <div className={styles.techGrid}>
            <div className={styles.techCategory}>
              <div className={styles.techIcon}>
                <FaCode />
              </div>
              <h3>Languages</h3>
              <p>C#, Python, JavaScript, Dart, Kotlin, Swift</p>
            </div>

            <div className={styles.techCategory}>
              <div className={styles.techIcon}>
                <FaCogs />
              </div>
              <h3>Frameworks</h3>
              <p>.NET Core, React Native, Flutter, MAUI</p>
            </div>

            <div className={styles.techCategory}>
              <div className={styles.techIcon}>
                <FaCloud />
              </div>
              <h3>Cloud & DevOps</h3>
              <p>Azure, AWS, GitHub Actions, Azure DevOps, OpenShift</p>
            </div>

            <div className={styles.techCategory}>
              <div className={styles.techIcon}>
                <FaChartLine />
              </div>
              <h3>Architecture</h3>
              <p>Microservices, Clean Architecture, Event-Driven</p>
            </div>

            <div className={styles.techCategory}>
              <div className={styles.techIcon}>
                <FaLightbulb />
              </div>
              <h3>AI/ML</h3>
              <p>GenAI, MLOps, Python ML libraries</p>
            </div>
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