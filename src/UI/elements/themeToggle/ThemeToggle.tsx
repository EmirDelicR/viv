import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { ReactComponent as Moon } from '@/assets/icons/moon.svg';
import { ReactComponent as Sun } from '@/assets/icons/sun.svg';
import { useHotkeys } from '@mantine/hooks';

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod+J', toggleColorScheme]]);

  return (
    <ActionIcon
      pos="fixed"
      bottom={0}
      right={0}
      m="md"
      variant="transparent"
      onClick={toggleColorScheme}
      size={30}
      aria-label="Toggle color scheme"
    >
      {colorScheme === 'dark' ? <Sun /> : <Moon />}
    </ActionIcon>
  );
}
