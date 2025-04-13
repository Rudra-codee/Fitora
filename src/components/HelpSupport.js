import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMessageCircle, FiHelpCircle, FiBook, FiPhone, FiMail, FiChevronRight, FiSearch } from 'react-icons/fi';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

const Header = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 40px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 24px;
  padding-left: 56px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #0ea5e9;
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${props => props.bg};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
`;

const CardContent = styled.p`
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const CardLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #0ea5e9;
`;

const ContactSection = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 16px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const ContactCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ContactIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #f1f5f9;
  color: #0ea5e9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const ContactMethod = styled.div`
  font-weight: 500;
  color: #0f172a;
`;

const ContactInfo = styled.div`
  font-size: 14px;
  color: #64748b;
`;

const HelpSupport = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <Header>
        <Title>How can we help you?</Title>
        <Subtitle>
          Search our help center or browse through our most common questions
        </Subtitle>
      </Header>

      <SearchContainer>
        <SearchIcon>
          <FiSearch size={20} />
        </SearchIcon>
        <SearchInput 
          placeholder="Search for help..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>

      <Grid>
        <Card>
          <CardHeader>
            <IconContainer bg="#3b82f6">
              <FiBook size={20} />
            </IconContainer>
            <CardTitle>Getting Started Guide</CardTitle>
          </CardHeader>
          <CardContent>
            Learn the basics of using our health tracking platform and set up your profile.
          </CardContent>
          <CardLink>
            Read More <FiChevronRight size={16} />
          </CardLink>
        </Card>

        <Card>
          <CardHeader>
            <IconContainer bg="#8b5cf6">
              <FiMessageCircle size={20} />
            </IconContainer>
            <CardTitle>FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            Find answers to the most commonly asked questions about our services.
          </CardContent>
          <CardLink>
            View FAQs <FiChevronRight size={16} />
          </CardLink>
        </Card>

        <Card>
          <CardHeader>
            <IconContainer bg="#10b981">
              <FiHelpCircle size={20} />
            </IconContainer>
            <CardTitle>Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent>
            Having issues? Find solutions to common problems and technical difficulties.
          </CardContent>
          <CardLink>
            Get Help <FiChevronRight size={16} />
          </CardLink>
        </Card>
      </Grid>

      <ContactSection>
        <ContactTitle>Still need help?</ContactTitle>
        <Subtitle>
          Our support team is available 24/7 to assist you with any questions or concerns
        </Subtitle>
        
        <ContactGrid>
          <ContactCard>
            <ContactIcon>
              <FiPhone size={24} />
            </ContactIcon>
            <ContactMethod>Phone Support</ContactMethod>
            <ContactInfo>1-800-HEALTH</ContactInfo>
            <ContactInfo>24/7 Support</ContactInfo>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
              <FiMail size={24} />
            </ContactIcon>
            <ContactMethod>Email Support</ContactMethod>
            <ContactInfo>support@health.com</ContactInfo>
            <ContactInfo>Response within 24h</ContactInfo>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
              <FiMessageCircle size={24} />
            </ContactIcon>
            <ContactMethod>Live Chat</ContactMethod>
            <ContactInfo>Available 9AM - 5PM</ContactInfo>
            <ContactInfo>Mon - Fri</ContactInfo>
          </ContactCard>
        </ContactGrid>
      </ContactSection>
    </Container>
  );
};

export default HelpSupport; 