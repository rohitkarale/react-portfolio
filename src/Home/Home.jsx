import React from "react";
import "./Home.css"; // Assume you have styles defined in Home.css

const Home = () => {
    return (
        <div className="home-container">
            {/* Home Section */}
            <section className="home" id="home">
                <div className="home-content">
                    <h3>Hello, it's Brilliance in Code</h3>
                    <h1>Rohit Navnath Karale</h1>
                    <h3>
                        And I'm a <span>Java Developer</span>
                    </h3>
                    <p>
                        Skilled in Java, Spring Boot, Hibernate, and REST APIs, I design scalable
                        APIs, ensure code quality, and streamline backend processes. Proficient in
                        full-stack development, cloud integration (Azure, Snowflake), and Microservices
                        architecture, with expertise in building interactive and efficient systems that
                        support data-driven decisions.
                    </p>
                    <div className="social-media">
                        <a href="https://github.com/rohitkarale" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rohitkarale/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bx bxl-linkedin"></i>
                        </a>
                    </div>
                    <a
                        className="btn"
                        href="https://drive.google.com/file/d/1qInMB-er80n8zxK41t5SnKPMRe8oEXc6/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download CV
                    </a>
                </div>
                <div className="home-img">
                    <img
                        src="newimage.png" // Ensure the image is in the `public` folder
                        alt="Profile Photo of Rohit Navnath Karale"
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;