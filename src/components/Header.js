import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiBell, FiSearch, FiUser, FiSettings, FiLogOut, FiChevronDown, FiHeart, FiActivity, FiSun, FiMoon } from 'react-icons/fi';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
`;

const SearchBar = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 16px;
  padding-left: 40px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #0ea5e9;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NotificationSection = styled.div`
  position: relative;
`;

const NotificationBadge = styled.div`
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 8px;
    height: 8px;
    background: #ef4444;
    border-radius: 50%;
    border: 2px solid white;
  }
`;

const NotificationDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  min-width: 320px;
  z-index: 100;
  overflow: hidden;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s;
`;

const NotificationHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
`;

const NotificationTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
`;

const NotificationList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const NotificationItem = styled.div`
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border-bottom: 1px solid #f1f5f9;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const NotificationIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationMessage = styled.div`
  font-size: 14px;
  color: #0f172a;
  margin-bottom: 4px;
`;

const NotificationTime = styled.div`
  font-size: 12px;
  color: #64748b;
`;

const ProfileSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
  }
`;

const ProfileAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
`;

const ProfileName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #0f172a;
`;

const ProfileDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  min-width: 200px;
  z-index: 100;
  overflow: hidden;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${props => props.danger ? '#ef4444' : '#64748b'};
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
    color: ${props => props.danger ? '#dc2626' : '#0f172a'};
  }
`;

const Header = ({ onLogout }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const profileRef = useRef(null);
  const notificationsRef = useRef(null);

  const notifications = [
    {
      id: 1,
      icon: <FiHeart size={16} />,
      bg: '#ec4899',
      message: 'Your heart rate was higher than usual during your last workout',
      time: '2 hours ago'
    },
    {
      id: 2,
      icon: <FiMoon size={16} />,
      bg: '#8b5cf6',
      message: 'Great job! You achieved your sleep goal last night',
      time: '5 hours ago'
    },
    {
      id: 3,
      icon: <FiActivity size={16} />,
      bg: '#10b981',
      message: 'Time for your daily meditation session',
      time: '1 hour ago'
    },
    {
      id: 4,
      icon: <FiSun size={16} />,
      bg: '#f59e0b',
      message: 'Remember to drink water - stay hydrated!',
      time: '30 minutes ago'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setIsProfileOpen(false);
    onLogout();
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <Title>Dashboard</Title>
        <SearchBar>
          <SearchIcon>
            <FiSearch size={16} />
          </SearchIcon>
          <SearchInput placeholder="Search..." />
        </SearchBar>
      </LeftSection>

      <RightSection>
        <NotificationSection ref={notificationsRef}>
          <NotificationBadge onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}>
            <FiBell size={20} color="#64748b" />
          </NotificationBadge>
          <NotificationDropdown isOpen={isNotificationsOpen}>
            <NotificationHeader>
              <NotificationTitle>Health Updates</NotificationTitle>
            </NotificationHeader>
            <NotificationList>
              {notifications.map(notification => (
                <NotificationItem key={notification.id}>
                  <NotificationIcon bg={notification.bg}>
                    {notification.icon}
                  </NotificationIcon>
                  <NotificationContent>
                    <NotificationMessage>{notification.message}</NotificationMessage>
                    <NotificationTime>{notification.time}</NotificationTime>
                  </NotificationContent>
                </NotificationItem>
              ))}
            </NotificationList>
          </NotificationDropdown>
        </NotificationSection>
        <ProfileSection ref={profileRef} onClick={() => setIsProfileOpen(!isProfileOpen)}>
          <ProfileAvatar>
            <FiUser size={16} />
          </ProfileAvatar>
          <ProfileName>Rudraksh</ProfileName>
          <FiChevronDown size={16} color="#64748b" />
          <ProfileDropdown isOpen={isProfileOpen}>
            <DropdownItem>
              <FiUser size={16} />
              My Profile
            </DropdownItem>
            <DropdownItem>
              <FiSettings size={16} />
              Settings
            </DropdownItem>
            <DropdownItem danger onClick={handleLogout}>
              <FiLogOut size={16} />
              Sign Out
            </DropdownItem>
          </ProfileDropdown>
        </ProfileSection>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header; 