import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CTA } from "../components";
import { experiences } from "../constants";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Sanjana
        </span>{" "}
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          My experiences narrate the stories of how I’ve applied them. In this section, 
          you’ll learn about my journey of learning, growth, and real-world application.
        </p>
      </div>
      <br/>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Education</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <ul className='list-disc ml-5 space-y-2'>
            <li>
              <span className='font-semibold'>Anurag University</span> (2021 - pursuing)
              <br />
              CGPA: 8.39
            </li>
            <li>
              <span className='font-semibold'>Narayana Junior College</span> (2019 - 2021)
              <br />
              Percentage: 90.8%
            </li>
            <li>
              <span className='font-semibold'>DAV Public School</span>
              <br />
              Percentage: 85%
            </li>
          </ul>
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Timeline</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          My professional journey has been shaped by a blend of both technical and 
          non-technical experiences, each of which has played a significant role in my 
          overall development. Whether I was working on coding and software projects or 
          handling communication, teamwork, and organizational tasks, each experience has 
          contributed to my growth in unique ways. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;