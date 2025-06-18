"use client";
import { FaYoutube, FaUsers, FaVideo, FaClock, FaArrowRight } from "react-icons/fa";
import styles from "./YoutubePage.module.scss";

export default function page() {
  const playlists = [
    {
      title: "Final Year Projects", 
      embedId: "PLRNBgzSj3e-YMVC-Ua2By-Sa4uFcHqdoI"
    },
    {
      title: "Web & Mobile Development", 
      embedId: "PLRNBgzSj3e-aKcroTXakashIvxwntK9t1"
    },
    {
      title: "Cloud Basics", 
      embedId: "PLRNBgzSj3e-b7qE1L868O4yiQU5vWQrcF"
    },
    {
      title: "Career Growth", 
      embedId: "PLRNBgzSj3e-b64gCccgo-Bi7d-K1drRiB"
    }
    
  ];

  return (
    <div className={styles.youtube}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.channelInfo}>
            <FaYoutube className={styles.youtubeLogo} />
            <h1>Tech Simplified by SenthilKumar K</h1>
            <div className={styles.stats}>
              <span><FaUsers /> 8,600+ Subscribers</span>
              <span><FaVideo /> 205+ Videos</span>
              <span><FaClock /> All under 10 minutes</span>
            </div>
            <a 
              href="https://youtube.com/@TechSimplifiedBySenthil" 
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Channel <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Playlists Section */}
      <section className={styles.playlistsSection}>
        <div className={styles.container}>
          <h2>Featured Playlists</h2>
          <div className={styles.playlistsGrid}>
            {playlists.map((playlist, index) => (
              <div key={index} className={styles.playlistCard}>
                <h3>{playlist.title}</h3>
                <div className={styles.videoWrapper}>
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${playlist.embedId}`}
                    title={`${playlist.title} Playlist`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}