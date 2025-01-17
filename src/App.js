import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './App.css';
import MainPage from './components/MainPage';
import Login from './components/Login';
import ProfileForm from './components/ProfileForm';
function App() {
  const theme = createTheme()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/profile" element={<ProfileForm />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
