import React, { useState } from 'react';
import styled from 'styled-components';

const ActivityLogContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: ${(props) => props.theme.whiteColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ActivityForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ActivityInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  border-radius: 4px;
`;

const ActivityButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ActivityLog = () => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logged activity: ${activity} - Duration: ${duration} minutes`);
    // Implement API call to log activity here
    setActivity('');
    setDuration('');
  };

  return (
    <ActivityLogContainer>
      <h2>Log Activity</h2>
      <ActivityForm onSubmit={handleSubmit}>
        <ActivityInput
          type="text"
          placeholder="Activity Name"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <ActivityInput
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <ActivityButton type="submit">Log Activity</ActivityButton>
      </ActivityForm>
    </ActivityLogContainer>
  );
};

export default ActivityLog;
