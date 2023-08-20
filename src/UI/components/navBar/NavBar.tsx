import { Box, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function NavBar() {
  const matches = useMediaQuery('(min-width: 56.25em)');

  return (
    <Box>
      <Group position="apart">
        <div>Logo</div>
      </Group>
    </Box>
  );
}
