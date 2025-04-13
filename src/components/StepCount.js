import React from 'react';
import styled from 'styled-components';
import { FiTrendingUp, FiTarget } from 'react-icons/fi';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 24px;
  border-radius: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 20px;
    height: 20px;
    color: #0ea5e9;
  }
`;

const ProgressContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressRing = styled.svg`
  transform: rotate(-90deg);
  position: absolute;
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke: ${props => props.color};
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: ${props => props.dashArray};
  stroke-dashoffset: ${props => props.dashOffset};
  transition: stroke-dashoffset 0.5s ease-in-out;
`;

const StepInfo = styled.div`
  text-align: center;
  z-index: 1;
`;

const StepCountValue = styled.div`
  font-size: 42px;
  font-weight: 700;
  color: white;
  line-height: 1.2;
`;

const StepUnit = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  display: block;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 24px;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 16px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    transition: all 0.2s ease;
  }
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 14px;
    height: 14px;
    color: #0ea5e9;
  }
`;

const StatValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 3s infinite;
  z-index: 0;
  
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
  }
`;

const StepCount = () => {
  const totalSteps = 7166;
  const dailyGoal = 10000;
  const progress = (totalSteps / dailyGoal) * 100;
  const circumference = 2 * Math.PI * 85; // radius = 85
  const dashOffset = circumference - (progress / 100) * circumference;
  
  const caloriesBurned = Math.round(totalSteps * 0.04);
  const distanceKm = (totalSteps * 0.762) / 1000;

  return (
    <Container>
      <Header>
        <Title>
          <FiTrendingUp /> Daily Progress
        </Title>
      </Header>

      <ProgressContainer>
        <GlowEffect />
        <ProgressRing width="200" height="200">
          {/* Background circle */}
          <ProgressCircle
            cx="100"
            cy="100"
            r="85"
            color="rgba(255, 255, 255, 0.1)"
            dashArray={circumference}
            dashOffset="0"
          />
          {/* Progress circle */}
          <ProgressCircle
            cx="100"
            cy="100"
            r="85"
            color="#0ea5e9"
            dashArray={circumference}
            dashOffset={dashOffset}
          />
        </ProgressRing>
        <StepInfo>
          <StepCountValue>{totalSteps.toLocaleString()}</StepCountValue>
          <StepUnit>of {dailyGoal.toLocaleString()} steps</StepUnit>
        </StepInfo>
      </ProgressContainer>

      <StatsContainer>
        <StatCard>
          <StatLabel>
            <FiTarget /> Distance
          </StatLabel>
          <StatValue>{distanceKm.toFixed(2)} km</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>
            <FiTarget /> Calories
          </StatLabel>
          <StatValue>{caloriesBurned}</StatValue>
        </StatCard>
      </StatsContainer>
    </Container>
  );
};

export default StepCount; 