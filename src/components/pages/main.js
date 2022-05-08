import { Intro, Experience, Education, Projects } from "../sections/";
import Skills from "../sections/skills";

function Main() {
  return (
    <div style={{ minWidth: "675px" }}>
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}

export default Main;
