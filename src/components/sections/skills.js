import styled from "styled-components";
import colors from "../../utils/colors";
import skillImages from "../../assets/images/skills";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <Section>
      <Fade top duration={1000}>
        <h1>Skills</h1>
      </Fade>
      <Fade left>
        <p>
          Here are some of the technologies that I am most proficient at using.
          If you would like to see a complete list of my skills, or if you are
          unfamiliar with any of the logos displayed below, please feel free to
          look at my resume.
        </p>
        <div className="skills">
          {Object.keys(skillImages).map((key, index) => (
            <img key={index} src={skillImages[key]} alt="skill" />
          ))}
        </div>
      </Fade>
      {/* <Fade right duration={1000}>
        <h1>Information/Cyber Security Skills</h1>
        <p>
          After taking CSC347 (Information Security) and CSC427 (Computer Security) at the University of Toronto, I've had a considerable amount of hands-on, practical experience with all of the following:
        
        </p>
        <ul className="skill-bullet-point">
            <li>Exploiting and identifying vulnerabilities such as: using race condition arithmetic overflow/underflow </li>
            <li>Wee</li>
            <li>Mama</li>
            
        </ul>
      </Fade> */}
      <div class="custom-shape-divider-bottom-1633933399">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
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
  padding: 8rem 15rem;
  background-color: ${colors.white};
  color: black;
  @media (max-width: 1000px) {
    padding: 8rem 1rem;
  }

  h1 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
    margin-top: 1rem;
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    border-radius: 20px;
    border: 6px solid ${colors.blue};
    padding: 2rem;

    img {
      width: 150px;
      height: 150px;
      border-radius: 10px;
      object-fit: contain;
    }
    @media (max-width: 1237px) {
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .skill-bullet-point {
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

  .custom-shape-divider-bottom-1633933399 {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-bottom-1633933399 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 62px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1633933399 .shape-fill {
    fill: #0094ff;
  }
`;

export default Skills;
