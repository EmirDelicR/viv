import NavBar from './components/navBar/NavBar';
import ThemeProvider from './components/themeProvider/ThemeProvider';

import './App.scss';

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      App
    </ThemeProvider>
  );
}

export default App;
