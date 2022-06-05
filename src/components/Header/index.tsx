import React from 'react';
import { Text } from '@chakra-ui/react';
import { AiOutlineRight } from 'react-icons/ai';

interface HeaderProps {
  name: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <Text fontSize="2xl" fontWeight="semibold">
          {props.name.toUpperCase()}
        </Text>
        <AiOutlineRight className="ml-3" />
      </div>

      <Text fontSize="md" fontWeight="thin">
        Automation Regression Test
      </Text>
    </>
  );
};
