import React from 'react';
import { Header } from '@components/Header';
import { MainWrapper } from '@components/MainWrapper';
import { ExecutionForm } from './components/ExecutionForm';
import { AdvanceExecutionForm } from './components/AdvanceExecutionForm';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { TaskInProgressList } from './components/TaskInProgressList';
import { UpcomingTasksList } from './components/UpcomingTasksList';

export const Schedule = () => {
  return (
    <MainWrapper>
      <Header name="Schedule" />

      <div className="mt-16">
        <ExecutionForm />
      </div>
      <Accordion defaultIndex={[0, 1]} allowMultiple>
        <div className="mt-10">
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="xl" fontWeight="thin">
                  Advance Execute
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <div className="mt-7">
                <AdvanceExecutionForm />
              </div>
            </AccordionPanel>
          </AccordionItem>
        </div>

        <div>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" className="mt-10">
                <Text fontSize="xl" fontWeight="thin">
                  Schedule List
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <div className="mt-10">
                <TaskInProgressList />
              </div>

              <div className="mt-20">
                <UpcomingTasksList />
              </div>
            </AccordionPanel>
          </AccordionItem>
        </div>
      </Accordion>
    </MainWrapper>
  );
};
