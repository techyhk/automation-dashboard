import { Text } from '@chakra-ui/react';
import React from 'react';

import { SummaryData } from '../types/summary_data';

interface SummaryProps {
  data: SummaryData;
}

const renderData = ({
  amount,
  name,
  color,
  key,
}: {
  amount: any;
  name: any;
  color: any;
  key: any;
}) => {
  return (
    <div key={key}>
      <Text fontSize="xl" fontWeight="bold" color={`${color}`}>
        {amount}
      </Text>

      <Text fontSize="sm" fontWeight="semibold" color={`${color}.500`}>
        {name}
      </Text>
    </div>
  );
};

export const Summary = ({ data }: SummaryProps) => {
  const textObj: {
    [key in keyof SummaryData]: string;
  } = {
    to_be_execute: 'Test cases to be execute',
    executed: 'Executed',
    passed: 'Passed',
    failed: 'Failed',
    in_progress: 'In Progress',
    skip: 'In Progress',
  };

  const colorObj: {
    [key in keyof SummaryData]: string;
  } = {
    to_be_execute: 'gray',
    executed: 'gray',
    passed: 'green',
    failed: 'red',
    in_progress: 'blue',
    skip: 'orange',
  };

  return (
    <div
      className={`bg-white rounded-md p-5 grid gap-4 md:grid-cols-6 md:grid-cols-1`}
    >
      {Object.keys(data).map((key, index) =>
        renderData({
          key: index,
          amount: (data as any)[key],
          name: (textObj as any)[key],
          color: (colorObj as any)[key],
        })
      )}
    </div>
  );
};
