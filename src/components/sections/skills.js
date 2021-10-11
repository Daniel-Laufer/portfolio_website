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
          Here are some of the technologies that I am proficient with! If you
          would like to see my full list of skills or if you are unfamiliar with
          some of the logos displayed below please feel free to take a look at
          my resume.
        </p>
        <div className="skills">
          {Object.keys(skillImages).map((key, index) => (
            <img key={index} src={skillImages[key]} alt="skill" />
          ))}
        </div>
      </Fade>
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
  height: 135vh;
  padding-top: 100px;
  padding: 4rem 15rem;
  background-color: ${colors.white};
  color: black;

  h1 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
    margin-top: 2rem;
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
  }
  .custom-shape-divider-bottom-1633933399 {
    position: absolute;
    bottom: 0;
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
