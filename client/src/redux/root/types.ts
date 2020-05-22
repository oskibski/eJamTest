export interface Deployment {
  url: string;
  templateName: string;
  version: string;
  deployedAt?: Date;
  _id?: string;
}

export interface Template {
  _id: string;
  name: string;
  versions: string[];
}

export type DataStatus = 'init' | 'loading' | 'ready' | 'error';

export interface DeploymentsState {
  data: Deployment[];
  status: DataStatus;
}

export interface TemplatesState {
  data: Template[];
  status: DataStatus;
}

export interface RootState {
  deployments: DeploymentsState;
  templates: TemplatesState;
}
