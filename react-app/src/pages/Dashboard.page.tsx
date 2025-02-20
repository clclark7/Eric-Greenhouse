import { AppShell, Burger, ActionIcon, Container, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSettings,
  IconExclamationCircle,
  IconLogs,
  IconHome,
} from "@tabler/icons-react";

export function Dashboard() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        header={{ height: 75 }}
        footer={{ height: 50 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header style={{ backgroundColor: "#00ae88" }}>
          <Flex
            justify="space-between"
            align="center"
            mih={50}
            wrap="nowrap"
            style={{ width: "100%", height: "100%", paddingLeft: "25px" }}
          >
            <ActionIcon
              variant="default"
              aria-label="Dashboard"
              hiddenFrom="sm"
              style={{ padding: 0 }}
            >
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                style={{ width: "auto", height: "auto" }}
              />
            </ActionIcon>
            <Flex
              gap="md"
              align="center"
              justify="flex-end"
              style={{ width: "100%", paddingRight: "25px" }}
            >
              <ActionIcon variant="default" aria-label="Dashboard">
                <IconHome
                  style={{ width: "100%", height: "100%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon variant="default" aria-label="Alerts">
                <IconExclamationCircle
                  style={{ width: "100%", height: "100%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon variant="default" aria-label="Logs">
                <IconLogs
                  style={{ width: "100%", height: "100%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon variant="default" aria-label="Settings">
                <IconSettings
                  style={{ width: "100%", height: "100%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Flex>
          </Flex>
        </AppShell.Header>
        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
        <AppShell.Main>Main</AppShell.Main>
        <AppShell.Footer
          style={{ backgroundColor: "#b2b2b2" }}
        ></AppShell.Footer>
      </AppShell>
    </>
  );
}
