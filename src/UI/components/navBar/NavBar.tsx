import {
  ActionIcon,
  Box,
  Group,
  rem,
  useMantineColorScheme
} from '@mantine/core';

export default function NavBar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

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
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === 'dark' ? 'D' : 'L'}
        </ActionIcon>
      </Group>
    </Box>
  );
}
