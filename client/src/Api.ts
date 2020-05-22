import { Deployment } from './redux/root';

const host = process.env.REACT_APP_API;

export const getDeployments = () => fetch(`${host}/deployment`);
export const getTemplates = () => fetch(`${host}/template`);

export const addDeployment = (deployment: Deployment) => {
  return fetch(`${host}/deployment`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(deployment),
  });
};

export const deleteDeployment = (id: string) =>
  fetch(`${host}/deployment/${id}`, {
    method: 'DELETE',
  });
