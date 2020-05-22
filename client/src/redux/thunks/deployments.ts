import * as api from '../../Api';
import { Deployment } from '../root';

import {
  addDeploymentRequest,
  addDeploymentSuccess,
  deleteDeploymentRequest,
  deleteDeploymentSuccess,
  fetchDeploymentsRequest,
  fetchDeploymentsSuccess,
} from '../actions';

export const deleteDeployment = (id: string) => (dispatch: any) => {
  dispatch(deleteDeploymentRequest(id));

  return api
    .deleteDeployment(id)
    .then((response) => response.json())
    .then((json) => {
      dispatch(deleteDeploymentSuccess(json));
      dispatch(fetchDeployments());
    });
};

export const addDeployment = (deployment: Deployment) => (dispatch: any) => {
  dispatch(addDeploymentRequest(deployment));

  return api
    .addDeployment(deployment)
    .then((response) => response.json())
    .then((json) => {
      dispatch(addDeploymentSuccess(json));
      dispatch(fetchDeployments());
    });
};

export const fetchDeployments = () => (dispatch: any) => {
  dispatch(fetchDeploymentsRequest());

  return api
    .getDeployments()
    .then((response) => response.json())
    .then((json) => dispatch(fetchDeploymentsSuccess(json)));
};
