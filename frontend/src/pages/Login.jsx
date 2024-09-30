
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:5000/api/v1/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user', JSON.stringify(data.user));
//       navigate('/');
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="100vh"
//       >
//         <Typography variant="h4" gutterBottom>
//           Login
//         </Typography>
//         <form onSubmit={handleLogin} style={{ width: '100%' }}>
//           <TextField
//             type="email"
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <TextField
//             type="password"
//             label="Password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             style={{ marginTop: '1rem' }}
//           >
//             Login
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Login;
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {TextField, Button, Container, Typography, Box} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password}),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        background: "rgba(255, 248, 248, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4.5px)",
        WebkitBackdropFilter: "blur(4.5px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        padding: "2rem",
        // Adjusting height properties
        maxHeight: "400px", // Set a max height
        overflow: "auto", // To ensure content is scrollable if it exceeds max height
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="300px" // Set a smaller minHeight
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin} style={{width: "100%"}}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              color: "black",
              backgroundColor: "#fad7a0", // Set the background color
              "&:hover": {
                backgroundColor: "#f5cba7", // Optional: Change color on hover
              },
            }}
          >
         Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
