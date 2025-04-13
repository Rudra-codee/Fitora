import React from 'react';
import styled from 'styled-components';
import { FiMoon, FiSun, FiActivity } from 'react-icons/fi';

const Container = styled.div`
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const SleepTime = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #0f172a;
  background: #f1f5f9;
  padding: 8px 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const TimeUnit = styled.span`
  font-size: 13px;
  color: #64748b;
`;

const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
`;

const MetricItem = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-4px);
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const MetricTitle = styled.div`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const MetricValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
`;

const VisualizationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;

const DotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 100%;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#3b82f6' : '#e2e8f0'};
  transition: all 0.2s ease;
`;

const SleepQualityBar = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  margin-top: auto;
`;

const QualityLabel = styled.div`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QualityValue = styled.span`
  color: #0f172a;
  font-weight: 600;
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
`;

const SleepRecovery = () => {
  // Generate dots for visualizations
  const generateDots = (percentage) => {
    const totalDots = 25;
    const activeDots = Math.round((percentage / 100) * totalDots);
    
    return Array.from({ length: totalDots }).map((_, index) => (
      <Dot 
        key={index} 
        active={index < activeDots}
      />
    ));
  };

  return (
    <Container>
      <Header>
        <Title>
          <FiMoon /> Sleep Quality
        </Title>
        <SleepTime>
          15.02.24 <TimeUnit>Today</TimeUnit>
        </SleepTime>
      </Header>
      
      <MetricsContainer>
        <MetricItem>
          <MetricTitle>
            <FiMoon /> Deep Sleep
          </MetricTitle>
          <MetricValue>72%</MetricValue>
          <VisualizationContainer>
            <DotContainer>
              {generateDots(72)}
            </DotContainer>
          </VisualizationContainer>
        </MetricItem>
        
        <MetricItem>
          <MetricTitle>
            <FiSun /> Restful Sleep
          </MetricTitle>
          <MetricValue>60%</MetricValue>
          <VisualizationContainer>
            <DotContainer>
              {generateDots(60)}
            </DotContainer>
          </VisualizationContainer>
        </MetricItem>
        
        <MetricItem>
          <MetricTitle>
            <FiActivity /> REM Phases
          </MetricTitle>
          <MetricValue>30%</MetricValue>
          <VisualizationContainer>
            <DotContainer>
              {generateDots(30)}
            </DotContainer>
          </VisualizationContainer>
        </MetricItem>
      </MetricsContainer>

      <SleepQualityBar>
        <QualityLabel>
          Overall Sleep Quality
          <QualityValue>85%</QualityValue>
        </QualityLabel>
        <ProgressBar progress={85} />
      </SleepQualityBar>
    </Container>
  );
};

export default SleepRecovery; 