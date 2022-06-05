import React from 'react';
import { MainWrapper } from '@components/MainWrapper';
import { Header } from '@components/Header';
import { ExecutionForm } from './components/ExecutionForm';
import { Summary } from './components/Summary';
import { Chart } from './components/Chart';

export const Dashboard = () => {
  const data = {
    to_be_execute: 500,
    executed: 400,
    passed: 350,
    failed: 35,
    in_progress: 100,
    skip: 15,
  };
  return (
    <MainWrapper>
      <Header name="Dashboard" />

      <div className="mt-16">
        <ExecutionForm />
      </div>

      <div className="md:mt-10 mt-16 gap-10 grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-1">
        <div className="xl:col-span-3 lg:col-span-2">
          <Summary data={data} />
        </div>
        <div className="xl:block lg:block hidden">
          <Chart data={data} />
        </div>
      </div>
    </MainWrapper>
  );
};
