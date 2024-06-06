import { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    auth.login(username, password);
  };

  return (
    <Container maxWidth="xs">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
