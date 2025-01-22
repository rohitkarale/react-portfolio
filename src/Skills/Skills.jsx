import React from 'react';
import './Skills.css'; // Import your CSS file

const Skills = () => {
    return (
        <>
            <div className="container">
                {/* Skills Section */}
                <section className="skills" id="skills">
                    <h2 className="heading">
                        My <span>Skills</span>
                    </h2>

                    {/* Professional Skills (Radial Progress Bars) */}
                    <div className="pro-skills-container">
                        <h3 className="heading1">Professional Skills</h3>
                        <div className="radial-bars">
                            {[
                                { percentage: "90%", text: "Creativity", class: "path-1" },
                                { percentage: "85%", text: "Communication", class: "path-2" },
                                { percentage: "75%", text: "Problem Solving", class: "path-3" },
                                { percentage: "85%", text: "Teamwork", class: "path-4" },
                            ].map((skill, index) => (
                                <div className="radial-bar hover-effect" key={index}>
                                    <svg viewBox="0 0 200 200">
                                        <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                        <circle
                                            className={`path ${skill.class}`}
                                            cx="100"
                                            cy="100"
                                            r="80"
                                        ></circle>
                                    </svg>
                                    <div className="percentage">{skill.percentage}</div>
                                    <div className="text">{skill.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Skills Section */}
                    <div className="skills-container">
                        <h2 className="heading1">Technical Skills</h2>
                        <div className="skills-grid">
                            {[
                                { title: "Languages", content: "Java, Python, SQL, JavaScript, PySpark, TypeScript" },
                                { title: "Frameworks", content: "Spring Boot, Hibernate, ReactJS, Angular" },
                                { title: "DevOps", content: "Docker, Kubernetes, Kafka, Redis" },
                                { title: "Databases", content: "OracleSQL, MongoDB, MySQL, Snowflake" },
                                { title: "Cloud Tools", content: "Azure (ADF, ADLS, Synapse, Key Vault, Databricks)" },
                                { title: "Tools", content: "Git, JIRA, Maven, PowerBI, Postman" },
                            ].map((skill, index) => (
                                <div className="skill-card hover-effect" key={index}>
                                    <h4>{skill.title}</h4>
                                    <p>{skill.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

const Navbar = () => (
    <nav>
        {/* Navbar content */}
        <h1>Navbar Placeholder</h1>
    </nav>
);

const Footer = () => (
    <footer>
        {/* Footer content */}
        <p>Footer Placeholder</p>
    </footer>
);

export default Skills;
