import React, { useState } from 'react';
import styled from 'styled-components';


const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  // background: rgba(0,0,0,0); 
  background-image: url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30451.jpg?w=740&t=st=1721035642~exp=1721036242~hmac=7c0e6d1341b19527a588b42a2035a9b5b630063c7460320bd9f782fb39a7f866'); // Background image URL
  `;

const ProfileCard = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.5); /* Transparent white */
  backdrop-filter: blur(10px); /* Blur effect */
`;

const ProfileTitle = styled.h2`
  color: ${(props) => props.theme.primaryColor};
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const UserDetails = styled.div`
  flex: 1;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.progress}%;
  height: 10px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 5px;
`;

const Profile = () => {
  // Example user details (replace with actual data from state or props)
  const [user] = useState({
    name: 'Ujjwal Deep',
    email: 'UjjwalDeep429@inzint.com',
    avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fsololeveling%2Fcomments%2Ff7vzyr%2Fimage_of_sung_jinwoos_rockhard_abs_for_all_the%2F&psig=AOvVaw1Lp9vip6GTxPAuYU4qn21O&ust=1721130101321000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiPxbX7qIcDFQAAAAAdAAAAABAE', // Example image URL
    goals: {
      steps: 8000,
      caloriesBurned: 400,
    },
    achievements: {
      stepsReached: 10000,
    },
  });

  return (
    <ProfileContainer>
      <ProfileTitle>Profile</ProfileTitle>
      <ProfileCard>
        <ProfileInfo>
          <Avatar src={user.avatar} alt="Profile Picture" />
          <UserDetails>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </UserDetails>
        </ProfileInfo>
        <h3>Goals</h3>
        <ProgressBarContainer>
          <p>Steps: {user.goals.steps}/day</p>
          <ProgressBar progress={(user.goals.steps / 10000) * 100} />
        </ProgressBarContainer>
        <ProgressBarContainer>
          <p>Calories Burned: {user.goals.caloriesBurned}/day</p>
          <ProgressBar progress={(user.goals.caloriesBurned / 500) * 100} />
        </ProgressBarContainer>
      </ProfileCard>
      <ProfileCard>
        <h3>Achievements</h3>
        <p>Reached {user.achievements.stepsReached} steps on July 10, 2024</p>
      </ProfileCard>
      {/* Include image upload feature here */}
    </ProfileContainer>
  );
};

export default Profile;
