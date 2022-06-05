import React from 'react';
import { Select } from 'chakra-react-select';

interface SingleSelectProps {
  options: Array<{ value: string; label: string }>;
  onChange?: (value: string | undefined) => any;
  placeholder?: string;
}

export const SingleSelect = ({
  options,
  onChange,
  placeholder,
}: SingleSelectProps) => {
  return (
    <Select
      name="colors"
      className="chakra-react-select"
      classNamePrefix="chakra-react-select"
      options={options}
      placeholder={placeholder}
      selectedOptionStyle="check"
      onChange={(selected) => onChange && onChange(selected?.value)}
      chakraStyles={{
        dropdownIndicator: (provided) => ({
          ...provided,
          bg: 'transparent',
          px: 2,
          cursor: 'inherit',
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: 'none',
        }),
      }}
    />
  );
};
