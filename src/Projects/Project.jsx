import React from 'react';
import './Projects.css'; // Assuming you have an external CSS file for styling


const Projects = () => {
  return (
    <div>
      <div className="container">
        <h1>Projects</h1>
        {/* Personal Hosted Project Section */}
        <section className="portfolio" id="projects">
          <h2 className="heading">
            Personal Hosted <span>Live Project</span>
          </h2>
          <div className="portfolio-container">
            <div className="portfolio-box small-image">
              <img src="src\assets\SkillSwap.png" alt="SkillSwap Project Thumbnail" loading="lazy" />
              <div className="portfolio-layer">
                <p>SkillSwap - Peer-to-Peer Learning Platform</p>
                <a href="https://github.com/rohitkarale" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* All Projects Section */}
        <section className="portfolio" id="portfolio">
          <h2 className="heading">
            All <span>Projects</span>
          </h2>
          <div className="portfolio-container">
            {/* Project 1 */}
            <div className="portfolio-box">
              <img src="src\assets\e-agro.png" alt="Car Rental Project Thumbnail" loading="lazy" />
              <div className="portfolio-layer">
                <p>e-Agro</p>
                <p>Client: Indosoft Technology</p>
                <a href="https://github.com/rohitkarale" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="portfolio-box">
              <img src="src\assets\Car-Rental-ERP.png" alt="AHPI Project Thumbnail" loading="lazy" />
              <div className="portfolio-layer">
                <p>Car Rental Smart ERP</p>
                <p>City Mall</p>
                <a href="https://github.com/rohitkarale" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="portfolio-box">
              <img src="src\assets\Data-Transform.png" alt="ETL Project Thumbnail" loading="lazy" />
              <div className="portfolio-layer">
                <p>Data Integration & ETL (Insurance)</p>
                <p>Client: Star Health</p>
                <a href="https://github.com/rohitkarale" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
