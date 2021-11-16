import React from 'react';
import { PrimaryTitle, SubTitle } from 'stylesheet/Title/Title.styled';
import { LoginPageWrapper } from './LoginPage.styled';

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      <PrimaryTitle purple>Sign in to Test React System</PrimaryTitle>
      <SubTitle gray>Enter your detail belows</SubTitle>
    </LoginPageWrapper>
  );
}
