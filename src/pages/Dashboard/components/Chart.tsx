import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { dataTranslate } from '../configs/dataTranslate';
import { SummaryData } from '../types/summary_data';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ data }: { data: SummaryData }) => {
  const generatePieData = (data: SummaryData) => {
    return {
      labels: [
        dataTranslate['passed'],
        dataTranslate['failed'],
        dataTranslate['skip'],
      ],
      datasets: [
        {
          data: [data['passed'], data['failed'], data['skip']],
          backgroundColor: ['#38a169', '#e53e3e', '#ffa605'],
          borderColor: ['#38a169', '#e53e3e', '#ffa605'],
          borderWidth: 5,
        },
      ],
    };
  };

  return (
    <Pie
      data={generatePieData(data)}
      options={{
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};
