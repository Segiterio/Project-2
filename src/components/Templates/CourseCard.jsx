import React from "react";
import {
  Card,
  Title,
  Description,
  Content,
  Btn,
  ContentContainer,
} from "./CourseCard-style";
import { FaAngleRight } from "react-icons/fa";

const CourseCard = ({ Image, title, para }) => {
  return (
    <Card>
      <div>
        <img src={Image} alt="course_picture" />
      </div>
      <ContentContainer>
        <Content>
          <Title>{title}</Title>
          <Description>{para}</Description>
        </Content>
        <Btn><div>Explore More</div> <FaAngleRight/> </Btn>
      </ContentContainer>
    </Card>
  );
};

export default CourseCard;
