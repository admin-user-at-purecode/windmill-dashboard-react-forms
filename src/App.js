import React from 'react';
import { Windmill } from '@windmill/react-ui';
import Layout from './components/common/layout';
import FormsPage from './pages/FormsPage';

function App() {
  return (
    <Windmill usePreferences>
     <Layout>
      <FormsPage />
    </Layout>
    </Windmill>
  );
}

export default App;
