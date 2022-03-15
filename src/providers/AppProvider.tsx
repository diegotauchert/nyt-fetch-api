import React from 'react';
import { IntlProvider } from 'react-intl';

import en from '../locales/en.json';

type IAppProviderProps = {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <IntlProvider locale="en" messages={en}>
      {children}
    </IntlProvider>
  );
}