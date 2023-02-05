import styled from "styled-components";
import colors from "../../utils/colors";
import wealthscope from "../../assets/images/wealthscope.png";
import schulich from "../../assets/images/schulich.jpeg";
import gdsc from "../../assets/images/gdsc.webp";
import uoft from "../../assets/images/uoft_square.png";
import { useState } from "react";
import experiences from "../../assets/content/experiences";
import Fade from "react-reveal/Fade";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  // images in order from top to bottom
  const images = [uoft, gdsc, wealthscope, schulich];

  return (
    <Section>
      <Fade top duration={1000}>
        <h1>Experience</h1>
      </Fade>
      <div className="experiences">
        <Fade left duration={1000}>
          <div className="logos">
            {images.map((image, index) => (
              <div
                className={selectedExperience === index ? "active" : ""}
                onClick={() => setSelectedExperience(index)}
              >
                <img
                  src={image}
                  alt="Company Logo"
                  style={image === wealthscope ? { borderRadius: 0 } : {}}
                />
              </div>
            ))}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="content">
            <div className="job-title-date-row">
              <div className="job-title">
                {experiences[selectedExperience]["job-title"]}
              </div>
              <div className="dates">
                {experiences[selectedExperience]["dates"]}
              </div>
            </div>
            <div className="company">
              {experiences[selectedExperience]["company"]}
            </div>
            <ul className="job-description">
              {experiences[selectedExperience]["description"].map((line) => {
                return <li>{line}</li>;
              })}
            </ul>
          </div>
        </Fade>
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
  padding: 4rem 15rem;
  padding-bottom: 17rem;
  background-color: ${colors.blue};

  color: white;
  text-align: left;
  h1 {
    font-size: 40px;
  }
  .experiences {
    display: flex;
    width: 101%;
    gap: 2rem;
    .logos {
      display: flex;
      flex-direction: column;
      padding-left: 1rem;
      gap: 10px;
      div {
        position: relative;
        width: 100px;
        height: 100px;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
        img:hover {
          cursor: pointer;
        }
      }

      div::before {
        width: 10px;
        height: 110px;
        content: " ";
        position: absolute;
        background-color: rgba(255, 255, 255, 0.5);
        transform: translateX(-1.5rem);
      }
      div.active {
        &::before {
          background-color: rgba(255, 255, 255, 1);
          -webkit-transition: background-color 0.2s linear;
          -moz-transition: background-color 0.2s linear;
          -o-transition: background-color 0.2s linear;
        }
      }
    }
    .content {
      min-width: 530px;
      min-height:470px;

      display: flex;
      gap: 0.8rem;
      flex-direction: column;
      background-color: white;
      border-radius: 30px;
      width: 100%;
      font-size: 20px;
      color: black;
      padding: 2rem;
      .job-title-date-row {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        .job-title {
          font-weight: bold;
        }
        .dates {
        }
      }
      .company {
        color: ${colors.blue};
      }
      .job-description {
        line-height: 1.6em;
        margin: 5px 0 15px;
        padding: 0;
        font-size: 20px;
        li {
          list-style: none;
          position: relative;
          padding: 0 0 0 20px;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            -moz-border-radius: 50%;
            -webkit-border-radius: 50%;
            border: 2px solid ${colors.blue};
          }
        }
      }
    }
  }

  .custom-shape-divider-bottom-1633906461 {
    position: absolute;
    bottom: -1px;
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

  @media (max-width: 1249px) {
  }
  @media (max-width: 1050px) {
    padding: 12rem 1rem;
    padding-bottom: 20rem;
    .experiences {
      .logos {
        div {
          width: 70px;
          height: 70px;
        }
        div::before {
          width: 10px;
          height: 80px;
          transform: translateX(-1.5rem);
        }
      }
      .content {
        font-size: 15px;
        .job-title-date-row {
          font-size: 15px;
        }
        .company {
          color: ${colors.blue};
        }
        .job-description {
          line-height: 1.6em;
          margin: 5px 0 15px;
          padding: 0;
          font-size: 15px;
        }
      }
    }
  }
`;

export default Experience;
