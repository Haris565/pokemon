import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner = ({ size }: { size: string }) => {
  return (
    <Wrapper>
      <SpinnerWrapper size={size} />
    </Wrapper>
  );
};

export default Spinner;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div<{ size: string }>`
  display: inline-block;
  width: ${({ size }) => size || "40px"};
  height: ${({ size }) => size || "40px"};
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #fff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
