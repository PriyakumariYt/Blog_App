import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const { user } = useAuth();
const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); 

    try {
      const response = await axios.post(
        "https://blog-app-backend-vert.vercel.app/api/v1/blogs/create-blog",
        {
          // const response = await axios.post('http://localhost:5000/api/v1/blog/create-blog', {
          title,
          description,
          image,
          user: user?._id, // Use actual user ID
        },
        {
          headers: {Authorization: `Bearer ${token}`},
        }
      );
      
      console.log('Blog created:', response.data);
      // Clear the input fields after successful blog creation
      setTitle('');
      setDescription('');
      setImage('');
navigate('/myblogs')
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    // <Container maxWidth="sm" >
    //   <Box sx={{ mt: 4 }}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Create Blog
    //     </Typography>
    //     <form onSubmit={handleSubmit}>
    //       <TextField
    //         label="Title"
    //         variant="outlined"
    //         fullWidth
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //         margin="normal"
    //         required
    //       />
    //       <TextField
    //         label="Description"
    //         variant="outlined"
    //         fullWidth
    //         value={description}
    //         onChange={(e) => setDescription(e.target.value)}
    //         margin="normal"
    //         multiline
    //         rows={4}
    //         required
    //       />
    //       <TextField
    //         label="Image URL"
    //         variant="outlined"
    //         fullWidth
    //         value={image}
    //         onChange={(e) => setImage(e.target.value)}
    //         margin="normal"
    //       />
    //       <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
    //         Create
    //       </Button>
    //     </form>
    //   </Box>
    // </Container>
    <Container
      maxWidth="sm"
      sx={{
        background: "rgba(255, 248, 248, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4.5px)",
        WebkitBackdropFilter: "blur(4.5px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        padding: 4, // optional padding for better spacing
      }}
    >
      <Box sx={{mt: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#fad7a0",
              "&:hover": {
                backgroundColor: "#f5cba7",
              },
            }}
          >
            Create
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreateBlog;
