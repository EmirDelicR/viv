import NavBar from '@/UI/components/navBar/NavBar';
import ThemeProvider from '@/UI/themeProvider/ThemeProvider';
import ThemeToggle from '@/UI/elements/themeToggle/ThemeToggle';
import Wrapper from '@/UI/components/wrapper/Wrapper';

import './App.scss';

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <NavBar />
        <Wrapper>Test</Wrapper>
        <ThemeToggle />
      </main>
    </ThemeProvider>
  );
}
