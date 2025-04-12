import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #0f172a;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 15px;
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Metric = styled.div`
  text-align: left;
`;

const MetricLabel = styled.div`
  font-size: 12px;
  color: #64748b;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const MetricIcon = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  margin-right: 5px;
  background-color: ${props => props.color};
`;

const MetricValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #0f172a;
  display: flex;
  align-items: baseline;
`;

const MetricTrend = styled.span`
  font-size: 12px;
  margin-left: 5px;
  color: ${props => props.isUp ? '#16a34a' : '#dc2626'};
`;

const ChartContainer = styled.div`
  height: 120px;
  margin-top: 30px;
`;

const MentalHealth = () => {
  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        data: Array.from({ length: 30 }, () => Math.random() * 4 + 6),
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
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
        enabled: false,
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
  };

  return (
    <Container>
      <Title>Mental Health</Title>
      <Subtitle>Your Path to Emotional Well-Being</Subtitle>
      
      <MetricsContainer>
        <Metric>
          <MetricLabel>
            <MetricIcon color="#8b5cf6" />
            Stress Levels
          </MetricLabel>
          <MetricValue>
            6.7
            <MetricTrend isUp={false}>/3 ↓</MetricTrend>
          </MetricValue>
        </Metric>
        
        <Metric>
          <MetricLabel>
            <MetricIcon color="#f59e0b" />
            Dopamine levels
          </MetricLabel>
          <MetricValue>
            8.1
            <MetricTrend isUp={true}>/21 ↑</MetricTrend>
          </MetricValue>
        </Metric>
        
        <Metric>
          <MetricLabel>
            <MetricIcon color="#0ea5e9" />
            Calm level
          </MetricLabel>
          <MetricValue>
            9.9
            <MetricTrend isUp={true}>/21 ↑</MetricTrend>
          </MetricValue>
        </Metric>
      </MetricsContainer>

      <ChartContainer>
        <Line data={chartData} options={options} />
      </ChartContainer>
    </Container>
  );
};

export default MentalHealth; 