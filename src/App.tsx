import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { routes as AppRoutes } from '@routes/index';
import { Sidebar } from '@components/Sidebar';

function App() {
  return (
    <div>
      <ChakraProvider>
        <RecoilRoot>
          <BrowserRouter>
            <Sidebar>
              <AppRoutes />
            </Sidebar>
          </BrowserRouter>
        </RecoilRoot>
      </ChakraProvider>
    </div>
  );
}

export default App;
