import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import MainPage from './components/MainPage';
function App() {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
