import React from 'react';
import styled from 'styled-components';
import { FiClock } from 'react-icons/fi';

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
  grid-area: training;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #0f172a;
`;

const TrainerSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const TrainerAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
`;

const TrainerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrainerName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #0f172a;
`;

const TrainerRole = styled.div`
  font-size: 14px;
  color: #64748b;
`;

const ScheduleSection = styled.div`
  margin-bottom: 25px;
`;

const WorkoutCard = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: ${props => props.active ? '#f8fafc' : 'transparent'};
  border: 1px solid ${props => props.active ? '#e2e8f0' : 'transparent'};
`;

const WorkoutIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props => props.bgColor || '#e2e8f0'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 18px;
  color: white;
`;

const WorkoutInfo = styled.div`
  flex: 1;
`;

const WorkoutName = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: #0f172a;
`;

const WorkoutTime = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #64748b;
`;

const ClockIcon = styled(FiClock)`
  margin-right: 5px;
  font-size: 12px;
`;

const MessageSection = styled.div`
  margin-top: auto;
  border-top: 1px solid #e2e8f0;
  padding-top: 20px;
`;

const Message = styled.p`
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const YogaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m12 19-2-4-4-1 6-8 4 2 4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 14 6 20M16 17l-2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrainingAppointment = () => {
  return (
    <Container>
      <Title>Weekly training appointment</Title>
      
      <TrainerSection>
        <TrainerAvatar>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Trainer" style={{ width: '100%', height: '100%' }} />
        </TrainerAvatar>
        <TrainerInfo>
          <TrainerName>John Smith</TrainerName>
          <TrainerRole>Your Trainer</TrainerRole>
        </TrainerInfo>
      </TrainerSection>
      
      <ScheduleSection>
        <WorkoutCard active={true}>
          <WorkoutIcon bgColor="#8b5cf6">
            <RunningIcon />
          </WorkoutIcon>
          <WorkoutInfo>
            <WorkoutName>Running</WorkoutName>
            <WorkoutTime>
              <ClockIcon />
              13:00/pm
            </WorkoutTime>
          </WorkoutInfo>
        </WorkoutCard>
        
        <WorkoutCard active={false}>
          <WorkoutIcon bgColor="#0ea5e9">
            <YogaIcon />
          </WorkoutIcon>
          <WorkoutInfo>
            <WorkoutName>Yoga</WorkoutName>
            <WorkoutTime>
              <ClockIcon />
              12:00/pm
            </WorkoutTime>
          </WorkoutInfo>
        </WorkoutCard>
      </ScheduleSection>
      
      <MessageSection>
        <Message>
          I have put together a new training plan for you that will help you reach your goals even faster. I have taken your wishes and your current level of training into account.
        </Message>
        <Message>
          Also added video material for proper exercise
        </Message>
      </MessageSection>
    </Container>
  );
};

export default TrainingAppointment; 