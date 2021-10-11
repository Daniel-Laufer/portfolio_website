import styled from "styled-components";
import colors from "../../utils/colors";
import Fade from "react-reveal/Fade";
import projects from "../../assets/content/projects";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import projectImages from "../../assets/projects";
const Projects = () => {
  const images = Object.values(projectImages);
  return (
    <Section>
      <Fade top duration={1000}>
        <h1>Featured Projects</h1>
      </Fade>
      <div className="container">
        {projects.map((project, index) => {
          const imageLeft = index % 2 == 0;
          const className = imageLeft ? "project left" : "project right";
          return (
            <div className={className}>
              <Fade left={imageLeft} right={!imageLeft} duration={1000}>
                <h1>{project.title}</h1>

                <div className="image-container">
                  <img
                    src={images[index]}
                    className={project.squareAspectRatio ? "square" : ""}
                    alt="gif of project"
                  />
                </div>
              </Fade>
              <Fade left={!imageLeft} right={imageLeft} duration={1000}>
                <div
                  className={"description".concat(
                    project.squareAspectRatio ? " square-image" : ""
                  )}
                >
                  <div>
                    {project.description} <br />
                    <div style={{ marginTop: "1rem" }}>
                      <span style={{ color: colors.blue }}>
                        Technologies used:{" "}
                      </span>{" "}
                      {project.technologies}
                    </div>
                  </div>

                  <div className="icons">
                    {project.githubURL ? (
                      <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noreferrer"
                        className="gitHub"
                        title="View GitHub repository"
                      >
                        <FaGithub />
                      </a>
                    ) : null}
                    {project.githubURL ? (
                      <a
                        href={project.youtubeURL}
                        target="_blank"
                        rel="noreferrer"
                        className="youtube"
                        title="Watch video demo"
                      >
                        <FaYoutube />
                      </a>
                    ) : null}
                    {project.liveAppURL ? (
                      <a
                        href={project.liveAppURL}
                        target="_blank"
                        rel="noreferrer"
                        className="goToLiveApp"
                        title="Go to live app"
                      >
                        <FaArrowAltCircleRight />
                      </a>
                    ) : null}
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>

      <div class="custom-shape-divider-bottom-1633906461">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 100px;
  padding: 4rem 15rem;
  padding-bottom: 15rem;
  background-color: ${colors.blue};
  @media (max-width: 1249px) {
    height: 105vh;
  }
  color: white;
  text-align: left;
  h1 {
    font-size: 40px;
    margin-bottom: 2rem;
  }
  .container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    .project {
      min-width: 500px;
      position: relative;
      .image-container {
        display: flex;
        img {
          width: 610px;
          border: 10px solid white;
        }
        img.square {
          width: 410px;
        }
      }
      h1 {
        font-size: 30px;
      }
      .description {
        background-color: rgba(255, 255, 255, 0.98);
        color: black;
        font-size: 20px;
        max-width: 550px;
        height: 230px;
        border-radius: 10px;
        padding: 1rem;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.34);
        box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.34);
        top: 4rem;

        .icons {
          display: flex;
          gap: 0.6rem;
          font-size: 2rem;

          text-decoration: none;

          .gitHub {
            color: ${colors.gitHubBlack};
          }
          .youtube {
            color: ${colors.youtubeRed};
          }
          .goToLiveApp {
            color: ${colors.liveAppGreen};
          }
        }
      }
    }
    .project.left {
      .image-container {
        justify-content: flex-start;
      }
      .description {
        left: 550px;
      }
      .description.square-image {
        left: 350px;
      }
    }
    .project.right {
      h1 {
        text-align: right;
      }
      .description {
        right: 550px;
      }
      .description.square-image {
        right: 350px;
      }
      .image-container {
        justify-content: flex-end;
      }
    }
  }

  .custom-shape-divider-bottom-1633906461 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1633906461 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 144px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1633906461 .shape-fill {
    fill: #ffffff;
  }
`;

export default Projects;
