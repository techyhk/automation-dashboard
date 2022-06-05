export type TestCaseStatus =
  | 'to_be_execute'
  | 'executed'
  | 'passed'
  | 'failed'
  | 'in_progress'
  | 'skip';

export type SummaryData = {
  to_be_execute: number;
  executed: number;
  passed: number;
  failed: number;
  in_progress: number;
  skip: number;
};
