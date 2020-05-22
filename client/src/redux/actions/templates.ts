import { Template } from '../root';

export const fetchTemplatesRequest = () => ({
  type: 'FETCH_TEMPLATES_REQUEST',
});

export const fetchTemplatesSuccess = (templates: Template[]) => ({
  type: 'FETCH_TEMPLATES_SUCCESS',
  payload: templates,
});

export const fetchTemplatesFailure = () => ({
  type: 'FETCH_DEPLOYMENTS_FAILURE',
});
