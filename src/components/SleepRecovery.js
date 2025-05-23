import React from 'react';
import styled from 'styled-components';
import { FiMoon, FiClock } from 'react-icons/fi';

const Container = styled.div`
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  margin: 0;
`;

const Stats = styled.div`
  display: flex;
  gap: 20px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`;

const StatInfo = styled.div``;

const StatValue = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const StatLabel = styled.div`
  font-size: 12px;
  opacity: 0.8;
`;

const SleepRecovery = () => {
  return (
    <Container>
      <Header>
        <Title>Sleep & Recovery</Title>
      </Header>

      <Stats>
        <StatItem>
          <StatIcon>
            <FiMoon size={18} />
          </StatIcon>
          <StatInfo>
            <StatValue>7h 20m</StatValue>
            <StatLabel>Sleep Duration</StatLabel>
          </StatInfo>
        </StatItem>

        <StatItem>
          <StatIcon>
            <FiClock size={18} />
          </StatIcon>
          <StatInfo>
            <StatValue>85%</StatValue>
            <StatLabel>Sleep Quality</StatLabel>
          </StatInfo>
        </StatItem>
      </Stats>
    </Container>
  );
};

export default SleepRecovery; 