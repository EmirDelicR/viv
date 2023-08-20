import {
  Box,
  Burger,
  Drawer,
  Flex,
  Group,
  UnstyledButton
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

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

function NavLinks({ label, navigateTo }: NavLinksProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0]
        }
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

  const renderLinks = () => {
    if (isMobile) {
      return <Burger opened={opened} onClick={toggle} aria-label={label} />;
    }

    return (
      <Flex>
        {LINKS.map((item) => (
          <NavLinks
            key={item.label}
            label={item.label}
            navigateTo={item.navigateTo}
          />
        ))}
      </Flex>
    );
  };

  return (
    <Box p="md">
      <Group position="apart">
        <div>Logo</div>
        {renderLinks()}
      </Group>
      <Drawer opened={opened} onClose={close} title="Authentication">
        <Flex direction="column">
          {LINKS.map((item) => (
            <NavLinks
              key={item.label}
              label={item.label}
              navigateTo={item.navigateTo}
            />
          ))}
        </Flex>
      </Drawer>
    </Box>
  );
}
