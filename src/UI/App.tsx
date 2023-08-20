import NavBar from '@/UI/components/navBar/NavBar';
import ThemeProvider from '@/UI/themeProvider/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <NavBar />
      App
    </ThemeProvider>
  );
}
