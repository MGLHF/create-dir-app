module.exports = (answers) => `
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import Layout from '../layout';

const Welcome = React.lazy(() => import('../pages/Welcome'));

const App = () => {
  return (
    <React.Suspense fallback={<Spin />}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/${answers.route}' exact component={Welcome} />
          </Switch>
        </Layout>
      </Router>
    </React.Suspense>
  );
}

export default App;
`;