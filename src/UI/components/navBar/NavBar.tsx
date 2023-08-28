import Logo from '@/UI/elements/logo/Logo';
import {
  Box,
  Burger,
  Drawer,
  Flex,
  Group,
  UnstyledButton
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import './NavBar.scss';
import { useMemo } from 'react';

const LINKS: NavLinksProps[] = [
  {
    label: 'DRM',
    navigateTo: 'drm'
  },
  {
    label: 'EDGE',
    navigateTo: 'edge'
  },
  {
    label: 'TEAM',
    navigateTo: 'team'
  },
  {
    label: 'PARTNERS',
    navigateTo: 'partners'
  }
];

interface NavLinksProps {
  label: string;
  navigateTo: string;
}
/*
TODO add styles from video
*/

function NavLinks({ label, navigateTo }: NavLinksProps) {
  return (
    <UnstyledButton
      className='nav-bar-link'
      sx={(theme) => ({
        display: 'block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black
      })}
    >
      {label}
    </UnstyledButton>
  );
}

export default function NavBar() {
  const isMobile = useMediaQuery('(max-width: 56.25em)');
  const [opened, { toggle, close }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  const $links = useMemo(() => {
    return LINKS.map((item: NavLinksProps) => (
        <NavLinks
          key={item.label}
          label={item.label}
          navigateTo={item.navigateTo}
        />
      ))
  }, [])

  const renderLinks = () => {
    if (isMobile) {
      return <Burger opened={opened} onClick={toggle} aria-label={label} />;
    }

    return (
      <Flex>
        {$links}
      </Flex>
    );
  };

  return (
    <Box p="md">
      <Group position="apart">
        <Logo />
        {renderLinks()}
      </Group>
      <Drawer opened={opened} onClose={close} title="Authentication">
        <Flex direction="column">
          {$links}
        </Flex>
      </Drawer>
    </Box>
  );
}
