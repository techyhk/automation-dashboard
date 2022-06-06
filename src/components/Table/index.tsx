import React from 'react';
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Heading,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';

interface TableProps {
  columns: Array<{ Header: string; accessor: any }>;
  data: Array<any>;
  heading?: string;
  filter?: () => JSX.Element;
}
export const Table = ({ columns, data, heading, filter }: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      {heading && (
        <Heading size="md" as="h2">
          {heading}
        </Heading>
      )}
      {filter && <div className="py-10">{filter()}</div>}
      <div>
        <ChakraTable {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup: any, index: number) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column: any, index: number) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                    key={index}
                  >
                    {column.render('Header')}
                    <chakra.span pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row: any, index: number) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell: any, index: number) => (
                    <Td {...cell.getCellProps()} key={index}>
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </ChakraTable>
      </div>
    </>
  );
};
