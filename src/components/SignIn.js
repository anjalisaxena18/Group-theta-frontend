import React from 'react';
import styled from 'styled-components';

const SignInContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: ${(props) => props.theme.whiteColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignInInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  border-radius: 4px;
`;

const SignInButton = styled.button`
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

const SignIn = () => {
  return (
    <SignInContainer>
      <h2>Sign In</h2>
      <SignInForm>
        <SignInInput type="email" placeholder="Email" />
        <SignInInput type="password" placeholder="Password" />
        <SignInButton type="submit">Sign In</SignInButton>
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;
