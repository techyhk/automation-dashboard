import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Sidebar } from '@components/Sidebar';
import { routesConfig } from '@configs/routes';
import { sidebarConfig } from '@configs/sidebar';

function App() {
  const renderRoutes = () => {
    return (
      <Routes>
        {routesConfig.map((route, index) => (
          <Route
            key={`routes_${index}`}
            path={route.path}
            element={route.element()}
          />
        ))}
      </Routes>
    );
  };
  return (
    <div>
      <ChakraProvider>
        <RecoilRoot>
          <BrowserRouter>
            <Sidebar config={sidebarConfig}>{renderRoutes()}</Sidebar>
          </BrowserRouter>
        </RecoilRoot>
      </ChakraProvider>
    </div>
  );
}

export default App;
