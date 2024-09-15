import { Intro, Experience, Education } from "../sections/";
import Projects from "../sections/projects";
import Skills from "../sections/skills";

function Main() {
  return (
    <div style={{ minWidth: "675px" }}>
      <Intro />
      <Experience />
      <Skills />
      <Projects/>
      <Education />
    </div>
  );
}

export default Main;
