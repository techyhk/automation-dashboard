import React from 'react';
import { MainWrapper } from '@components/MainWrapper';
import { Header } from '@components/Header';
import { ExecutionForm } from './components/ExecutionForm';

export const Dashboard = () => {
  return (
    <MainWrapper>
      <Header name="Dashboard" />

      <div className="mt-16">
        <ExecutionForm />
      </div>
    </MainWrapper>
  );
};
