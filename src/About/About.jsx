import React, { useState } from "react";
import "./About.css"; // Assuming you have styles defined for this component

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <div className="container">
      {/* About Section */}
      <section className="about" id="about">
        <div className="about-img">
          <img
            src="src\assets\About.png"
            alt="Profile Photo of About"
            loading="lazy"
          />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Java Developer</h3>
          <div className="about-text">
            <p>
              Hi! I am a dedicated and innovative Java Full Stack Developer with
              expertise in Spring Boot, Hibernate, and REST APIs, specializing
              in designing scalable APIs and ensuring optimal code quality.
            </p>
            {showMore && (
              <>
                <p>
                  My professional journey is built on a strong academic
                  foundation, including a Master's in Computer Applications
                  (MCA), and bolstered by certifications in Full Stack
                  Development and Java Programming.
                </p>
                <p>
                  I have a proven track record of developing robust applications
                  across diverse domains, including healthcare, ERP systems, and
                  insurance, utilizing cutting-edge technologies like Azure Data
                  Factory, Snowflake, Databricks, and Microservices architecture.
                </p>
                <p>
                  Notable projects such as SkillSwap – a peer-to-peer learning
                  platform, Car Rental Smart ERP, and Data Integration for Star
                  Health Insurance showcase my ability to lead agile teams and
                  deliver impactful results.
                </p>
                <p>
                  I am deeply passionate about continuous learning, leveraging
                  technology to solve complex problems, and contributing to
                  meaningful innovations in the software development landscape.
                </p>
              </>
            )}
          </div>
          <button className="btn" onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
