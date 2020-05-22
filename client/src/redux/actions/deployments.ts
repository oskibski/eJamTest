import { Deployment } from '../root';

export const addDeploymentRequest = ({ url, templateName }: Deployment) => ({
  type: 'ADD_DEPLOYMENT_REQUEST',
  url,
  templateName,
});

export const addDeploymentSuccess = ({ _id }: Deployment) => ({
  type: 'ADD_DEPLOYMENT_SUCCESS',
  _id,
});

export const addDeploymentFailure = (error: string) => ({
  type: 'ADD_DEPLOYMENT_FAILURE',
  error,
});

export const deleteDeploymentRequest = (id: string) => ({
  type: 'DELETE_DEPLOYMENT_REQUEST',
  id,
});

export const deleteDeploymentSuccess = (id: string) => ({
  type: 'DELETE_DEPLOYMENT_SUCCESS',
  id,
});

export const fetchDeploymentsRequest = () => ({
  type: 'FETCH_DEPLOYMENTS_REQUEST',
});

export const fetchDeploymentsSuccess = (deployments: Deployment[]) => ({
  type: 'FETCH_DEPLOYMENTS_SUCCESS',
  payload: deployments,
});

export const fetchDeploymentsFailure = () => ({
  type: 'FETCH_DEPLOYMENTS_FAILURE',
});
