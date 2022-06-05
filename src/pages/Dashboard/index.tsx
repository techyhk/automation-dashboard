import React from 'react';
import { MainWrapper } from '@components/MainWrapper';
import { Header } from '@components/Header';
import { ExecutionForm } from './components/ExecutionForm';
import { Summary } from './components/Summary';

export const Dashboard = () => {
  return (
    <MainWrapper>
      <Header name="Dashboard" />

      <div className="mt-16">
        <ExecutionForm />
      </div>

      <div className="mt-16 gap-10 grid md:grid-cols-5 grid-cols-1">
        <div className="col-span-3">
          <Summary
            data={{
              to_be_execute: 500,
              executed: 400,
              passed: 350,
              failed: 35,
              in_progress: 100,
              skip: 15,
            }}
          />
        </div>
        <div></div>
      </div>
    </MainWrapper>
  );
};
