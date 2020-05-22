import { TemplatesState } from '../root';

const initialState: TemplatesState = {
  data: [],
  status: 'init',
};

export const templates = (
  state = initialState,
  action: any,
): TemplatesState => {
  switch (action.type) {
    case 'FETCH_TEMPLATES_REQUEST':
      return { ...state, status: 'loading' };
    case 'FETCH_TEMPLATES_SUCCESS':
      return { data: [...action.payload], status: 'ready' };
    case 'FETCH_TEMPLATES_FAILURE':
      return { ...state, status: 'error' };
    default:
      return state;
  }
};
