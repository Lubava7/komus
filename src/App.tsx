import React, { Suspense } from 'react';
import './App.css';
import PageLayout from './components/PageLayout/PageLayout';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './modules/routing';

function App() {
  return (
    <PageLayout>
      <Suspense>
        <Routes>
          {PrivateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
        </Routes>
      </Suspense>
    </PageLayout>
  );
}

export default App;
