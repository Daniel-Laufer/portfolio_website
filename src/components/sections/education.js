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
          <img src={uoft} alt="uoft logo" />
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
              I'm in my <span>third year</span> and expecting to graduate no
              earlier than
              <span> June 2024</span>
            </p>
            <p>
              <span>CGPA:</span> 3.9/4.0 (88% average)
            </p>
          </div>
        </Fade>
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
    padding: 4rem 1rem;
    div.container {
      justify-content: center;
    }
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
`;

export default Education;
