import React, { useEffect, useState } from 'react';
import {
  AreaChart, XAxis, YAxis, Area, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import api from '../../services/api';

const Graphics: React.FC = () => {
  const [listGrafics, setListGrafics] = useState();
  useEffect(() => {
    api.get('/trades/listAmoutMonths').then(
      (response) => {
        setListGrafics(response.data);
      },
    );
  }, [setListGrafics]);
  return (
    <ResponsiveContainer>
      <AreaChart
        data={listGrafics}
        style={{
          display: 'flex',
          position: '',
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3867EA" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#3867EA" stopOpacity={0.05} />
          </linearGradient>

        </defs>
        <Area dataKey="Amount" stroke="#3867EA" fillOpacity={1} fill="url(#colorUv)" />

        <XAxis dataKey="Month" reversed />
        <YAxis axisLine={false} tickLine={false} tickSize={8} tickCount={6} />
        <CartesianGrid opacity={0.3} vertical={false} />

      </AreaChart>
    </ResponsiveContainer>

  );
};

export default Graphics;
