import React from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: ${(props) => props.theme.whiteColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignUpInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  border-radius: 4px;
`;

const SignUpButton = styled.button`
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

const SignUp = () => {
  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <SignUpForm>
        <SignUpInput type="text" placeholder="Name" />
        <SignUpInput type="email" placeholder="Email" />
        <SignUpInput type="password" placeholder="Password" />
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
