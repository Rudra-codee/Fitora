import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch, FiMapPin, FiClock, FiStar, FiInfo } from 'react-icons/fi';

const Container = styled.div`
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #64748b;
`;

const SearchSection = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const SearchBar = styled.div`
  flex: 1;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-size: 14px;
  color: #0f172a;
  background-color: #f8fafc;

  &:focus {
    outline: none;
    border-color: #0ea5e9;
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
`;

const FilterButton = styled.button`
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background-color: white;
  color: #64748b;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f8fafc;
    border-color: #cbd5e1;
  }
`;

const DoctorsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DoctorCard = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;

  &:hover {
    border-color: #0ea5e9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
`;

const DoctorImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
  margin-right: 20px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DoctorInfo = styled.div`
  flex: 1;
`;

const DoctorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const DoctorName = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    font-size: 14px;
    color: #64748b;
  }
`;

const ConsultButton = styled.button`
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  background-color: #0ea5e9;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #0284c7;
  }
`;

const DoctorDetails = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #64748b;

  svg {
    color: #0ea5e9;
  }
`;

const ExperienceTag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background-color: #f0f9ff;
  color: #0ea5e9;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  margin-right: 8px;
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .price {
    font-size: 18px;
    font-weight: 600;
    color: #0f172a;
  }

  .cashback {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    color: #ca8a04;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const LocalDoctors = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Md Yusuf Shareef',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      specialization: 'General Practitioner',
      experience: '8 YEARS',
      qualification: 'MBBS',
      location: 'Apollo 24|7 Virtual Clinic - Telangana, Hyderabad',
      city: 'Hyderabad',
      rating: 84,
      price: 360,
      cashback: 54,
      availableIn: 4
    },
    {
      id: 2,
      name: 'Dr. Shubham Chauhan',
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
      specialization: 'General Practitioner',
      experience: '4 YEARS',
      qualification: 'MBBS',
      location: 'Apollo 24|7 Virtual Clinic - Uttar Pradesh, Lucknow',
      city: 'Lucknow',
      rating: 78,
      price: 350,
      cashback: 53,
      availableIn: 4
    },
    {
      id: 3,
      name: 'Dr Nainar Sravanthi',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      specialization: 'General Practitioner',
      experience: '11 YEARS',
      qualification: 'M.B.B.S',
      location: 'Apollo 24|7 Virtual Clinic - Andhra Pradesh, Visakhapatnam',
      city: 'Visakhapatnam',
      rating: 92,
      price: 450,
      cashback: 68,
      availableIn: 9
    }
  ];

  return (
    <Container>
      <Header>
        <Title>Find Local Doctors</Title>
        <Subtitle>Connect with trusted healthcare professionals in your area</Subtitle>
      </Header>

      <SearchSection>
        <SearchBar>
          <SearchIcon>
            <FiSearch size={20} />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search by doctor name, specialization, or location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>
        <FilterButton>Filters</FilterButton>
      </SearchSection>

      <DoctorsList>
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id}>
            <DoctorImage>
              <img src={doctor.image} alt={doctor.name} />
            </DoctorImage>
            <DoctorInfo>
              <DoctorHeader>
                <DoctorName>
                  <h2>
                    {doctor.name}
                    <FiInfo size={16} color="#64748b" />
                  </h2>
                  <p>{doctor.specialization}</p>
                </DoctorName>
                <PriceTag>
                  <div className="price">₹{doctor.price}</div>
                  <div className="cashback">
                    <img src="https://www.practostatic.com/consumer-home/practo-care/1631634827/circle_logo.png" alt="circle" />
                    ₹{doctor.cashback} Cashback
                  </div>
                </PriceTag>
              </DoctorHeader>

              <div>
                <ExperienceTag>{doctor.experience} • {doctor.qualification}</ExperienceTag>
                <ExperienceTag>{doctor.rating}% ({Math.floor(Math.random() * 30 + 50)}+ Patients)</ExperienceTag>
              </div>

              <DoctorDetails>
                <DetailItem>
                  <FiMapPin size={16} />
                  {doctor.city}
                </DetailItem>
                <DetailItem>
                  <FiClock size={16} />
                  Available in {doctor.availableIn} minutes
                </DetailItem>
                <DetailItem>
                  <FiStar size={16} />
                  {doctor.rating}% Positive Feedback
                </DetailItem>
              </DoctorDetails>
            </DoctorInfo>
            <ConsultButton>Consult Online</ConsultButton>
          </DoctorCard>
        ))}
      </DoctorsList>
    </Container>
  );
};

export default LocalDoctors; 