import styled from "styled-components";
import colors from "../../utils/colors";
import me from "../../assets/images/me.jpg";
import scrollDownGif from "../../assets/gifs/scroll-down.gif";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";

import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useGetScrollPosition } from "../../hooks";

const Intro = () => {
  const scrollPosition = useGetScrollPosition();

  return (
    <Section>
      <div className="container">
        <div>
          <img id="image-of-me" src={me} />
        </div>
        <div className="content">
          <h1>Daniel Laufer</h1>
          <p>Computer Science Student and Software Engineer</p>
          <div className="icon-row">
            <a
              href="https://www.youtube.com/watch?v=lPJVi797Uy0"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-laufer-7ba986176/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" color={colors.linkedInBlue} />
            </a>
            <Button>
              <FaDownload /> Resume
            </Button>
          </div>
        </div>
      </div>
      <img
        className="scroll-down-gif"
        style={scrollPosition > 0 ? { opacity: 0 } : {}}
        src={scrollDownGif}
        alt="scroll down"
        width="150"
      />
      <div class="custom-shape-divider-bottom-1633823571">
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
  align-items: center;
  height: 95vh;
  padding-top: 100px;
  background: ${colors.white};
  margin-top: 4rem;
  @media (max-width: 1249px) {
    height: 105vh;
  }

  .container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    #image-of-me {
      width: 350px;
      height: 350px;
      border-radius: 50%;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h1 {
        font-size: 50px;
        margin: 0;
      }
      p {
        font-size: 40px;
        margin: 0;
      }
      .icon-row {
        display: flex;
        gap: 1rem;
        align-items: center;
        .icon {
          width: 60px;
          height: 60px;
        }
        a {
          color: black;
        }
        button {
          height: 50px;
          background-color: ${colors.blue};
          color: ${colors.white};
          font-size: 25px;
          padding: 0px 20px;
        }
      }
    }
  }

  .scroll-down-gif {
    position: absolute;
    top: 70vh;
    opacity: 1;
    -webkit-transition: opacity 0.2s ease-in;
    -moz-transition: opacity 0.2s ease-in;
    -o-transition: opacity 0.2s ease-in;
  }

  .custom-shape-divider-bottom-1633823571 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1633823571 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 93px;
  }

  .custom-shape-divider-bottom-1633823571 .shape-fill {
    fill: #0094ff;
  }
`;

export default Intro;
