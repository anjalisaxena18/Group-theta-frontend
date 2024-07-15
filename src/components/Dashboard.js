import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: ${(props) => props.theme.whiteColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DashboardCard = styled.div`
  background: ${(props) => props.theme.lightGrayColor};
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

const DashboardTitle = styled.h2`
  color: ${(props) => props.theme.primaryColor};
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard</DashboardTitle>
      <DashboardCard>
        <h3>Today's Stats</h3>
        <p>Steps: 5000</p>
        <p>Calories Burned: 300</p>
      </DashboardCard>
      <DashboardCard>
        <h3>Weekly Stats</h3>
        <p>Steps: 35000</p>
        <p>Calories Burned: 2100</p>
      </DashboardCard>
    </DashboardContainer>
  );
};

export default Dashboard;
