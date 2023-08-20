import { ActionIcon, useMantineColorScheme } from '@mantine/core';

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
      {colorScheme === 'dark' ? 'D' : 'L'}
    </ActionIcon>
  );
}
