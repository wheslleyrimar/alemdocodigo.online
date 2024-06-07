import { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://18.227.134.20/api/register', { username, password });
      alert('User registered successfully!');
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data);
      } else {
        setError('Failed to register user');
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Registrar
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!error}
            helperText={error}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            helperText={error}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Registrar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
