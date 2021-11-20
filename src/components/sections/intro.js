import styled from "styled-components";
import colors from "../../utils/colors";
import me from "../../assets/images/me.jpg";
import scrollDownGif from "../../assets/gifs/scroll-down.gif";
import resume from "../../assets/pdfs/resume.pdf";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";
import { scroller } from "react-scroll";

import { Button } from "semantic-ui-react";
import { useGetScrollPosition } from "../../hooks";

const Intro = () => {
  const scrollPosition = useGetScrollPosition();
  const scrollToSection = () => {
    scroller.scrollTo("custom-shape-divider-bottom-1633823571", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Section>
      <Fade top cascade duration={1000}>
        <div className="container">
          <div>
            <img id="image-of-me" src={me} alt="me" />
          </div>
          <div className="content">
            <h1>
              <Typist cursor={{ hideWhenDone: true }} avgTypingDelay={80}>
                <Typist.Delay ms={1100} />
                Hi there! My name is
                <Typist.Backspace count={20} delay={500} />
                Daniel Laufer
              </Typist>
            </h1>
            <p>Computer Science Student and Software Engineer</p>
            <div className="icon-row">
              <a
                href="https://github.com/Daniel-Laufer"
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
                <a
                  href={resume}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDownload /> Resume
                </a>
              </Button>
            </div>
          </div>
          <img
            className="scroll-down-gif"
            style={scrollPosition > 0 ? { opacity: 0 } : { zIndex: 99999 }}
            src={scrollDownGif}
            alt="scroll down"
            width="150"
            onClick={scrollToSection}
          />
        </div>
      </Fade>

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
  padding: 24rem 3rem;
  padding-top: 11rem;
  background: ${colors.white};

  .container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;

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
    bottom: -200px;
    opacity: 1;
    -webkit-transition: opacity 0.3s ease-in;
    -moz-transition: opacity 0.3s ease-in;
    -o-transition: opacity 0.3s ease-in;
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
  @media (max-width: 1333px) {
    .container {
      flex-direction: column;
    }
    h1 {
      font-size: 40px !important;
    }
    p {
      font-size: 23px !important;
    }
  }
`;

export default Intro;
