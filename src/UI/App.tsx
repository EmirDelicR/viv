import NavBar from '@/UI/components/navBar/NavBar';
import ThemeProvider from '@/UI/themeProvider/ThemeProvider';
import ThemeToggle from '@/UI/elements/themeToggle/ThemeToggle';
import Wrapper from '@/UI/components/wrapper/Wrapper';

import '@mantine/core/styles.css';
import './App.scss';

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <NavBar />
        <Wrapper bgColor="transparent">Test</Wrapper>
        <Wrapper position="top">Test</Wrapper>
        <Wrapper bgColor="transparent">Test</Wrapper>
        <Wrapper position="bottom">Test</Wrapper>
        <Wrapper bgColor="transparent">Test</Wrapper>
        <ThemeToggle />
      </main>
    </ThemeProvider>
  );
}
