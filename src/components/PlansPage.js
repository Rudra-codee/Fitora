import React from 'react';
import styled from 'styled-components';
import { FiCheck, FiActivity, FiSun, FiMusic, FiHeart } from 'react-icons/fi';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  color: #0f172a;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #64748b;
  margin-bottom: 3rem;
  font-size: 1.2rem;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PlanCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const PlanCategory = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: ${props => props.color};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 600;
`;

const PlanTitle = styled.h2`
  color: #0f172a;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;

  span {
    font-size: 1rem;
    color: #64748b;
    font-weight: 400;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 2rem 0;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #334155;

  svg {
    margin-right: 0.5rem;
    color: ${props => props.color};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${props => props.color};
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const WorkoutTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const WorkoutCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  background-color: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0ea5e9;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const WorkoutTitle = styled.h3`
  color: #0f172a;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const WorkoutDescription = styled.p`
  color: #64748b;
  margin-bottom: 1.5rem;
`;

const ClassList = styled.ul`
  list-style: none;
  text-align: left;
`;

const ClassItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #334155;

  svg {
    margin-right: 0.5rem;
    color: #0ea5e9;
    width: 1rem;
    height: 1rem;
  }
`;

const plans = [
  {
    title: "Basic Wellness",
    price: "$9.99",
    period: "/month",
    features: [
      "Access to 50+ yoga classes",
      "Basic meditation sessions",
      "2 live classes per month",
      "Mobile app access"
    ],
    category: "STARTER",
    color: "#4CAF50"
  },
  {
    title: "Premium Fitness",
    price: "$19.99",
    period: "/month",
    features: [
      "All Basic features",
      "Unlimited strength training",
      "Personal workout planner",
      "Nutrition guidance",
      "Progress tracking"
    ],
    category: "POPULAR",
    color: "#2196F3"
  },
  {
    title: "Ultimate Wellness",
    price: "$29.99",
    period: "/month",
    features: [
      "All Premium features",
      "Unlimited live classes",
      "1-on-1 coaching session monthly",
      "Dance fitness classes",
      "Advanced meditation programs",
      "Priority support"
    ],
    category: "BEST VALUE",
    color: "#9C27B0"
  }
];

const workoutTypes = [
  {
    title: "Yoga Sessions",
    description: "From beginner to advanced poses",
    icon: <FiHeart />,
    classes: [
      "Vinyasa Flow",
      "Hatha Yoga",
      "Yin Yoga",
      "Power Yoga"
    ]
  },
  {
    title: "Strength Training",
    description: "Build strength and muscle",
    icon: <FiActivity />,
    classes: [
      "Full Body Workout",
      "HIIT Training",
      "Weight Training",
      "Core Strength"
    ]
  },
  {
    title: "Dance Fitness",
    description: "Fun cardio workouts",
    icon: <FiMusic />,
    classes: [
      "Zumba",
      "Hip Hop Cardio",
      "Dance Aerobics",
      "Rhythm Flow"
    ]
  },
  {
    title: "Meditation",
    description: "Mind and soul wellness",
    icon: <FiSun />,
    classes: [
      "Guided Meditation",
      "Breathing Exercises",
      "Mindfulness",
      "Sleep Meditation"
    ]
  }
];

const PlansPage = () => {
  console.log('PlansPage component mounted');
  return (
    <Container>
      <Title>Choose Your Wellness Journey</Title>
      <Subtitle>One subscription for a complete mind and body transformation</Subtitle>

      <PlansGrid>
        {plans.map((plan) => (
          <PlanCard key={plan.title}>
            <PlanCategory color={plan.color}>{plan.category}</PlanCategory>
            <PlanTitle>{plan.title}</PlanTitle>
            <PlanPrice>
              {plan.price}
              <span>{plan.period}</span>
            </PlanPrice>
            <FeatureList>
              {plan.features.map((feature) => (
                <Feature key={feature} color={plan.color}>
                  <FiCheck />
                  {feature}
                </Feature>
              ))}
            </FeatureList>
            <Button color={plan.color}>Get Started</Button>
          </PlanCard>
        ))}
      </PlansGrid>

      <Title>Available Workout Types</Title>
      <WorkoutTypesGrid>
        {workoutTypes.map((type) => (
          <WorkoutCard key={type.title}>
            <IconWrapper>{type.icon}</IconWrapper>
            <WorkoutTitle>{type.title}</WorkoutTitle>
            <WorkoutDescription>{type.description}</WorkoutDescription>
            <ClassList>
              {type.classes.map((class_) => (
                <ClassItem key={class_}>
                  <FiCheck />
                  {class_}
                </ClassItem>
              ))}
            </ClassList>
          </WorkoutCard>
        ))}
      </WorkoutTypesGrid>
    </Container>
  );
};

export default PlansPage; 