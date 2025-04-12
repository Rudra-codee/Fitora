import React from 'react';
import styled from 'styled-components';
import { FiBell, FiSearch } from 'react-icons/fi';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #0f172a;
`;

const LogoIcon = styled.div`
  background-color: #0f172a;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const SearchBar = styled.div`
  position: relative;
  width: 40%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  padding-left: 40px;
  border-radius: 20px;
  border: none;
  background-color: #e2e8f0;
  font-size: 14px;
  &:focus {
    outline: none;
    background-color: #edf2f7;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e2e8f0;
  margin-left: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserInfo = styled.div`
  text-align: right;
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const UserAge = styled.div`
  font-size: 12px;
  color: #64748b;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon>M</LogoIcon>
        Magnus
      </Logo>
      <SearchBar>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <SearchInput placeholder="Search" />
      </SearchBar>
      <UserProfile>
        <FiBell size={20} style={{ marginRight: '15px', color: '#64748b' }} />
        <UserInfo>
          <UserName>Emily Johnson</UserName>
          <UserAge>28 years old</UserAge>
        </UserInfo>
        <ProfileIcon>
          <img src="https://via.placeholder.com/40" alt="Profile" style={{ width: '100%', height: '100%' }} />
        </ProfileIcon>
      </UserProfile>
    </HeaderContainer>
  );
};

export default Header; 