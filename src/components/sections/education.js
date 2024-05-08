import styled from "styled-components";
import uoft from "../../assets/images/uoft.png";
import Fade from "react-reveal/Fade";
import theme from "../../utils/theme";

const Education = () => {
  return (
    <Section>
        <h1>Education</h1>
      <div className="container">
        <img src={uoft} alt="uoft logo" />
          <div className="content">
            <h2>University of Toronto (UofT)</h2>
            <p>
              Specializing in <span>computer science</span>{" "}with a concentration in
              {" "}<span>information security</span>; minoring in{" "}
              <span>mathematics.</span>
            </p>
            <p>
              I'm in my <span>final year</span> and expecting to graduate in
              <span> December 2024.</span>
            </p>

            <p>
              <span>CGPA:</span> 3.9/4.0 (90% average)
            </p>
            <p>
              <span> Some of my favourite courses I've taken at UofT: </span>
              Introduction to Software Engineering, Algorithm Design and Analysis, Software Design, Principles of Computer Networks, Operating Systems, Databases, Introduction to Information Security, Computer Security, 
              Introduction to Algebraic Cryptography, Systems Programming.
            </p>
          </div>
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
  min-height: 70vh;
  // max-height: 100vh;
  padding-top: 100px !important;
  padding: ${theme.padding.sectionPadding} !important;
  background-color: ${theme.color.blue};
  @media (max-width: 1249px) {
    padding: 4rem 1rem;
    div.container {
      justify-content: center;
      flex-wrap: wrap !important; 
    }
  }
  color: ${theme.color.black};
  text-align: left;
  h1 {
    font-size: 40px;
    color: ${theme.color.white};
  }
  div.container {
    margin-top: 1rem;
    display: flex;
    gap: 7rem !important;
    flex-direction:row;
    align-items: center;
    img {
      height: 340px;
    }
    div.content {
      background-color: ${theme.color.white};
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2rem;
      font-size: 20px;
      p {
        span {
          color: ${theme.color.blue};
        }
      }
    }
  }
`;

export default Education;
