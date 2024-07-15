import React from 'react';
import styled from 'styled-components';

const RewardsContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: ${(props) => props.theme.whiteColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const RewardsCard = styled.div`
  background: ${(props) => props.theme.lightGrayColor};
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

const RewardsTitle = styled.h2`
  color: ${(props) => props.theme.primaryColor};
`;

const Rewards = () => {
  return (
    <RewardsContainer>
      <RewardsTitle>Achievements</RewardsTitle>
      <RewardsCard>
        <h3>Daily Badges</h3>
        <p>Badge 1 - Earned on July 12, 2024</p>
        <p>Badge 2 - Earned on July 14, 2024</p>
      </RewardsCard>
      <RewardsCard>
        <h3>Weekly Badges</h3>
        <p>Badge 3 - Earned on July 10-16, 2024</p>
      </RewardsCard>
    </RewardsContainer>
  );
};

export default Rewards;