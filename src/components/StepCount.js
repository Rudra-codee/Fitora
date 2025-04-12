import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(circle at 80% 50%, #0f172a, #1e293b);
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: white;
  position: relative;
  z-index: 2;
`;

const StepCountValue = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: white;
  margin: 10px 0;
  position: relative;
  z-index: 2;
`;

const StepUnit = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(250, 204, 21, 0.5) 0%, rgba(250, 204, 21, 0) 70%);
  top: 40%;
  right: 20%;
  animation: pulse 2s infinite;
  z-index: 0;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.4;
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
  }
`;

const GlowEffect2 = styled(GlowEffect)`
  width: 150px;
  height: 150px;
  top: 30%;
  right: 15%;
  animation-delay: 0.5s;
  background: radial-gradient(circle, rgba(134, 239, 172, 0.3) 0%, rgba(134, 239, 172, 0) 70%);
`;

const StepCount = () => {
  return (
    <Container>
      <Title>Step Count</Title>
      <StepCountValue>
        7,166 <StepUnit>steps</StepUnit>
      </StepCountValue>
      <GlowEffect />
      <GlowEffect2 />
    </Container>
  );
};

export default StepCount; 