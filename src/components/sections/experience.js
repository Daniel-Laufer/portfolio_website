import styled from "styled-components";
import colors from "../../utils/colors";

const Experience = () => {
  return (
    <Section>
      <h1>Experience Section!!</h1>
      <p>Some text</p>
      <div className="curve" />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  padding-top: 100px;
  background: ${colors.blue};
`;

export default Experience;
