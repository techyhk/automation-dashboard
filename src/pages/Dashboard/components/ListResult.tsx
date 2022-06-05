import React from 'react';

import { Table } from '@components/Table';
import { dataTranslate } from '../configs/dataTranslate';
import { TestCaseStatus } from '../types/summary_data';
import { Button, Icon } from '@chakra-ui/react';
import { MdOutlineCancel } from 'react-icons/md';
import { FilterListResult } from './FilterListResult';

export const ListResult = () => {
  const columns = [
    {
      Header: 'Market',
      accessor: 'market' as const,
    },
    {
      Header: 'Test Case Name',
      accessor: 'name' as const,
    },
    {
      Header: 'Description',
      accessor: 'description' as const,
    },
    {
      Header: 'Category',
      accessor: 'category' as const,
    },
    {
      Header: 'Status',
      accessor: 'status' as const,
    },
    {
      Header: '',
      accessor: 'action' as const,
    },
  ];

  const data: Array<{
    market: string;
    name: string;
    description: string;
    category: string;
    status: TestCaseStatus;
  }> = [
    {
      market: 'NEM',
      name: 'MELU-PIN-6630_1',
      description: 'EQ - IL -FT: Planned Interruption Notification',
      category: 'OWNX',
      status: TestCaseStatus.to_be_execute,
    },
    {
      market: 'NEM',
      name: 'MELU-PIN-6630_1',
      description: 'EQ - IL -FT: Planned Interruption Notification',
      category: 'OWNX',
      status: TestCaseStatus.passed,
    },
  ];

  const generateData = () => {
    return data.map((row) => ({
      market: row.market,
      name: row.name,
      description: row.description,
      category: row.category,
      status: dataTranslate[row.status],
      action:
        row.status === 'to_be_execute' ? (
          <Button
            colorScheme="gray"
            onClick={() => console.log('skip testcase!')}
            size="sm"
          >
            <Icon as={MdOutlineCancel} fontSize="20" />
          </Button>
        ) : null,
    }));
  };

  return (
    <Table
      data={generateData()}
      columns={columns}
      heading="Test Execution Result"
      filter={() => (
        <div>
          <FilterListResult />
        </div>
      )}
    ></Table>
  );
};
