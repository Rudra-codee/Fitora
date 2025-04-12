import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import StepCount from './components/StepCount';
import NutritionTracking from './components/NutritionTracking';
import SleepRecovery from './components/SleepRecovery';
import MentalHealth from './components/MentalHealth';
import Achievements from './components/Achievements';
import TrainingAppointment from './components/TrainingAppointment';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #f8fafc;
    color: #0f172a;
  }
`;

const Dashboard = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
`;

const DashboardGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Dashboard>
        <Header />
        <DashboardGrid>
          <Card><StepCount /></Card>
          <Card><NutritionTracking /></Card>
          <Card><SleepRecovery /></Card>
          <Card><MentalHealth /></Card>
          <Card><Achievements /></Card>
          <Card><TrainingAppointment /></Card>
        </DashboardGrid>
      </Dashboard>
    </>
  );
}

export default App;
