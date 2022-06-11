import React, { useState } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { MarketType } from '../types/marketType';
import { ParticipantType } from '../types/participantType';
import { CategoryType } from '../types/categoryType';
import { DatePicker } from '@components/DatePicker';

export const AdvanceExecutionForm = () => {
  const [exectueBy, setExecuteBy] = useState<{
    browser: string;
    market: MarketType | undefined;
    participant: Array<string | number> | undefined;
    category: Array<string | number> | undefined;
    dateTime: any;
  }>({
    browser: 'chrome',
    market: undefined,
    participant: undefined,
    category: undefined,
    dateTime: undefined,
  });

  const marketList: Array<{ value: MarketType; text: string }> = [
    {
      value: 'nem',
      text: 'NEM',
    },
    {
      value: 'vicgas',
      text: 'VICGAS',
    },
    {
      value: 'sagas',
      text: 'SAGAS',
    },
    {
      value: 'nswgas',
      text: 'NSWGAS',
    },
    {
      value: 'qldgas',
      text: 'QLDGAS',
    },
    {
      value: 'wagas',
      text: 'WAGAS',
    },
  ];

  const participantList: {
    [key in MarketType]: Array<{ value: ParticipantType; text: string }>;
  } = {
    nem: [
      {
        value: 'aurora',
        text: 'Aurora',
      },
      {
        value: 'yurika',
        text: 'Yurika',
      },
      {
        value: 'eq',
        text: 'EQ',
      },
      {
        value: 'ea',
        text: 'EA',
      },
    ],
    vicgas: [{ value: 'red_vicgas', text: 'RED VICGAS' }],
    sagas: [{ value: 'red_sagas', text: 'RED SAGAS' }],
    nswgas: [{ value: 'red_nswgas', text: 'RED NSWGAS' }],
    qldgas: [{ value: 'red_qldgas', text: 'RED QLDGAS' }],
    wagas: [{ value: 'khg', text: 'KHG' }],
  };

  const categoryList: Array<{ value: CategoryType; text: string }> = [
    {
      value: 'sord',
      text: 'SORD',
    },
    {
      value: 'cats',
      text: 'CATSs',
    },
    {
      value: 'cust',
      text: 'CUST',
    },
    {
      value: 'site',
      text: 'SITE',
    },
    {
      value: 'mdn',
      text: 'MDN',
    },
    {
      value: 'nmi',
      text: 'NMI',
    },
    {
      value: 'il',
      text: 'IL',
    },
    {
      value: 'api',
      text: 'API',
    },
  ];

  return (
    <>
      <div className="flex md:flex-row flex-col mt-7 gap-5">
        <div className="md:w-36">
          <Text fontSize="md" fontWeight="semibold">
            Running Browser
          </Text>
        </div>
        <div className="md:pl-2 xl:pl-6">
          <RadioGroup
            defaultValue={exectueBy['browser']}
            onChange={(value) => setExecuteBy({ ...exectueBy, browser: value })}
          >
            <Stack spacing={5} direction="row">
              <Radio colorScheme="whatsapp" value="chrome">
                Chrome
              </Radio>
              <Radio colorScheme="red" value="firefox">
                Firefox
              </Radio>
              <Radio colorScheme="facebook" value="edge">
                Microsoft Edge
              </Radio>
              <Radio colorScheme="linkedin" value="ie">
                IE
              </Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>

      <div className="flex md:flex-row flex-col mt-7 gap-5">
        <div className="md:w-36">
          <Text fontSize="md" fontWeight="semibold">
            Market
          </Text>
        </div>
        <div className="md:pl-2 xl:pl-6">
          <RadioGroup
            onChange={(value) =>
              setExecuteBy({ ...exectueBy, market: value as MarketType })
            }
          >
            <Stack spacing={5} direction="row">
              {marketList.map((market, index) => (
                <Radio colorScheme="gray" value={market.value} key={index}>
                  {market.text}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </div>
      </div>

      {exectueBy['market'] && (
        <div className="flex md:flex-row flex-col mt-7 gap-5">
          <div className="md:w-36">
            <Text fontSize="md" fontWeight="semibold">
              Participant
            </Text>
          </div>
          <div className="md:pl-2 xl:pl-6">
            <CheckboxGroup
              colorScheme="cyan"
              onChange={(value) =>
                setExecuteBy({ ...exectueBy, participant: value })
              }
            >
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                {participantList[exectueBy['market']].map(
                  (participant, index) => (
                    <Checkbox value={participant.value} key={index}>
                      {participant.text}
                    </Checkbox>
                  )
                )}
              </Stack>
            </CheckboxGroup>
          </div>
        </div>
      )}

      <div className="flex md:flex-row flex-col mt-7 gap-5">
        <div className="md:w-36">
          <Text fontSize="md" fontWeight="semibold">
            Category
          </Text>
        </div>
        <div className="md:pl-2 xl:pl-6">
          <CheckboxGroup
            colorScheme="cyan"
            onChange={(value) =>
              setExecuteBy({ ...exectueBy, category: value })
            }
          >
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              {categoryList.map((category, index) => (
                <Checkbox value={category.value} key={index}>
                  {category.text}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:gap-16 gap-5 mt-7 w-2/3">
        <div className="md:w-36">
          <Text fontSize="md" fontWeight="semibold">
            Schedule on
          </Text>
        </div>
        <DatePicker
          showTimeSelect
          value={exectueBy['dateTime']}
          onChange={(value: any) =>
            setExecuteBy({ ...exectueBy, dateTime: value })
          }
        />
      </div>
    </>
  );
};
