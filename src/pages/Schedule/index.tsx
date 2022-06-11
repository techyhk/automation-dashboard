import React from 'react';
import { Header } from '@components/Header';
import { MainWrapper } from '@components/MainWrapper';
import { ExecutionForm } from './components/ExecutionForm';
import { SelectionOptionsForm } from './components/SelectionOptionsForm';
import { Box, Text } from '@chakra-ui/react';

export const Schedule = () => {
  return (
    <MainWrapper>
      <Header name="Schedule" />

      <div className="mt-16">
        <ExecutionForm />
      </div>

      <div className="mt-10">
        <Box flex="1" textAlign="left">
          <Text fontSize="xl" fontWeight="thin">
            Advance Execute
          </Text>
        </Box>

        <div className="mt-7">
          <SelectionOptionsForm />
        </div>
      </div>

      <div className="mt-10">
        <Box flex="1" textAlign="left" className="mt-10">
          <Text fontSize="xl" fontWeight="thin">
            Schedule List
          </Text>
        </Box>
      </div>
    </MainWrapper>
  );
};
