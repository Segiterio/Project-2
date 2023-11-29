import React, { useEffect, useRef, useState } from "react";
import {
  HighlightContainer,
  HighlightFaces,
  HighlightRating,
  HighlightUsers,
} from "./companyInfo-style";

const CompanyInfo = () => {
  const [count, setCount] = useState(0);
  const componentRef = useRef(null);
  const [countUsers, setCountUsers] = useState(0);
  const [rating, setRating] = useState(0);
  const [skillsLab, setSkillsLab] = useState(0);
  const [partnerCollege, setPartnerCollege] = useState(0);
  useEffect(() => {
    let observer;

    const increaseUserNumber = () => {
      let number = 0;
      const interval = setInterval(() => {
        if (number < 3) {
          // Adjust this to your desired final number
          setCountUsers(number);
          number++;
        } else {
          clearInterval(interval);
        }
      }, 10);
    };
    const increseRatingNumber = () => {
      let number = 0;
      const interval = setInterval(() => {
        if (number < 21) {
          // Adjust this to your desired final number
          setRating(number);
          number++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };
    const increaseHappyNumber = () => {
      let number = 0;
      const interval = setInterval(() => {
        if (number < 7) {
          // Adjust this to your desired final number
          setSkillsLab(number);
          number++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };
    const increasePartnerCollege = () => {
      let number = 0;
      const interval = setInterval(() => {
        if (number < 6) {
          // Adjust this to your desired final number
          setPartnerCollege(number);
          number++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          increaseUserNumber();
          increseRatingNumber();
          increaseHappyNumber();
          increasePartnerCollege();
          observer.unobserve(entry.target);
        }
      });
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current && observer) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);
  return (
    <div>
      <HighlightContainer ref={componentRef}>
        <HighlightUsers className="highlightUsers">
          <div className="number__position">
            <h2 className="stats">{countUsers}</h2>
            <div className="stats">k</div>
          </div>
          <p className="title">Users</p>
        </HighlightUsers>
        <HighlightUsers className="highlightUsers">
          <div className="number__position">
            <h2 className="stats">{partnerCollege}</h2>
          </div>
          <p className="title">Partner Colleges</p>
        </HighlightUsers>


        <HighlightRating>
          <div className="number__position">
            <h2 className="stats">{rating}</h2>
            <div className="stats">k</div>
          </div>
          <p className="title">Rating</p>
        </HighlightRating>

        <HighlightFaces>
          <div className="number__position">
            <h2 className="stats">{skillsLab}</h2>
          </div>
          <p className="title">Skills Lab</p>
        </HighlightFaces>
      </HighlightContainer>
    </div>
  );
};

export default CompanyInfo;
