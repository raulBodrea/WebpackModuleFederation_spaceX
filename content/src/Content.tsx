import Box from 'boneyard/Box';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Homepage = React.lazy(() => import('homepage'));
const Flight = React.lazy(() => import('flight'));
const Marketing = React.lazy(() => import('marketing'));

const Content = () => (
  <Box overflow="scroll" backgroundColor="gray100" width="100%" height="100%">
    <React.Suspense fallback={'Loading'}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/launches/:launchId" element={<Flight />} />
        <Route path="/info/*" element={<Marketing />} />
      </Routes>
    </React.Suspense>
  </Box>
);

export default Content;
