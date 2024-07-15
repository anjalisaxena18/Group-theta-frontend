import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: ${(props) => props.theme.whiteColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfileCard = styled.div`
  background: ${(props) => props.theme.lightGrayColor};
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

const ProfileTitle = styled.h2`
  color: ${(props) => props.theme.primaryColor};
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileTitle>Profile</ProfileTitle>
      <ProfileCard>
        <h3>Goals</h3>
        <p>Steps: 10000/day</p>
        <p>Calories Burned: 500/day</p>
      </ProfileCard>
      <ProfileCard>
        <h3>Achievements</h3>
        <p>Reached 10000 steps on July 10, 2024</p>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
