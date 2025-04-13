import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import AIHealthTracker from './components/AIHealthTracker';
import DailyProgressTracker from './components/DailyProgressTracker';
import LocalDoctors from './components/LocalDoctors';
import MedicineShop from './components/MedicineShop';
import PlansPage from './components/PlansPage';
import CalorieCounter from './components/CalorieCounter';
import Header from './components/Header';
import MentalHealth from './components/MentalHealth';
import SleepRecovery from './components/SleepRecovery';
import NutritionTracking from './components/NutritionTracking';
import TrainingAppointment from './components/TrainingAppointment';
import Achievements from './components/Achievements';
import HelpSupport from './components/HelpSupport';
import HealthRecords from './components/HealthRecords';
import Login from './components/Login';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8fafc;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  margin-left: 280px;
  overflow-y: auto;
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashboardGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  grid-template-areas:
    "mental mental mental mental sleep sleep sleep nt nt nt nt nt"
    "mental mental mental mental train train train train train goals goals goals";
  margin-top: 2rem;

  @media (max-width: 1400px) {
    grid-template-areas:
      "mental mental mental mental sleep sleep sleep nt nt nt nt nt"
      "train train train train train goals goals goals goals goals goals goals";
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas:
      "mental mental mental mental sleep sleep sleep sleep"
      "nt nt nt nt train train train train"
      "goals goals goals goals goals goals goals goals";
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    grid-template-areas:
      "mental"
      "sleep"
      "nt"
      "train"
      "goals";
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
  overflow: hidden;
`;

const MentalHealthCard = styled(Card)`
  grid-area: mental;
  background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
  min-height: 420px;
  display: flex;
`;

const SleepCard = styled(Card)`
  grid-area: sleep;
  background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
  min-height: 200px;
  display: flex;
`;

const NutritionCard = styled(Card)`
  grid-area: nt;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  min-height: 200px;
  display: flex;
`;

const TrainingCard = styled(Card)`
  grid-area: train;
  background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
  min-height: 200px;
  display: flex;
`;

const AchievementsCard = styled(Card)`
  grid-area: goals;
  background: linear-gradient(135deg, #EC4899 0%, #BE185D 100%);
  min-height: 200px;
`;

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveComponent(null);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'health-tracker':
        return <AIHealthTracker />;
      case 'daily-progress':
        return <DailyProgressTracker />;
      case 'local-doctors':
        return <LocalDoctors />;
      case 'medicine-shop':
        return <MedicineShop />;
      case 'plans':
        return <PlansPage />;
      case 'diet-plan':
        return <CalorieCounter />;
      case 'help-support':
        return <HelpSupport />;
      case 'health-records':
        return <HealthRecords />;
      default:
        return (
          <Dashboard>
            <Header onLogout={handleLogout} />
            <DashboardGrid>
              <MentalHealthCard>
                <MentalHealth />
              </MentalHealthCard>
              <SleepCard>
                <SleepRecovery />
              </SleepCard>
              <NutritionCard>
                <NutritionTracking />
              </NutritionCard>
              <TrainingCard>
                <TrainingAppointment />
              </TrainingCard>
              <AchievementsCard>
                <Achievements />
              </AchievementsCard>
            </DashboardGrid>
          </Dashboard>
        );
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <AppContainer>
      <Sidebar 
        onComponentSelect={setActiveComponent} 
        activeComponent={activeComponent} 
      />
      <MainContent>
        {renderComponent()}
      </MainContent>
    </AppContainer>
  );
}

export default App;
