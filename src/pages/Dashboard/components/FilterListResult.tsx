import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import { SingleSelect } from '@components/SingleSelect';
import { TestCaseStatus } from '../types/summary_data';
import { dataTranslate } from '../configs/dataTranslate';

export const FilterListResult = () => {
  const [filterBy, setFilterBy] = useState<string | undefined>();

  const options = [
    { value: 'market', label: 'Market' },
    { value: 'name', label: 'Test Case Name' },
    { value: 'category', label: 'Category' },
    { value: 'status', label: 'Status' },
  ];

  const marketOptions = [{ value: 'nem', label: 'NEM' }];
  const categoryOptions = [{ value: 'ownx', label: 'OWNX' }];
  const statusOptions = (() => {
    const data = [];
    for (const status of Object.values(TestCaseStatus)) {
      data.push({ value: status, label: dataTranslate[status] });
    }

    return data;
  })();

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
      <SingleSelect
        options={options}
        placeholder="Filter by"
        onChange={(value) => setFilterBy(value)}
      />

      {filterBy === 'name' && <Input placeholder="Search by test case name" />}
      {filterBy === 'market' && (
        <SingleSelect
          options={marketOptions}
          placeholder="Search by market options"
        />
      )}
      {filterBy === 'category' && (
        <SingleSelect
          options={categoryOptions}
          placeholder="Search by category options"
        />
      )}
      {filterBy === 'status' && (
        <SingleSelect
          options={statusOptions}
          placeholder="Search by status options"
        />
      )}
    </div>
  );
};
