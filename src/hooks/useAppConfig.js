import { useContext } from 'react';
import { AppContext } from '../context/appContextValue.js';

export function useAppConfig() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppConfig must be used inside AppProvider');
  }

  return context;
}
