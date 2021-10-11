import styled from "styled-components";
import colors from "../../utils/colors";
import uoft from "../../assets/images/uoft.png";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <Section>
      <Fade top duration={1000}>
        <h1>Education</h1>
      </Fade>
      <div className="container">
        <Fade left duration={1000}>
          <img src={uoft} />
        </Fade>
        <Fade right duration={1000}>
          <div className="content">
            <h1>University of Toronto</h1>
            <p>
              Specializing in <span>computer science</span> and{" "}
              <span>information security</span>; minoring in{" "}
              <span>mathematics</span>
            </p>
            <p>
              Currently in my <span>third year</span> and expecting to graduate
              no earlier than
              <span> June 2024</span>
            </p>
            <p>
              <span>CGPA:</span> 3.9/4.0 (88% average)
            </p>
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
  height: 100vh;
  padding-top: 100px;
  padding: 4rem 15rem;
  background-color: ${colors.white};
  @media (max-width: 1249px) {
    height: 105vh;
  }
  color: black;
  text-align: left;
  h1 {
    font-size: 40px;
  }
  div.container {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    img {
      height: 340px;
    }
    div.content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 25px;
        span {
          color: ${colors.blue};
        }
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

export default Education;
