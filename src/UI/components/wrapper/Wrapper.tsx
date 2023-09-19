import {
  Box,
  Container,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core';
import { CSSProperties, PropsWithChildren } from 'react';

import './Wrapper.scss';

interface Props extends PropsWithChildren {
  position?: 'top' | 'bottom' | undefined;
  bgColor?: 'white' | 'transparent';
}

export default function Wrapper({
  children,
  position = undefined,
  bgColor = 'white'
}: Props) {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dark = colorScheme === 'dark';
  const color =
    dark && bgColor === 'white' ? theme.black : theme.colors.blue[0];
  const positionClass = position ? `wrapper__${position}` : '';
  const classes = `wrapper ${positionClass}`.trim();

  return (
    <Box className={classes} style={{ '--c': color } as CSSProperties}>
      <Container>{children}</Container>
    </Box>
  );
}
