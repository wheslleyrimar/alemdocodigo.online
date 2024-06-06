import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, CssBaseline, Container, Box } from '@mui/material';
import CourseList from './components/CourseList/CourseList';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { AuthProvider, useAuth } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" noWrap>
              Além do Código
            </Typography>
          </Box>
          <AuthButtons />
        </Toolbar>
      </AppBar>
      <Container>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <CourseList />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </Container>
    </AuthProvider>
  );
};

const AuthButtons: React.FC = () => {
  const auth = useAuth();
  return auth.isAuthenticated ? (
    <Button color="inherit" onClick={auth.logout}>
      Logout
    </Button>
  ) : (
    <>
      <Button color="inherit" href="/login">
        Login
      </Button>
      <Button color="inherit" href="/register">
        Register
      </Button>
    </>
  );
};

export default App;
