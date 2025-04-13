import React from 'react';
import styled from 'styled-components';
import { FiClock, FiCalendar, FiVideo, FiMessageCircle } from 'react-icons/fi';

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
  margin-bottom: 28px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 20px;
    height: 20px;
    color: #0f172a;
  }
`;

const TrainerSection = styled.div`
  display: flex;
  align-items: center;
  background: #f8fafc;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const TrainerAvatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  overflow: hidden;
  margin-right: 16px;
  border: 3px solid #e2e8f0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: #4ADE80;
    border-radius: 50%;
    bottom: 2px;
    right: 2px;
  border: 2px solid white;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TrainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TrainerName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #0f172a;
`;

const TrainerRole = styled.div`
  font-size: 14px;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ScheduleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const WorkoutCard = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  background: ${props => props.active ? '#f1f5f9' : '#f8fafc'};
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateX(4px);
    background: white;
  }
`;

const WorkoutIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => props.active ? '#e2e8f0' : '#f1f5f9'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: white;
  font-size: 20px;
`;

const WorkoutInfo = styled.div`
  flex: 1;
`;

const WorkoutName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #0f172a;
  margin-bottom: 4px;
`;

const WorkoutTime = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #64748b;
  gap: 6px;
`;

const MessageSection = styled.div`
  margin-top: auto;
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0f172a;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Message = styled.p`
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #f1f5f9;
  color: #0f172a;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
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
      <Header>
        <Title>
          <FiCalendar /> Training Schedule
        </Title>
      </Header>
      
      <TrainerSection>
        <TrainerAvatar>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Trainer" />
        </TrainerAvatar>
        <TrainerInfo>
          <TrainerName>John Smith</TrainerName>
          <TrainerRole>
            <span>Personal Trainer</span>
            <span>•</span>
            <span>5 years exp.</span>
          </TrainerRole>
        </TrainerInfo>
      </TrainerSection>
      
      <ScheduleSection>
        <WorkoutCard active={true}>
          <WorkoutIcon active={true}>
            <RunningIcon />
          </WorkoutIcon>
          <WorkoutInfo>
            <WorkoutName>High Intensity Running</WorkoutName>
            <WorkoutTime>
              <FiClock />
              Today at 13:00
            </WorkoutTime>
          </WorkoutInfo>
          <ActionButton>
            <FiVideo /> Join
          </ActionButton>
        </WorkoutCard>
        
        <WorkoutCard active={false}>
          <WorkoutIcon active={false}>
            <YogaIcon />
          </WorkoutIcon>
          <WorkoutInfo>
            <WorkoutName>Morning Yoga Session</WorkoutName>
            <WorkoutTime>
              <FiClock />
              Tomorrow at 08:00
            </WorkoutTime>
          </WorkoutInfo>
          <ActionButton>
            <FiVideo /> Preview
          </ActionButton>
        </WorkoutCard>
      </ScheduleSection>
      
      <MessageSection>
        <MessageHeader>
          <FiMessageCircle /> Trainer's Note
        </MessageHeader>
        <Message>
          I've customized a new training plan to accelerate your progress. This plan takes into account your recent performance and goals.
        </Message>
        <Message>
          I've also included detailed video guides for proper form and technique. Let's crush these goals together! 💪
        </Message>
      </MessageSection>
    </Container>
  );
};

export default TrainingAppointment; 