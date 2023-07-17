import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pagesHeaderContent";
import { FaDatabase, FaDev } from "react-icons/fa";
import { DiApple, DiAndroid } from "react-icons/di";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name",
    value: "Harsh Jain",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "jainharsh2526.com",
  },
  {
    label: "Contact No",
    value: "+91 9997386846",
  },
];

const jobSummary =
  "I possess all the skills and experience that you’re looking for. I’m pretty confident that I am the best candidate for this job role. On the other hand, I am a self motivated person and I try to exceed my superior’s expectations with high-quality work. Being a fast learner, I quickly pick up business knowledge related to my project. Lastly, I would like to add that I work well both as an individual contributor and also as a team member. Collectively, all these skills put together makes me a complete package for your job.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
