import { Box, Burger, Drawer, Group, SegmentedControl } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import Logo from '@/UI/elements/logo/Logo';

import classes from './NavBar.module.scss';

const LINKS: NavLinksProps[] = [
  {
    label: 'DRM',
    value: 'drm'
  },
  {
    label: 'EDGE',
    value: 'edge'
  },
  {
    label: 'TEAM',
    value: 'team'
  },
  {
    label: 'PARTNERS',
    value: 'partners'
  }
];

interface NavLinksProps {
  label: string;
  value: string;
}

export default function NavBar() {
  const isMobile = useMediaQuery('(max-width: 56.25em)');
  const [opened, { toggle, close }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  const renderLinks = () => {
    if (isMobile) {
      return <Burger opened={opened} onClick={toggle} aria-label={label} />;
    }

    return (
      <SegmentedControl
        classNames={{
          root: classes['nav-bar-segment'],
          label: classes.label,
          control: classes.control,
          indicator: classes.indicator
        }}
        data={LINKS}
        fullWidth
        radius="0"
        color="transparent"
        bg="transparent"
      />
    );
  };

  return (
    <Box p="md">
      <Group justify="space-between">
        <Logo />
        {renderLinks()}
      </Group>
      <Drawer opened={opened} onClose={close}>
        <SegmentedControl
          data={LINKS}
          fullWidth
          orientation="vertical"
          bg="transparent"
          color="indigo"
          radius="md"
        />
      </Drawer>
    </Box>
  );
}
