import {
  MantineProvider,
  createTheme,
  localStorageColorSchemeManager
} from '@mantine/core';

import { PropsWithChildren } from 'react';

const THEME_KEY = 'mantine-color-scheme';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif'
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  const colorSchemeManager = localStorageColorSchemeManager({ key: THEME_KEY });

  return (
    <MantineProvider colorSchemeManager={colorSchemeManager} theme={theme}>
      {children}
    </MantineProvider>
  );
}
