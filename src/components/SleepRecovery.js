import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  grid-area: sleep;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #0f172a;
`;

const SleepTime = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
`;

const TimeUnit = styled.span`
  font-size: 12px;
  color: #64748b;
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const MetricItem = styled.div`
  text-align: center;
  flex: 1;
`;

const MetricTitle = styled.div`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 10px;
`;

const MetricValue = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 10px;
`;

const VisualizationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  max-width: 80px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.active ? props.color : '#e2e8f0'};
  opacity: ${props => props.active ? 1 : 0.4};
`;

const SleepRecovery = () => {
  // Generate dots for visualizations
  const generateDots = (percentage, color) => {
    const totalDots = 35;
    const activeDots = Math.round((percentage / 100) * totalDots);
    
    return Array.from({ length: totalDots }).map((_, index) => (
      <Dot 
        key={index} 
        active={index < activeDots} 
        color={color} 
      />
    ));
  };

  return (
    <Container>
      <Header>
        <Title>Sleep and Recovery</Title>
        <SleepTime>
          15.02.24<TimeUnit>/year</TimeUnit>
        </SleepTime>
      </Header>
      
      <MetricsContainer>
        <MetricItem>
          <MetricTitle>Deep sleep</MetricTitle>
          <MetricValue>72%</MetricValue>
          <VisualizationContainer>
            <DotContainer>
              {generateDots(72, '#8b5cf6')}
            </DotContainer>
          </VisualizationContainer>
        </MetricItem>
        
        <MetricItem>
          <MetricTitle>A restful sleep</MetricTitle>
          <MetricValue>60%</MetricValue>
          <VisualizationContainer>
            <DotContainer>
              {generateDots(60, '#0ea5e9')}
            </DotContainer>
          </VisualizationContainer>
        </MetricItem>
        
        <MetricItem>
          <MetricTitle>REM phases</MetricTitle>
          <MetricValue>30%</MetricValue>
          <VisualizationContainer>
            <DotContainer>
              {generateDots(30, '#f59e0b')}
            </DotContainer>
          </VisualizationContainer>
        </MetricItem>
      </MetricsContainer>
    </Container>
  );
};

export default SleepRecovery; 