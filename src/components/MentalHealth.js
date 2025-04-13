import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FiActivity, FiSmile, FiHeart, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

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
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 8px;
  color: #0f172a;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #64748b;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
`;

const Metric = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 20px;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-4px);
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const MetricLabel = styled.div`
  font-size: 14px;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  svg {
    width: 16px;
    height: 16px;
    color: #64748b;
  }
`;

const MetricValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #0f172a;
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const MetricTrend = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.isPositive ? '#10b981' : '#ef4444'};
  margin-top: 8px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ChartContainer = styled.div`
  flex: 1;
  min-height: 180px;
  margin-top: 20px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f8fafc;
    border-radius: 16px;
    z-index: 0;
  }
`;

const HeartRateSection = styled.div`
  margin-top: 24px;
  background: #f8fafc;
  border-radius: 16px;
  padding: 20px;
`;

const HeartRateHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const HeartRateTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
`;

const HeartRateValue = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HeartRateLabel = styled.div`
  font-size: 14px;
  color: #64748b;
`;

const HeartRateVisualization = styled.div`
  height: 100px;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #f1f5f9;
`;

const BloodPressureSection = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 20px;
`;

const BloodPressureHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const BloodPressureTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
`;

const BloodPressureValue = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BloodPressureLabel = styled.div`
  font-size: 14px;
  color: #64748b;
`;

const BloodPressureVisualization = styled.div`
  height: 100px;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #f1f5f9;
`;


const MoodSelector = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  background: #f1f5f9;
  border-radius: 12px;
  padding: 8px;
  gap: 8px;
`;

const MoodOption = styled.button`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: ${props => props.selected ? '#e2e8f0' : 'transparent'};
  color: ${props => props.selected ? '#0f172a' : '#64748b'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #e2e8f0;
    transform: translateY(-1px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const MentalHealth = () => {
  const [selectedMood, setSelectedMood] = useState('Great');

  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        data: Array.from({ length: 30 }, () => Math.random() * 4 + 6),
        borderColor: 'rgba(255, 255, 255, 0.9)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1F2937',
        bodyColor: '#1F2937',
        padding: 12,
        borderRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `Mood Level: ${context.parsed.y.toFixed(1)}`;
          }
        }
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        min: 0,
        max: 12,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  return (
    <Container>
      <Header>
        <Title>Mental Wellness</Title>
        <Subtitle>Track your emotional well-being and mental health journey</Subtitle>
      </Header>

      <MoodSelector>
        <MoodOption 
          selected={selectedMood === 'Great'} 
          onClick={() => setSelectedMood('Great')}
        >
          <FiSmile /> Great
        </MoodOption>
        <MoodOption 
          selected={selectedMood === 'Good'} 
          onClick={() => setSelectedMood('Good')}
        >
          <FiSmile /> Good
        </MoodOption>
        <MoodOption 
          selected={selectedMood === 'Okay'} 
          onClick={() => setSelectedMood('Okay')}
        >
          <FiSmile /> Okay
        </MoodOption>
        <MoodOption 
          selected={selectedMood === 'Not Great'} 
          onClick={() => setSelectedMood('Not Great')}
        >
          <FiSmile /> Not Great
        </MoodOption>
      </MoodSelector>
      
      <MetricsContainer>
        <Metric>
          <MetricLabel>
            <FiActivity /> Stress Level
          </MetricLabel>
          <MetricValue>
            6.7
          </MetricValue>
          <MetricTrend isPositive={true}>
            <FiTrendingDown /> 12% lower
          </MetricTrend>
        </Metric>
        
        <Metric>
          <MetricLabel>
            <FiHeart /> Emotional Balance
          </MetricLabel>
          <MetricValue>
            8.1
          </MetricValue>
          <MetricTrend isPositive={true}>
            <FiTrendingUp /> 8% better
          </MetricTrend>
        </Metric>
        
        <Metric>
          <MetricLabel>
            <FiSmile /> Overall Mood
          </MetricLabel>
          <MetricValue>
            9.2
          </MetricValue>
          <MetricTrend isPositive={true}>
            <FiTrendingUp /> 15% improved
          </MetricTrend>
        </Metric>
      </MetricsContainer>

      <ChartContainer>
        <Line data={chartData} options={options} />
      </ChartContainer>

      <BloodPressureSection>
        <BloodPressureHeader>
          <FiHeart size={20} color="#ef4444" />
          <BloodPressureTitle>Blood Pressure Tracker</BloodPressureTitle>
        </BloodPressureHeader>
        
        <BloodPressureValue>
          120/80 <BloodPressureLabel>mmHg</BloodPressureLabel>
        </BloodPressureValue>
        
        <BloodPressureVisualization>
          {/* This would be replaced with an actual visualization component */}
          <div style={{
            position: 'absolute',
            bottom: '50%',
            left: 0,
            right: 0,
            height: '2px',
            background: '#ef4444',
            animation: 'pulse 1.5s infinite'
          }} />
        </BloodPressureVisualization>
      </BloodPressureSection>
      
      <HeartRateSection>
        <HeartRateHeader>
          <FiActivity size={20} color="#ef4444" />
          <HeartRateTitle>Heart Rate Tracker</HeartRateTitle>
        </HeartRateHeader>
        
        <HeartRateValue>
          72 <HeartRateLabel>BPM</HeartRateLabel>
        </HeartRateValue>
        
        <HeartRateVisualization>
          {/* This would be replaced with an actual visualization component */}
          <div style={{
            position: 'absolute',
            bottom: '50%',
            left: 0,
            right: 0,
            height: '2px',
            background: '#ef4444',
            animation: 'pulse 1.5s infinite'
          }} />
        </HeartRateVisualization>
      </HeartRateSection>
    </Container>
  );
};

export default MentalHealth; 