import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import { Table as PaginationTable } from 'react-chakra-pagination';

interface TableProps {
  columns: Array<{ Header: string; accessor: any }>;
  data: Array<any>;
  heading?: string;
  filter?: () => JSX.Element;
}
export const Table = ({ columns, data, heading, filter }: TableProps) => {
  const [page, setPage] = React.useState(1);

  return (
    <>
      {heading && (
        <Heading size="md" as="h2" className="px-10">
          {heading}
        </Heading>
      )}
      {filter && <div className="px-10 pt-10">{filter()}</div>}
      <Box mt="6">
        <PaginationTable
          colorScheme="blue"
          totalRegisters={1}
          page={page}
          // Listen change page event and control the current page using state
          onPageChange={(page) => setPage(page)}
          columns={columns}
          data={data}
        />
      </Box>
    </>
  );
};
