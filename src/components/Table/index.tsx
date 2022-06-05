import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import { Table as PaginationTable } from 'react-chakra-pagination';

interface TableProps {
  columns: Array<{ Header: string; accessor: any }>;
  data: Array<any>;
  heading?: string;
}
export const Table = ({ columns, data, heading }: TableProps) => {
  const [page, setPage] = React.useState(1);

  return (
    <div className="bg-white rounded-md">
      {heading && (
        <Heading size="sm" as="h3" className="px-10 pt-10">
          {heading}
        </Heading>
      )}
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
    </div>
  );
};
