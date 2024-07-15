import React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd'; // Importing Progress component from Ant Design
import Navbar from './Navbar'; // Adjust the import path as needed

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: ${(props) => props.theme.whiteColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-image: url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30451.jpg?w=740&t=st=1721035642~exp=1721036242~hmac=7c0e6d1341b19527a588b42a2035a9b5b630063c7460320bd9f782fb39a7f866'); // Background image URL
  background-size: 100% 100%; // Forces the background image to stretch and fill the container
  background-position: center;
`;

const DashboardCard = styled.div`
  background: rgba(255, 255, 255, 0.8); // White background with 80% opacity
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  backdrop-filter: blur(10px); // Adding blur to make the content stand out
`;

const DashboardTitle = styled.h2`
  color: ${(props) => props.theme.primaryColor};
`;

const StatTitle = styled.h3`
  color: ${(props) => props.theme.secondaryColor};
`;

const Dashboard = ({ currentUser }) => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <DashboardTitle>Dashboard</DashboardTitle>
        <DashboardCard>
          <StatTitle>Today's Stats</StatTitle>
          <p>Steps: 5000</p>
          <Progress percent={50} status="active" /> {/* Progress bar for steps */}
          <p>Calories Burned: 300</p>
          <Progress percent={30} status="active" /> {/* Progress bar for calories */}
        </DashboardCard>
        <DashboardCard>
          <StatTitle>Weekly Stats</StatTitle>
          <p>Steps: 35000</p>
          <Progress percent={70} status="active" /> {/* Progress bar for steps */}
          <p>Calories Burned: 2100</p>
          <Progress percent={60} status="active" /> {/* Progress bar for calories */}
        </DashboardCard>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
