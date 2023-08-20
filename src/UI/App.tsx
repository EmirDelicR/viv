import NavBar from './components/navBar/NavBar';
import ThemeProvider from './themeProvider/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <NavBar />
      App
    </ThemeProvider>
  );
}
