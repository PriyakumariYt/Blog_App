import React, {useEffect, useState} from "react";
import {useAuth} from "../context/AuthContext";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

const MyBlogs = () => {
  const {user, isLoading} = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImage, setEditImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchBlogs(user._id);
    }
  }, [user]);

  const fetchBlogs = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/blog/user-blog/${userId}`
      );
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/blog/delete-blog/${blogId}`
      );
      setBlogs(blogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      console.error("Failed to delete blog", error);
    }
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setEditTitle(blog.title);
    setEditDescription(blog.description);
    setEditImage(blog.image);
    setOpenEditModal(true);
  };

  const handleEditSubmit = async () => {
    try {
      const updatedBlog = {
        ...selectedBlog,
        title: editTitle,
        description: editDescription,
        image: editImage,
      };
      const response = await axios.put(
        `http://localhost:5000/api/v1/blog/update-blog/${selectedBlog._id}`,
        updatedBlog
      );
      setBlogs(
        blogs.map((blog) =>
          blog._id === selectedBlog._id ? response.data.blog : blog
        )
      );
      setOpenEditModal(false);
      setSelectedBlog(null);
    } catch (error) {
      console.error("Failed to edit blog", error);
    }
  };

  if (isLoading || loading) {
    return <div>Loading...</div>;
  }

  const cardStyles = {
    background: "rgba(255, 255, 255, 0.35)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(14.5px)",
    WebkitBackdropFilter: "blur(14.5px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    padding: "16px",
    zIndex: 1,
    transition: "transform 0.2s",
    fontFamily: '"Sofadi One", system-ui',
  };

  return (
    <div style={{padding: "16px", fontFamily: '"Sofadi One", system-ui'}}>
      {/* Global font */}
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <Card sx={cardStyles}>
              <CardMedia
                component="img"
                height="140"
                image={blog.image}
                alt={blog.title}
                sx={{borderRadius: "8px"}}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{color: "white", fontFamily: '"Sofadi One", system-ui'}} // Apply font family to title
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{color: "white", fontFamily: '"Sofadi One", system-ui'}}
                >
                  {blog.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  onClick={() => handleEdit(blog)}
                  sx={{color: "#fffffd "}}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(blog._id)}
                  sx={{color: "#e75d4f "}}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        PaperProps={{
          style: {
            backgroundColor: "#97b78c",
            color: "#fff",
            fontFamily: '"Sofadi One", system-ui',
          },
        }}
      >
        <DialogTitle>Edit Blog</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            sx={{fontFamily: '"Sofadi One", system-ui'}}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            sx={{fontFamily: '"Sofadi One", system-ui'}}
          />
          <TextField
            margin="dense"
            label="Image URL"
            fullWidth
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
            sx={{fontFamily: '"Sofadi One", system-ui'}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
          <Button onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyBlogs;
