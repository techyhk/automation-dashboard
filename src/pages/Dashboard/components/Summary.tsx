import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { dataTranslate } from '../configs/dataTranslate';

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
    <div key={key} className="flex items-center flex-col text-center">
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
    <>
      <Heading size="md" as="h2" className="pb-5">
        Summary
      </Heading>
      <div className="py-5 grid gap-4 md:grid-cols-6 grid-cols-1">
        {Object.keys(data).map((key, index) =>
          renderData({
            key: index,
            amount: (data as any)[key],
            name: (dataTranslate as any)[key],
            color: (colorObj as any)[key],
          })
        )}
      </div>
    </>
  );
};
