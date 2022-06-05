import React from 'react';
import { Badge } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import AppRoutes from './routes';

function App() {
  return (
    <div>
      <ChakraProvider>
        <RecoilRoot>
          <BrowserRouter>
            <Badge>Default</Badge>
            <AppRoutes />
          </BrowserRouter>
        </RecoilRoot>
      </ChakraProvider>
    </div>
  );
}

export default App;
