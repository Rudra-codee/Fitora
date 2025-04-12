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
  grid-area: achievements;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #0f172a;
`;

const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GoalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const GoalIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  background-color: ${props => props.bgColor || '#e2e8f0'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
`;

const GoalContent = styled.div`
  flex: 1;
`;

const GoalName = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #0f172a;
  margin-bottom: 5px;
`;

const GoalTarget = styled.div`
  font-size: 13px;
  color: #64748b;
`;

const WaterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.5C16.1421 21.5 19.5 18.1421 19.5 14C19.5 9.94975 12 2.5 12 2.5C12 2.5 4.5 9.94975 4.5 14C4.5 18.1421 7.85786 21.5 12 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const YogaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 19.5L7.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 19.5L16.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 7V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12L16.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12L7.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const Achievements = () => {
  return (
    <Container>
      <Title>Achievements and goals</Title>
      
      <GoalsContainer>
        <GoalItem>
          <GoalIcon bgColor="#0ea5e9">
            <YogaIcon />
          </GoalIcon>
          <GoalContent>
            <GoalName>Yoga</GoalName>
            <GoalTarget>At least an hour a day</GoalTarget>
          </GoalContent>
        </GoalItem>
        
        <GoalItem>
          <GoalIcon bgColor="#8b5cf6">
            <WaterIcon />
          </GoalIcon>
          <GoalContent>
            <GoalName>Water consumption</GoalName>
            <GoalTarget>At least 1.5 liters per day</GoalTarget>
          </GoalContent>
        </GoalItem>
      </GoalsContainer>
    </Container>
  );
};

export default Achievements; 