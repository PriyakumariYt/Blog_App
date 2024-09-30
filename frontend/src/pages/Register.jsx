// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post('http://localhost:5000/api/v1/auth/register', { name, email, password })
//       .then(response => {
//         localStorage.setItem('token', response.data.token);
//         navigate('/');
//       })
//       .catch(error => console.error('Error registering:', error));
//   };

//   return (
//     <Container maxWidth="sm"
    
//     >
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         height="100vh"
//       >
//         <Typography variant="h4" component="h1" gutterBottom>
//           Register
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} width="100%" mt={3}>
//           <TextField
//             fullWidth
//             label="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             margin="normal"
//             variant="outlined"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3 }}
//           >
//             Register
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Register;

import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Container, TextField, Button, Typography, Box} from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios
    //   .post("http://localhost:5000/api/v1/auth/register", {
    //     name,
    //     email,
    //     password,
    //   })
        axios
          .post(
            "https://blog-app-backend-vert.vercel.app/api/v1/auth/register",
            {
              name,
              email,
              password,
            }
          )
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            navigate("/");
            window.location.reload();
          })
          .catch((error) => console.error("Error registering:", error));
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        background: "rgba(255, 248, 248, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4.5px)",
        WebkitBackdropFilter: "blur(4.5px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        padding: 1,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} width="100%" mt={3}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            variant="outlined"
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
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
