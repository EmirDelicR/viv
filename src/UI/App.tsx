import { AppShell, Header, Navbar } from '@mantine/core';
import './App.scss';

function App() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          nav
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          header
        </Header>
      }
    >
      App
    </AppShell>
  );
}

export default App;
