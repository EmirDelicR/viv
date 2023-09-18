import Logo from '@/UI/elements/logo/Logo';
import { Box, Burger, Drawer, Group, SegmentedControl } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

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
        data={LINKS}
        fullWidth
        radius="md"
        color="indigo"
        bg="transparent"
      />
    );
  };

  return (
    <Box p="md">
      <Group position="apart">
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
