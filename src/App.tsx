import React from 'react';
import { Badge } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';

function App() {
  return (
    <div>
      <ChakraProvider>
        <BrowserRouter>
          <Badge>Default</Badge>
          <AppRoutes />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
