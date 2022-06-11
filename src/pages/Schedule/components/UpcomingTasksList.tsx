import React from 'react';

import { Table } from '@components/Table';

export const UpcomingTasksList = () => {
  const columns = [
    {
      Header: 'Schedule Name',
      accessor: 'name' as const,
    },
    {
      Header: 'Start time',
      accessor: 'startTime' as const,
    },
    {
      Header: 'Description',
      accessor: 'description' as const,
    },
  ];

  const data: Array<{
    name: string;
    startTime: string;
    description: string;
  }> = [
    {
      name: 'RegressionTest_VICGAS',
      startTime: 'Jan 1, 2022 06:00:00 PM',
      description: 'Run regression test for VICGAS with Schema R40',
    },
    {
      name: 'RUNIL_SAGAS',
      startTime: 'Jan 7, 2022 06:00:00 PM',
      description: 'Run all IL test cases for SAGAS',
    },
  ];

  return (
    <Table data={data} columns={columns} heading="Upcomming Tasks"></Table>
  );
};
