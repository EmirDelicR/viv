import { Box, Container } from '@mantine/core';
import { PropsWithChildren } from 'react';

import './Wrapper.scss';

interface Props extends PropsWithChildren {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function Wrapper({
  position = 'bottom-right',
  children
}: Props) {
  return (
    <>
      <Box className="wrapper">
        <Container>{children}</Container>
      </Box>
      <Box className="wrapper-left">
        <Container>{children}</Container>
      </Box>
      <Box>
        <Container>{children}</Container>
      </Box>
    </>
  );
}
