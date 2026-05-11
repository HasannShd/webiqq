import { useMemo } from 'react';
import { AppContext } from './appContextValue.js';

export function AppProvider({ children }) {
  const value = useMemo(
    () => ({
      productName: 'Collab',
      apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '',
    }),
    [],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
