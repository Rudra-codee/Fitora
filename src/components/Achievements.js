import React from 'react';
import styled from 'styled-components';
import { FiAward, FiTarget } from 'react-icons/fi';

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

const GoalsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const GoalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
`;

const GoalIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoalInfo = styled.div`
  flex: 1;
`;

const GoalTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const GoalProgress = styled.div`
  font-size: 12px;
  opacity: 0.8;
`;

const Achievements = () => {
  return (
    <Container>
      <Header>
        <Title>Goals & Achievements</Title>
      </Header>

      <GoalsList>
        <GoalItem>
          <GoalIcon>
            <FiTarget size={18} />
          </GoalIcon>
          <GoalInfo>
            <GoalTitle>Weekly Workout Goal</GoalTitle>
            <GoalProgress>3 of 5 workouts completed</GoalProgress>
          </GoalInfo>
        </GoalItem>

        <GoalItem>
          <GoalIcon>
            <FiAward size={18} />
          </GoalIcon>
          <GoalInfo>
            <GoalTitle>Monthly Challenge</GoalTitle>
            <GoalProgress>15 days streak maintained</GoalProgress>
          </GoalInfo>
        </GoalItem>
      </GoalsList>
    </Container>
  );
};

export default Achievements; 