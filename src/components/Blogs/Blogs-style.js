import styled from "styled-components";

export const BlogSection = styled.div`
  padding: 2.5rem 0;
`;

export const BlogLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const Group = styled.div`
  width: 100%;
`;

export const Blog1 = styled.div`
  & > img {
    width: 100%;
  }
  & h4 {
    font-family: "B612";
    font-size: 1.1rem;
  }
`;

export const Blog2 = styled.div`
  padding: 1.5rem;
  border-radius: 5px;
  background: #fbf5f1;
  font-family: "B612";
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.5;
`;

export const Blog3 = styled.div`
  line-height: 1.5;
  & img {
    width: 100%;
  }
`;

export const Blog4 = styled.div`
  position: relative;
  width: 100%;

  & img {
    position: relative;
    width: 100%;
  }

  & p {
    position: absolute;
    width: 100%;
    bottom: 1rem;
    color: white;
    font-weight: bold;
    font-family: "B612";
  }
`;

export const Blog5 = styled.div`
  position: relative;
  width: 100%;

  & img {
    position: relative;
    width: 100%;
  }

  & p {
    position: absolute;
    width: 100%;
    bottom: 1rem;
    color: white;
    font-weight: bold;
    font-family: "B612";
  }
`;
