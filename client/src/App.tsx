import React from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux';

import { fetchDeployments, fetchTemplates } from './redux/thunks';
import { DeploymentsList } from './components/DeploymentsList';
import { DeploymentForm } from './components/DeploymentForm';
import { RootState } from './redux/root';

function App() {
  const store = useStore();
  // @ts-ignore
  window.store = store;
  const dispatch = useDispatch();

  const deploymentsStatus = useSelector(
    (state: RootState) => state.deployments.status,
  );
  if (deploymentsStatus === 'init') dispatch(fetchDeployments());

  const templatesStatus = useSelector(
    (state: RootState) => state.templates.status,
  );
  if (templatesStatus === 'init') dispatch(fetchTemplates());

  return (
    <div className="App">
      <DeploymentForm />
      <DeploymentsList />
    </div>
  );
}

export default App;
