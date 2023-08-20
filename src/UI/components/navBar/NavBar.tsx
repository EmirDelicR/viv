import { Box, Group, rem } from '@mantine/core';
import ThemeToggle from '@/UI/elements/themeToggle/ThemeToggle';

export default function NavBar() {
  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `${rem(1)} solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`
      })}
    >
      <Group position="apart">
        <div>Logo</div>
        <ThemeToggle />
      </Group>
    </Box>
  );
}
