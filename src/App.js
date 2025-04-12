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
    background: #f8fafc;
    color: #0f172a;
  }
`;

const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 280px; /* Same as sidebar width */
`;

const Dashboard = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const DashboardGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "mental mental step"
    "training sleep nutrition"
    "achievements achievements achievements";
  margin-top: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "mental mental"
      "step training"
      "sleep nutrition"
      "achievements achievements";
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "mental"
      "step"
      "training"
      "sleep"
      "nutrition"
      "achievements";
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

const MentalHealthCard = styled(Card)`
  grid-area: mental;
`;

const StepCountCard = styled(Card)`
  grid-area: step;
`;

const TrainingCard = styled(Card)`
  grid-area: training;
`;

const SleepCard = styled(Card)`
  grid-area: sleep;
`;

const NutritionCard = styled(Card)`
  grid-area: nutrition;
`;

const AchievementsCard = styled(Card)`
  grid-area: achievements;
`;

const FullScreenComponent = styled.div`
  position: fixed;
  top: 0;
  left: 280px;
  right: 0;
  bottom: 0;
  background-color: #f8fafc;
  z-index: 50;
  padding: 2rem;
  overflow-y: auto;
`;

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentSelect = (component) => {
    console.log('Selected component:', component);
    setActiveComponent(component);
  };

  const renderComponent = () => {
    console.log('Rendering component:', activeComponent);
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
        console.log('Rendering PlansPage component');
        return <PlansPage />;
      default:
        return (
          <Dashboard>
            <Header />
            <DashboardGrid>
              <MentalHealthCard>
                <MentalHealth />
              </MentalHealthCard>
              <StepCountCard>
                <StepCount />
              </StepCountCard>
              <TrainingCard>
                <TrainingAppointment />
              </TrainingCard>
              <SleepCard>
                <SleepRecovery />
              </SleepCard>
              <NutritionCard>
                <NutritionTracking />
              </NutritionCard>
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
