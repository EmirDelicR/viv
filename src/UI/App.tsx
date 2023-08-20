import NavBar from '@/UI/components/navBar/NavBar';
import ThemeProvider from '@/UI/themeProvider/ThemeProvider';
import ThemeToggle from '@/UI/elements/themeToggle/ThemeToggle';

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <NavBar />
        App
        <ThemeToggle />
      </main>
    </ThemeProvider>
  );
}
