import React, { useState } from 'react';
import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';

const Container = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #1e293b;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 700;
`;

const DietOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const DietOption = styled.div`
  background: ${props => props.selected ? '#f0f9ff' : '#ffffff'};
  border: 2px solid ${props => props.selected ? '#0ea5e9' : '#e2e8f0'};
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const DietIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 12px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const DietName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
`;

const InputSection = styled.div`
  max-width: 600px;
  margin: 0 auto 30px;
  text-align: center;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Label = styled.span`
  font-size: 18px;
  color: #475569;
`;

const Input = styled.input`
  width: 100px;
  padding: 8px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 18px;
  text-align: center;
  outline: none;

  &:focus {
    border-color: #0ea5e9;
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 18px;
  outline: none;

  &:focus {
    border-color: #0ea5e9;
  }
`;

const MacroSection = styled.div`
  margin-bottom: 30px;
`;

const MacroRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  justify-content: center;
  color: #475569;
  font-size: 16px;
`;

const MacroDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const GenerateButton = styled.button`
  background: #f97316;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: block;
  margin: 0 auto;

  &:hover {
    background: #ea580c;
    transform: translateY(-2px);
  }
`;

const CalorieCounter = () => {
  const [selectedDiet, setSelectedDiet] = useState('anything');
  const [calories, setCalories] = useState(1800);
  const [meals, setMeals] = useState(3);

  const dietOptions = [
    { id: 'anything', name: 'Anything', icon: '🥪' },
    { id: 'keto', name: 'Keto', icon: '🥑' },
    { id: 'mediterranean', name: 'Mediterranean', icon: '🫒' },
    { id: 'paleo', name: 'Paleo', icon: '🍖' },
    { id: 'vegan', name: 'Vegan', icon: '🥬' },
    { id: 'vegetarian', name: 'Vegetarian', icon: '🥦' },
  ];

  return (
    <Container>
      <Title>Create your meal plan right here in seconds</Title>

      <DietOptionsGrid>
        {dietOptions.map(diet => (
          <DietOption 
            key={diet.id}
            selected={selectedDiet === diet.id}
            onClick={() => setSelectedDiet(diet.id)}
          >
            <DietIcon>{diet.icon}</DietIcon>
            <DietName>{diet.name}</DietName>
          </DietOption>
        ))}
      </DietOptionsGrid>

      <InputSection>
        <InputRow>
          <Label>I want to eat</Label>
          <Input 
            type="number" 
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <Label>calories</Label>
        </InputRow>

        <InputRow>
          <Label>in</Label>
          <Select 
            value={meals}
            onChange={(e) => setMeals(e.target.value)}
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
          <Label>meals</Label>
        </InputRow>
      </InputSection>

      <MacroSection>
        <MacroRow>
          <MacroDot color="#fbbf24" /> At least 90g Carbs
        </MacroRow>
        <MacroRow>
          <MacroDot color="#0ea5e9" /> At least 40g Fat
        </MacroRow>
        <MacroRow>
          <MacroDot color="#a855f7" /> At least 90g Protein
        </MacroRow>
      </MacroSection>

      <GenerateButton>
        Generate
      </GenerateButton>
    </Container>
  );
};

export default CalorieCounter; 