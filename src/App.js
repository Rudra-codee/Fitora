import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import Header from './components/Header';
import StepCount from './components/StepCount';
import NutritionTracking from './components/NutritionTracking';
import SleepRecovery from './components/SleepRecovery';
import MentalHealth from './components/MentalHealth';
import Achievements from './components/Achievements';
import TrainingAppointment from './components/TrainingAppointment';
import DailyProgressTracker from './components/DailyProgressTracker';
import LocalDoctors from './components/LocalDoctors';
import Sidebar from './components/Sidebar';
import MedicineShop from './components/MedicineShop';
import AIHealthTracker from './components/AIHealthTracker';
import PlansPage from './components/PlansPage';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #f1f5f9;
    color: #0f172a;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --primary: #0ea5e9;
    --primary-dark: #0284c7;
    --secondary: #8b5cf6;
    --success: #22c55e;
    --warning: #f59e0b;
    --danger: #ef4444;
    --dark: #0f172a;
    --gray: #64748b;
    --light: #f8fafc;
    --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --card-shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;

const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--light);
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 280px;
  min-height: 100vh;
  background: var(--light);
  position: relative;
`;

const Dashboard = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
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
  border-radius: 24px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--card-shadow-hover);
  }
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
  display: flex;
`;

const FullScreenComponent = styled.div`
  position: fixed;
  top: 0;
  left: 280px;
  right: 0;
  bottom: 0;
  background-color: var(--light);
  z-index: 50;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    left: 0;
    padding: 1rem;
  }
`;

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentSelect = (component) => {
    setActiveComponent(component);
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
      default:
        return (
          <Dashboard>
            <Header />
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

  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <Sidebar onComponentSelect={handleComponentSelect} activeComponent={activeComponent} />
        <MainContent>
          {activeComponent && activeComponent !== 'dashboard' ? (
            <FullScreenComponent>
              {renderComponent()}
            </FullScreenComponent>
          ) : (
            renderComponent()
          )}
        </MainContent>
      </AppLayout>
    </>
  );
}

export default App;
