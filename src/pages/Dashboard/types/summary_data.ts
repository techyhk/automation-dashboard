export enum TestCaseStatus {
  'to_be_execute' = 'to_be_execute',
  'executed' = 'executed',
  'passed' = 'passed',
  'failed' = 'failed',
  'in_progress' = 'in_progress',
  'skip' = 'skip',
}

export type SummaryData = {
  to_be_execute: number;
  executed: number;
  passed: number;
  failed: number;
  in_progress: number;
  skip: number;
};
