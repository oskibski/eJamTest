import { useStore as useGenericStore } from 'react-redux';
import { RootState } from './types';

export const useStore = (): RootState =>
  (useGenericStore() as any) as RootState;
