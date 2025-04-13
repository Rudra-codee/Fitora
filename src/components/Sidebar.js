import React from 'react';
import styled from 'styled-components';
import { 
  FiHome, 
  FiCalendar, 
  FiHeart, 
  FiActivity,
  FiGrid,
  FiClipboard,
  FiLifeBuoy,
  FiShoppingBag,
  FiAward,
  FiUser,
  FiHelpCircle
} from 'react-icons/fi';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GiFruitBowl } from 'react-icons/gi';

const SidebarContainer = styled.div`
  background-color: white;
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 25px;
  margin-bottom: 40px;
`;

const LogoIcon = styled.div`
  background-color: #0f172a;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-weight: 700;
  font-size: 18px;
`;

const LogoText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
`;

const NavSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.div`
  font-size: 12px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 25px;
  margin-bottom: 15px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 25px;
  color: ${props => props.active ? '#0f172a' : '#64748b'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: ${props => props.active ? '#0ea5e9' : 'transparent'};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    color: #0f172a;
    background-color: ${props => props.active ? '#f8fafc' : 'transparent'};
  }
`;

const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${props => props.active ? '#0ea5e9' : 'inherit'};
`;

const menuItems = [
  {
    id: null,
    label: 'Dashboard',
    icon: <FiHome size={18} />
  },
  {
    id: 'health-tracker',
    label: 'AI Health Tracker',
    icon: <FiGrid size={18} />
  },
  {
    id: 'daily-progress',
    label: 'Daily Progress Tracker',
    icon: <FiCalendar size={18} />
  },
  {
    id: 'help-support',
    label: 'Help & Support',
    icon: <FiHelpCircle size={18} />
  }
];

const healthServicesItems = [
  {
    id: 'local-doctors',
    label: 'Local Doctor Support',
    icon: <FiHeart size={18} />
  },
  {
    id: 'medicine-shop',
    label: 'Medicine Shop',
    icon: <FiShoppingBag size={18} />
  },
  {
    id: 'plans',
    label: 'Yoga & Gym Plans',
    icon: <FiAward size={18} />
  }
];

const wellnessItems = [
  {
    id: 'diet-plan',
    label: 'Personal Diet Plan',
    icon: <GiFruitBowl size={18} />
  },
  {
    id: 'health-records',
    label: 'Health Records',
    icon: <FiClipboard size={18} />
  },
  {
    id: 'help-support',
    label: 'Help & Support',
    icon: <FiLifeBuoy size={18} />
  }
];

const Sidebar = ({ onComponentSelect, activeComponent }) => {
  return (
    <SidebarContainer>
      <Logo>
        <LogoIcon>F</LogoIcon>
        <LogoText>Fitora</LogoText>
      </Logo>

      <NavSection>
        <SectionTitle>General</SectionTitle>
        {menuItems.map(item => (
          <NavItem 
            key={item.id}
            active={activeComponent === item.id}
            onClick={() => onComponentSelect(item.id)}
          >
            <IconContainer active={activeComponent === item.id}>
              {item.icon}
            </IconContainer>
            {item.label}
          </NavItem>
        ))}
      </NavSection>

      <NavSection>
        <SectionTitle>Health Services</SectionTitle>
        {healthServicesItems.map(item => (
          <NavItem 
            key={item.id}
            active={activeComponent === item.id}
            onClick={() => onComponentSelect(item.id)}
          >
            <IconContainer active={activeComponent === item.id}>
              {item.icon}
            </IconContainer>
            {item.label}
          </NavItem>
        ))}
      </NavSection>

      <NavSection>
        <SectionTitle>Wellness</SectionTitle>
        {wellnessItems.map(item => (
          <NavItem 
            key={item.id}
            active={activeComponent === item.id}
            onClick={() => onComponentSelect(item.id)}
          >
            <IconContainer active={activeComponent === item.id}>
              {item.icon}
            </IconContainer>
            {item.label}
          </NavItem>
        ))}
      </NavSection>
    </SidebarContainer>
  );
};

export default Sidebar;
