import React from "react";
import CourseCard from "../Templates/CourseCard";
import { CourseSection,FeaturesContainer,HeadingContainer } from "./Index-style";
import { Title,SubHeading } from "../MainServices/index-style";
import JavaImage from "../../Assets/CourseImages/Java.jpeg"
import CloudComputing from "../../Assets/CourseImages/cloud.jpg"
import DevOps from "../../Assets/CourseImages/Devops.jpeg"
import DataAnalitics from "../../Assets/CourseImages/data.jpg"
import Interview from "../../Assets/CourseImages/Interview.jpeg"
import CyberSecurity from "../../Assets/CourseImages/cyper.jpg"


const Index = () => {
  return (
    <CourseSection className="backImage">
      <div className="content_area">
        <HeadingContainer>
          <Title color={""}>Courses We Offer</Title>
          <SubHeading color={""} className="feature_para">
            Focus only on the meaning, we take care of the design
          </SubHeading>
        </HeadingContainer>

        <FeaturesContainer >
          <CourseCard
            Image={DevOps}
            title={"DevOps"}
            para={"Skill Ladder Academy’s DevOps training is designed for students who want to become successful DevOps engineers. In this DevOps training you will dive through the  concepts of DevOps. This training in DevOps has helped students effectively learn DevOps."
            }
            isContentLarge={true}
          />
          <CourseCard
            Image={JavaImage}
            title={"Java and Dot Net Full stack Development"}
            para={
              "Skill Ladder Academy’s Java and Dot Net Full Stack Developer program provides extensive hands-on training in Front End, Middleware and Back End Technology skills and capstone projects. "
            }
            isContentLarge={true}
          />
          <CourseCard
            Image={CloudComputing}
            title={"Cloud Computing"}
            para={
              "Skill Ladder Academy’s Cloud Computing program helps you become an expert in AWS. The indepth course lets you learn the key architectural principles of Cloud and skills need to become a Cloud Architect."}
            isContentLarge={true}
          />
          <CourseCard
            Image={CyberSecurity}
            title={"Cybersecurity"}
            para={
              "Skill Ladder Academy’s Cybersecurity Training will provide the information security skills and tools  you need to protect and secure the critical information and technology assests. The cybersecurity training is mapped to the Industry roles of Information Security Analyst, Ethical Hacker, Security Architect "
            }
            isContentLarge={true}
          />
          <CourseCard
            Image={DataAnalitics}
            title={"Data Analytics"}
            para={
              "Skill Ladder Academy’s Data Analytics Program covers Excel, Advanced Excel, Tableau, SQL, Power BI, Basics of R & Python. The Skills covered are Database Concepts, Data Analysis Concepts, Functions, Charters and Slicers, Data Visualization. The training prepares the candidate for the Data Analyst role of the industry. "
            }
            isContentLarge={true}
          />
          <CourseCard
            Image={Interview}
            title={"Interview Preparation"}
            para={
              "Skill Ladder Academy’s Interview Preparation curriculum is developed by Industry Experts. The training is industry focused and covers topics on C, Data Structures, Algorithms, SQL, Aptitude and Problem Solving. It includes Mock Interviews, Periodic Assessments and mentoring for the candidates."
            }
            isContentLarge={true}
          />
        </FeaturesContainer>
      </div>
    </CourseSection>
  );
};

export default Index;
