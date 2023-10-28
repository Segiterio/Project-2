import React, { useEffect, useRef, useState } from "react";
import {
  Highlight,
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
  const [happyFaces, setHappyFaces] = useState(0);
  useEffect(() => {
    let observer;

    const increaseUserNumber = () => {
      let number = 0;
      const interval = setInterval(() => {
        if (number < 11) {
          // Adjust this to your desired final number
          setCountUsers(number);
          number++;
        } else {
          clearInterval(interval);
        }
      }, 100);
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
        if (number < 31) {
          // Adjust this to your desired final number
          setHappyFaces(number);
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
    <>
      <HighlightContainer ref={componentRef}>
        <HighlightUsers className="highlightUsers">
          <div className="number__position">
            <h2 className="stats">{countUsers}</h2>
            <div className="stats">k</div>
          </div>
          <p className="title">Users</p>
        </HighlightUsers>

        <Highlight>
          <h2 className="stats">24*7</h2>
          <p className="title">Support</p>
        </Highlight>

        <HighlightRating>
          <div className="number__position">
            <h2 className="stats">{rating}</h2>
            <div className="stats">k</div>
          </div>
          <p className="title">Rating</p>
        </HighlightRating>

        <HighlightFaces>
          <div className="number__position">
            <h2 className="stats">{happyFaces}</h2>
            <div className="stats">k</div>
          </div>
          <p className="title">Happy faces</p>
        </HighlightFaces>
      </HighlightContainer>
    </>
  );
};

export default CompanyInfo;
