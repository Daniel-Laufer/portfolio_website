import { Intro, Experience, Education } from "../sections/";
import Skills from "../sections/skills";

function Main() {
  return (
    <div style={{ minWidth: "675px" }}>
      <Intro />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
}

export default Main;
