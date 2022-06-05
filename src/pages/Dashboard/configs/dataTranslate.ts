import { SummaryData } from '../types/summary_data';

export const dataTranslate: {
  [key in keyof SummaryData]: string;
} = {
  to_be_execute: 'Test cases to be execute',
  executed: 'Executed',
  passed: 'Passed',
  failed: 'Failed',
  in_progress: 'In Progress',
  skip: 'Skip',
};
