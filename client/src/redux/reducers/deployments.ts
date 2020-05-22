import { DeploymentsState } from '../root';

const initialState: DeploymentsState = {
  data: [],
  status: 'init',
};

export const deployments = (
  state = initialState,
  action: any,
): DeploymentsState => {
  switch (action.type) {
    case 'ADD_DEPLOYMENT_REQUEST':
      return state;
    case 'ADD_DEPLOYMENT_SUCCESS':
      return state;
    case 'ADD_DEPLOYMENT_FAILURE':
      return state;
    case 'FETCH_DEPLOYMENTS_REQUEST':
      return { ...state, status: 'loading' };
    case 'FETCH_DEPLOYMENTS_SUCCESS':
      return { data: [...action.payload], status: 'ready' };
    case 'FETCH_DEPLOYMENTS_FAILURE':
      return { ...state, status: 'error' };
    default:
      return state;
  }
};
