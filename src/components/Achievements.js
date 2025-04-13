import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #ffff;
  border-radius: 12px;
  max-height: 110%;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #0f172a;
`;

const GoalsContainer = styled.div`
  display: grid;
  gap: 20px;
`;

const GoalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${props => props.completed ? '#f0fdf4' : '#f8fafc'};
  border: 1px solid ${props => props.completed ? '#86efac' : '#e2e8f0'};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const GoalIcon = styled.div`
  width: 55px;
  height: 55px;
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

const GoalProgress = styled.div`
  font-size: 12px;
  color: ${props => props.completed ? '#16a34a' : '#64748b'};
  margin-top: 4px;
`;

// Icons
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

const RunningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L15 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 4L15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 7L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 9L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 11L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 13L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M1 15L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MeditationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6.34 17.66L4.93 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19.07 4.93L17.66 6.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SleepIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const Achievements = () => {
  return (
    <Container>
      <Title>Achievements and goals</Title>
      
      <GoalsContainer>
        <GoalItem completed>
          <GoalIcon bgColor="#3b82f6">
            <YogaIcon />
          </GoalIcon>
          <GoalContent>
            <GoalName>Yoga Practice</GoalName>
            <GoalTarget>Daily 1-hour session</GoalTarget>
            <GoalProgress completed>Completed: 7/7 days this week</GoalProgress>
          </GoalContent>
        </GoalItem>
        
        <GoalItem completed>
          <GoalIcon bgColor="#14b8a6">
            <WaterIcon />
          </GoalIcon>
          <GoalContent>
            <GoalName>Water Intake</GoalName>
            <GoalTarget>2 liters per day</GoalTarget>
            <GoalProgress completed>Completed: 6/7 days this week</GoalProgress>
          </GoalContent>
        </GoalItem>

        <GoalItem>
          <GoalIcon bgColor="#f59e0b">
            <RunningIcon />
          </GoalIcon>
          <GoalContent>
            <GoalName>Running Challenge</GoalName>
            <GoalTarget>5km run, 3 times a week</GoalTarget>
            <GoalProgress>Progress: 2/3 runs this week</GoalProgress>
          </GoalContent>
        </GoalItem>

        <GoalItem>
          <GoalIcon bgColor="#8b5cf6">
            <MeditationIcon />
          </GoalIcon>
          <GoalContent>
            <GoalName>Meditation</GoalName>
            <GoalTarget>20 minutes daily</GoalTarget>
            <GoalProgress>Progress: 4/7 days this week</GoalProgress>
          </GoalContent>
        </GoalItem>

        <GoalItem>
          <GoalIcon bgColor="#ec4899">
            <SleepIcon />
          </GoalIcon>
          <GoalContent>
            <GoalName>Sleep Quality</GoalName>
            <GoalTarget>7-8 hours of quality sleep</GoalTarget>
            <GoalProgress>Progress: 5/7 nights this week</GoalProgress>
          </GoalContent>
        </GoalItem>
      </GoalsContainer>
    </Container>
  );
};

export default Achievements; 