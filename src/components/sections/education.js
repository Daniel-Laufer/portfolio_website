import styled from "styled-components";
import uoft from "../../assets/images/uoft.png";
import Fade from "react-reveal/Fade";
import theme from "../../utils/theme";
import colors from "../../utils/colors";

const Education = () => {
  return (
    <Section>
        <h1 style={{marginBottom:"50px"}}>Education & Certifications</h1>
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
              <span> December 2024.</span> Currently SWE/Security new grad positions for Jan 2025!
            </p>

            <p>
              <span>CGPA:</span> 3.91/4.0 (89% average)
            </p>
            <p>
              <span> Some of my favourite courses I've taken at UofT: </span>
              <ul>
                <li>Distributed Systems</li>
                <ul>
                    <li>
                    Topics included: message queues (Kafka), orchestration (K8s, Docker), stream/batch processing (Apache Spark), load balancers (AWS ELB, NGINX), distributed storage (Cassandra), parallel computing (CUDA), serverless functions (AWS Lambda, OpenFaaS), distributed caches/locks (Redis), etc.
                    </li>
                </ul>
                <li>Introduction to Software Engineering</li>
                <li>Advanced Data Structures and Algorithms</li>
                <li>Software Design</li>
                <li>Principles of Computer Networks</li>
                <li>Operating Systems</li>
                <li>Databases</li>
                <li>Introduction to Information Security</li>
                <li>Computer Security</li>
                <li>Introduction to Algebraic Cryptography</li>
                <li>Systems Programming</li>
              </ul>
               {/* Introduction to Software Engineering, Algorithm Design and Analysis, Software Design, Principles of Computer Networks, Operating Systems, Databases, Introduction to Information Security, Computer Security, 
              Introduction to Algebraic Cryptography, Systems Programming. */}
            </p>
            <p style={{paddingBottom: '70px'}}>
              <span>Certifications: </span>
              AWS Certified Cloud Practitioner (Click <a href="https://www.credly.com/badges/56ec31cc-66dd-4e17-ad5f-8ee92cfbd54e/linked_in_profile">here</a> to view!)
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
//   margin-bottom:50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  padding-top: 100px;
//   padding-top: 500px !important;
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
