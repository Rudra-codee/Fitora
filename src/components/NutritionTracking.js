import React from 'react';
import styled from 'styled-components';
import { 
  FiDroplet, 
  FiActivity, 
  FiTarget
} from 'react-icons/fi';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  grid-area: nutrition;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
  color: #0f172a;
`;

const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
`;

const MetricItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`;

const MetricContent = styled.div`
  flex: 1;
`;

const MetricHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const MetricLabel = styled.div`
  font-size: 14px;
  color: #64748b;
`;

const MetricValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
`;

const Unit = styled.span`
  font-size: 12px;
  color: #64748b;
`;

const ProgressBar = styled.div`
  height: 6px;
  background-color: #e2e8f0;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background-color: ${props => props.progressColor};
    border-radius: 3px;
  }
`;

const CircularProgress = styled.div`
  width: 140px;
  height: 140px;
  position: relative;
  margin: auto;
  margin-top: 20px;
`;

const Circle = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const Background = styled.circle`
  fill: none;
  stroke: #e2e8f0;
  stroke-width: 10;
`;

const Progress = styled.circle`
  fill: none;
  stroke: #0f172a;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: ${props => props.circumference};
  stroke-dashoffset: ${props => props.dashoffset};
  transition: stroke-dashoffset 0.5s ease;
`;

const CalorieText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const CalorieValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #0f172a;
`;

const CalorieUnit = styled.div`
  font-size: 14px;
  color: #64748b;
`;

const NutritionTracking = () => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const calories = 2;
  const totalCalories = 240;
  const caloriePercentage = (calories / totalCalories) * 100;
  const dashoffset = circumference - (circumference * caloriePercentage) / 100;

  return (
    <Container>
      <Title>Nutrition Tracking</Title>
      
      <MetricsContainer>
        <MetricItem>
          <IconContainer bgColor="#10b981">
            <FiActivity />
          </IconContainer>
          <MetricContent>
            <MetricHeader>
              <MetricLabel>Calorie intake</MetricLabel>
              <MetricValue>2,000</MetricValue>
            </MetricHeader>
            <ProgressBar progress={80} progressColor="#10b981" />
          </MetricContent>
        </MetricItem>
        
        <MetricItem>
          <IconContainer bgColor="#8b5cf6">
            <FiTarget />
          </IconContainer>
          <MetricContent>
            <MetricHeader>
              <MetricLabel>Vitamins/minerals</MetricLabel>
              <MetricValue>35%</MetricValue>
            </MetricHeader>
            <ProgressBar progress={35} progressColor="#8b5cf6" />
          </MetricContent>
        </MetricItem>
        
        <MetricItem>
          <IconContainer bgColor="#0ea5e9">
            <FiDroplet />
          </IconContainer>
          <MetricContent>
            <MetricHeader>
              <MetricLabel>Hydration Levels</MetricLabel>
              <MetricValue>2.5L<Unit>/day</Unit></MetricValue>
            </MetricHeader>
            <ProgressBar progress={65} progressColor="#0ea5e9" />
          </MetricContent>
        </MetricItem>
      </MetricsContainer>
      
      <CircularProgress>
        <Circle>
          <Background cx="70" cy="70" r={radius} />
          <Progress 
            cx="70" 
            cy="70" 
            r={radius} 
            circumference={circumference}
            dashoffset={dashoffset}
          />
        </Circle>
        <CalorieText>
          <CalorieValue>2/240</CalorieValue>
          <CalorieUnit>Kcal/day</CalorieUnit>
        </CalorieText>
      </CircularProgress>
    </Container>
  );
};

export default NutritionTracking; 