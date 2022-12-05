import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Routing from './routes/routes';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const routes = useRoutes(Routing());

  return (
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </HelmetProvider>
  );
}

export default App;
