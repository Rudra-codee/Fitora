import React, { useState } from 'react';
import styled from 'styled-components';
import { FiBell, FiSearch, FiCalendar, FiPlus, FiTrendingUp, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 24px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const LeftSection = styled.div`
  flex: 1;
`;

const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.5px;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--gray);

  svg {
    width: 16px;
    height: 16px;
  }
`;

const DateDisplay = styled.span`
  font-size: 14px;
  color: var(--gray);
  display: flex;
  align-items: center;
  gap: 6px;
`;

const QuickActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 24px;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  border-radius: 12px;
  border: none;
  background: ${props => props.primary ? 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)' : 'white'};
  color: ${props => props.primary ? 'white' : '#6B7280'};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.primary ? '0 4px 12px rgba(59, 130, 246, 0.25)' : '0 2px 6px rgba(0, 0, 0, 0.05)'};
  border: ${props => props.primary ? 'none' : '1px solid #E5E7EB'};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => props.primary ? '0 6px 16px rgba(59, 130, 246, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)'};
    background: ${props => props.primary ? 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)' : '#F9FAFB'};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SearchBar = styled.div`
  position: relative;
  width: 300px;

  @media (max-width: 1024px) {
    width: 250px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  padding-left: 44px;
  border-radius: 16px;
  border: 2px solid #E5E7EB;
  background-color: #F9FAFB;
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3B82F6;
    background-color: white;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
    width: 350px;
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
`;

const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  padding: 8px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const SearchResultItem = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--dark);

  &:hover {
    background-color: #f8fafc;
  }

  svg {
    color: var(--primary);
  }
`;

const NotificationButton = styled.button`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
  color: #6B7280;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #E5E7EB;

  &:hover {
    background: white;
    color: #3B82F6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: '${props => props.count || ''}';
    position: absolute;
    top: -6px;
    right: -6px;
    min-width: 22px;
    height: 22px;
    background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
    border-radius: 11px;
    color: white;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    padding: 0 6px;
    box-shadow: 0 2px 6px rgba(239, 68, 68, 0.3);
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
  border: 1px solid #E5E7EB;

  &:hover {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const ProfileInfo = styled.div`
  text-align: right;
`;

const UserName = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: #1F2937;
  margin-bottom: 2px;
`;

const UserRole = styled.div`
  font-size: 13px;
  color: #6B7280;
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, #10B981 0%, #059669 100%);
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
  }
`;

const ProfileImage = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 14px;
  overflow: hidden;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #E5E7EB;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${UserProfile}:hover & {
    box-shadow: 0 0 0 2px #3B82F6;
  }
`;

const ProfileDropdown = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid #E5E7EB;
  padding: 8px;
  width: 220px;
  display: ${props => props.show ? 'block' : 'none'};
  animation: dropdownFade 0.2s ease;

  @keyframes dropdownFade {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DropdownItem = styled.div`
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${props => props.danger ? '#EF4444' : '#1F2937'};
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.danger ? '#FEF2F2' : '#F9FAFB'};
    transform: translateX(4px);
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.danger ? '#EF4444' : '#6B7280'};
  }
`;

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [notifications] = useState(3);
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  }).format(today);

  return (
    <HeaderContainer>
      <LeftSection>
        <PageTitle>
          Health Dashboard
        </PageTitle>
        <SubTitle>
          <DateDisplay>
            <FiCalendar />
            {formattedDate}
          </DateDisplay>
          <QuickActions>
            <ActionButton primary>
              <FiPlus /> Add Activity
            </ActionButton>
            <ActionButton>
              <FiTrendingUp /> View Reports
            </ActionButton>
          </QuickActions>
        </SubTitle>
      </LeftSection>

      <RightSection>
        <SearchBar>
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
          <SearchInput 
            placeholder="Search anything..." 
            onFocus={() => setShowSearch(true)}
            onBlur={() => setTimeout(() => setShowSearch(false), 200)}
          />
          <SearchResults show={showSearch}>
            <SearchResultItem>
              <FiTrendingUp /> View today's activity
            </SearchResultItem>
            <SearchResultItem>
              <FiCalendar /> Schedule workout
            </SearchResultItem>
            <SearchResultItem>
              <FiSearch /> Advanced search...
            </SearchResultItem>
          </SearchResults>
        </SearchBar>

        <NotificationButton count={notifications}>
          <FiBell size={20} />
        </NotificationButton>

        <UserProfile onClick={() => setShowProfile(!showProfile)}>
          <ProfileInfo>
            <UserName>Rudraksh</UserName>
            <UserRole><span></span>Premium Member</UserRole>
          </ProfileInfo>
          <ProfileImage>
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop" 
              alt="Profile" 
            />
          </ProfileImage>
          <ProfileDropdown show={showProfile}>
            <DropdownItem>
              <FiSettings /> Settings
            </DropdownItem>
            <DropdownItem>
              <FiHelpCircle /> Help & Support
            </DropdownItem>
            <DropdownItem danger>
              <FiLogOut /> Sign Out
            </DropdownItem>
          </ProfileDropdown>
        </UserProfile>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header; 