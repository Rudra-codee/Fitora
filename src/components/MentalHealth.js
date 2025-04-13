import React from 'react';
import styled from 'styled-components';
import { FiActivity, FiTrendingUp, FiSmile } from 'react-icons/fi';

const Container = styled.div`
  color: white;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  backdrop-filter: blur(10px);
`;

const StatLabel = styled.div`
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const MoodChart = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  backdrop-filter: blur(10px);
`;

const ChartTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChartTrend = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${props => props.positive ? '#4ade80' : '#f87171'};
`;

const MentalHealth = () => {
  return (
    <Container>
      <Title>Mental Wellness</Title>
      
      <StatsGrid>
        <StatCard>
          <StatLabel>
            <FiActivity />
            Stress Level
          </StatLabel>
          <StatValue>Low</StatValue>
        </StatCard>

        <StatCard>
          <StatLabel>
            <FiSmile />
            Mood Score
          </StatLabel>
          <StatValue>8.5/10</StatValue>
        </StatCard>
      </StatsGrid>

      <MoodChart>
        <ChartTitle>
          Weekly Mood Trend
          <ChartTrend positive>
            <FiTrendingUp /> +12%
          </ChartTrend>
        </ChartTitle>
        {/* Chart visualization would go here */}
      </MoodChart>
    </Container>
  );
};

export default MentalHealth; 