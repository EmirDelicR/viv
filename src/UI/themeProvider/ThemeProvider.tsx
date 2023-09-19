import {
  ColorSchemeProvider,
  MantineProvider,
  type ColorScheme
} from '@mantine/core';
import { useLocalStorage, useHotkeys } from '@mantine/hooks';
import { PropsWithChildren } from 'react';

const THEME_KEY = 'mantine-color-scheme';

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
    getInitialValueInEffect: true
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
        theme={{ colorScheme }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
