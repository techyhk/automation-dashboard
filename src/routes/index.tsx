import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Report from '../pages/Report';
import Schedule from '../pages/Schedule';

export default () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
};
