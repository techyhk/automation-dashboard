import React from 'react';

import { Table } from '@components/Table';

export const TaskInProgressList = () => {
  const columns = [
    {
      Header: 'Build Name',
      accessor: 'name' as const,
    },
    {
      Header: 'Browser',
      accessor: 'browser' as const,
    },
    {
      Header: 'Market',
      accessor: 'market' as const,
    },
    {
      Header: 'Participant',
      accessor: 'participant' as const,
    },
    {
      Header: 'category',
      accessor: 'category' as const,
    },
    {
      Header: 'Started On',
      accessor: 'startedOn' as const,
    },
  ];

  const data: Array<{
    name: string;
    browser: string;
    market: string;
    participant: string;
    category: string;
    startedOn: string;
  }> = [
    {
      name: 'RegressionTest_AuroraR41',
      browser: 'Chrome',
      market: 'NEM',
      participant: 'AURORA',
      category: '',
      startedOn: 'Dec 12,2021 05:38:12 PM',
    },
  ];

  return (
    <Table data={data} columns={columns} heading="Tasks in Progress"></Table>
  );
};
