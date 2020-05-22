import * as api from '../../Api';

import { fetchTemplatesRequest, fetchTemplatesSuccess } from '../actions';

export const fetchTemplates = () => (dispatch: any) => {
  dispatch(fetchTemplatesRequest());

  return api
    .getTemplates()
    .then((response) => response.json())
    .then((json) => {
      console.log({ json });
      dispatch(fetchTemplatesSuccess(json));
    });
};
