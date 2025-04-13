import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight, FiMoreHorizontal, FiCheck } from 'react-icons/fi';

const Container = styled.div`
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  color: #0f172a;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #0f172a;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const MonthYear = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f1f5f9;
    color: #0f172a;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 30px;
`;

const WeekDay = styled.div`
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  padding: 8px 0;
`;

const Day = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: ${props => props.isToday ? '600' : '400'};
  color: ${props => props.isSelected ? 'white' : props.isCurrentMonth ? '#0f172a' : '#94a3b8'};
  background-color: ${props => props.isSelected ? '#0ea5e9' : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  &:hover {
    background-color: ${props => props.isSelected ? '#0ea5e9' : '#f1f5f9'};
  }

  ${props => props.hasActivity && `
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${props.isSelected ? 'white' : '#0ea5e9'};
    }
  `}

  ${props => props.isCompleted && `
    .date-number {
      opacity: 0.3;
    }
    
    .tick-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #22c55e;
      font-size: 20px;
      z-index: 1;
    }
  `}
`;

const TimeTrackingSection = styled.div`
  margin-top: 20px;
`;

const TimeTrackingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const TimeTrackingTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TimeUnit = styled.div`
  display: flex;
  gap: 8px;
`;

const UnitButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background-color: ${props => props.active ? '#0ea5e9' : '#f1f5f9'};
  color: ${props => props.active ? 'white' : '#64748b'};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.active ? '#0ea5e9' : '#e2e8f0'};
  }
`;

const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-top: 15px;
`;

const TimeBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeBar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f1f5f9;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${props => props.height}%;
    background-color: #0ea5e9;
    border-radius: 8px;
  }
`;

const TimeLabel = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  margin-top: 8px;
  text-align: center;
`;

const DayLabel = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 8px;
  text-align: center;
`;

const DailyProgressTracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeUnit, setActiveUnit] = useState('hours');

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const timeData = [
    { day: 'Mon', hours: 4, completed: true },
    { day: 'Tue', hours: 6, completed: true },
    { day: 'Wed', hours: 8, completed: true },
    { day: 'Thu', hours: 2, completed: false },
    { day: 'Fri', hours: 4, completed: false },
    { day: 'Sat', hours: 2, completed: false },
    { day: 'Sun', hours: 1, completed: false },
  ];

  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    
    // Add days from previous month
    const firstDayOfWeek = firstDay.getDay() || 7;
    for (let i = firstDayOfWeek - 1; i > 0; i--) {
      days.push({
        date: new Date(firstDay.getTime() - i * 24 * 60 * 60 * 1000),
        isCurrentMonth: false
      });
    }
    
    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
      days.push({
        date,
        isCurrentMonth: true,
        hasActivity: Math.random() > 0.5,
        isCompleted: date < new Date() && Math.random() > 0.3 // Random completion for past dates
      });
    }
    
    // Add days from next month
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(lastDay.getTime() + i * 24 * 60 * 60 * 1000),
        isCurrentMonth: false
      });
    }
    
    return days;
  };

  const navigateMonth = (direction) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + direction, 1));
  };

  return (
    <Container>
      <Header>
        <Title>Daily Progress Tracker</Title>
        <NavigationButton>
          <FiMoreHorizontal size={20} />
        </NavigationButton>
      </Header>

      <CalendarHeader>
        <MonthYear>
          {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </MonthYear>
        <div>
          <NavigationButton onClick={() => navigateMonth(-1)}>
            <FiChevronLeft size={20} />
          </NavigationButton>
          <NavigationButton onClick={() => navigateMonth(1)}>
            <FiChevronRight size={20} />
          </NavigationButton>
        </div>
      </CalendarHeader>

      <CalendarGrid>
        {weekDays.map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
        {generateCalendarDays().map((day, index) => (
          <Day
            key={index}
            isCurrentMonth={day.isCurrentMonth}
            isToday={day.date.toDateString() === new Date().toDateString()}
            isSelected={day.date.toDateString() === selectedDate.toDateString()}
            hasActivity={day.hasActivity}
            isCompleted={day.isCompleted}
            onClick={() => setSelectedDate(day.date)}
          >
            <span className="date-number">{day.date.getDate()}</span>
            {day.isCompleted && <FiCheck className="tick-icon" />}
          </Day>
        ))}
      </CalendarGrid>

      <TimeTrackingSection>
        <TimeTrackingHeader>
          <TimeTrackingTitle>
            Track time spent at work
          </TimeTrackingTitle>
          <TimeUnit>
            <UnitButton
              active={activeUnit === 'hours'}
              onClick={() => setActiveUnit('hours')}
            >
              hours
            </UnitButton>
            <UnitButton
              active={activeUnit === 'minutes'}
              onClick={() => setActiveUnit('minutes')}
            >
              minutes
            </UnitButton>
          </TimeUnit>
        </TimeTrackingHeader>

        <TimelineGrid>
          {timeData.map((data, index) => (
            <TimeBlock key={index}>
              <DayLabel>{data.day}</DayLabel>
              <TimeBar height={(data.hours / 8) * 100} />
              <TimeLabel>
                {activeUnit === 'hours' ? `${data.hours}h` : `${data.hours * 60}m`}
                {data.completed && <FiCheck style={{ color: '#22c55e', marginLeft: '4px' }} />}
              </TimeLabel>
            </TimeBlock>
          ))}
        </TimelineGrid>
      </TimeTrackingSection>
    </Container>
  );
};

export default DailyProgressTracker; 