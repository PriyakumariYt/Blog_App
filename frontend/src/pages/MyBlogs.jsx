// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   IconButton,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import axios from "axios";

// const MyBlogs = () => {
//   const { user, isLoading } = useAuth();
//   const [blogs, setBlogs] = useState([]);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [editTitle, setEditTitle] = useState("");
//   const [editDescription, setEditDescription] = useState("");
//   const [editImage, setEditImage] = useState("");

//   useEffect(() => {
//     if (user) {
//       fetchBlogs(user._id);
//     }
//   }, [user]);

//   const fetchBlogs = async (userId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/v1/blog/user-blog/${userId}`
//       );
//       setBlogs(response.data.blogs);
//     } catch (error) {
//       console.error("Failed to fetch blogs", error);
//     }
//   };

//   const handleDelete = async (blogId) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/v1/blog/delete-blog/${blogId}`);
//       setBlogs(blogs.filter((blog) => blog._id !== blogId));
//     } catch (error) {
//       console.error("Failed to delete blog", error);
//     }
//   };

//   const handleEdit = (blog) => {
//     setSelectedBlog(blog);
//     setEditTitle(blog.title);
//     setEditDescription(blog.description);
//     setEditImage(blog.image);
//     setOpenEditModal(true);
//   };

//   const handleEditSubmit = async () => {
//     try {
//       const updatedBlog = {
//         ...selectedBlog,
//         title: editTitle,
//         description: editDescription,
//         image: editImage,
//       };
//       const response = await axios.put(
//         `http://localhost:5000/api/v1/blog/update-blog/${selectedBlog._id}`,
//         updatedBlog
//       );
//       setBlogs(
//         blogs.map((blog) =>
//           blog._id === selectedBlog._id ? response.data.blog : blog
//         )
//       );
//       setOpenEditModal(false);
//       setSelectedBlog(null);
//     } catch (error) {
//       console.error("Failed to edit blog", error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Grid container spacing={3}>
//         {blogs.map((blog) => (
//           <Grid item xs={12} sm={6} md={4} key={blog._id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={blog.image}
//                 alt={blog.title}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {blog.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {blog.description}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <IconButton
//                   color="primary"
//                   onClick={() => handleEdit(blog)}
//                 >
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton
//                   color="secondary"
//                   onClick={() => handleDelete(blog._id)}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
//         <DialogTitle>Edit Blog</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Title"
//             fullWidth
//             value={editTitle}
//             onChange={(e) => setEditTitle(e.target.value)}
//           />
//           <TextField
//             margin="dense"
//             label="Description"
//             fullWidth
//             value={editDescription}
//             onChange={(e) => setEditDescription(e.target.value)}
//           />
//           <TextField
//             margin="dense"
//             label="Image URL"
//             fullWidth
//             value={editImage}
//             onChange={(e) => setEditImage(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
//           <Button onClick={handleEditSubmit}>Save</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default MyBlogs;

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

  useEffect(() => {
    if (user) {
      fetchBlogs(user._id);
    }
  }, [user]);

  const fetchBlogs = async (userId) => {
    try {
      // const response = await axios.get(
      //   `http://localhost:5000/api/v1/blog/user-blog/${userId}`
      // );
         const response = await axios.get(
           `https://blog-app-backend-vert.vercel.app/api/v1/blog/user-blog/${userId}`
         );
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
  };

  const handleDelete = async (blogId) => {
    try {
      // await axios.delete(
      //   `http://localhost:5000/api/v1/blog/delete-blog/${blogId}`
      // );
         await axios.delete(
           `https://blog-app-backend-vert.vercel.app/api/v1/blog/delete-blog/${blogId}`
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
      // const response = await axios.put(
      //   `http://localhost:5000/api/v1/blog/update-blog/${selectedBlog._id}`,
      //   updatedBlog
      // );
         const response = await axios.put(
           `https://blog-app-backend-vert.vercel.app/api/v1/blog/update-blog/${selectedBlog._id}`,
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 ">
      {" "}
      {/* Removed background */}
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <Card
              style={{
                backgroundColor: "#b5ccab",
                zIndex: 1,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",

                borderRadius: "12px",
                padding: "16px",

                transition: "transform 0.2s",
                // Transition for hover effect
              }}
              // onMouseEnter={(e) =>
              //   (e.currentTarget.style.transform = "scale(1.05)")
              // }
              // onMouseLeave={(e) =>
              //   (e.currentTarget.style.transform = "scale(1)")
              // }
            >
              <CardMedia
                component="img"
                height="140"
                image={blog.image}
                alt={blog.title}
                style={{borderRadius: "8px"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  onClick={() => handleEdit(blog)}
                  sx={{color: "#ead79c"}} // Apply the custom color here
                >
                  <EditIcon />
                </IconButton>

                <IconButton
                  onClick={() => handleDelete(blog._id)}
                  sx={{color: "#ea75ae"}} // Apply the custom color here
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
            backgroundColor: "#97b78c", // Set your desired background color here
            color: "#fff", // Optional: set text color to white for better contrast
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
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Image URL"
            fullWidth
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
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

