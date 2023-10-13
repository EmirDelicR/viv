import HighlightedCards from '@/UI/components/highlightedCard/HighlightedCards';
import NavBar from '@/UI/components/navBar/NavBar';
import Wrapper from '@/UI/components/wrapper/Wrapper';
import ThemeToggle from '@/UI/elements/themeToggle/ThemeToggle';

import ThemeProvider from '@/UI/themeProvider/ThemeProvider';

import '@mantine/core/styles.css';
import './App.scss';

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <NavBar />
        <Wrapper bgColor="transparent">Test</Wrapper>
        <Wrapper position="top">
          <HighlightedCards />
        </Wrapper>
        <Wrapper bgColor="transparent">Test</Wrapper>
        <Wrapper position="bottom">Test</Wrapper>
        <Wrapper bgColor="transparent">Test</Wrapper>
        <ThemeToggle />
      </main>
    </ThemeProvider>
  );
}
