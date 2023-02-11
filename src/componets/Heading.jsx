import React from "react";
import styled from "styled-components";

const Heading = ({ heading }) => {
  return (
    <Slogan>
      <div className="heading">
        <p>{heading}</p>
        <div className="underline"></div>
      </div>
    </Slogan>
  );
};

const Slogan = styled.section`
  margin: 2rem 0;
  .heading {
    display: flex;
    justify-content: center;
    align-item: center;
    position: relative;
    height: auto;

    p {
      font-size: 3rem;
      font-weight: 700;
      color: #295939;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    .underline {
      position: absolute;
      bottom: 0;
      width: 30%;
      height: 0.4rem;
      left: 50%;
      transform: translateX(-50%);
      background: #fb2576;
    }
  }
`;
export default Heading;
