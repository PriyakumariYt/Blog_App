
// import { useEffect, useState } from 'react';
// import axios from 'axios';

import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from "@mui/icons-material/Add";
import {Typewriter} from "react-simple-typewriter";
import {Link,useNavigate} from "react-router-dom";
const Home = () => {
   const navigate = useNavigate();

   const handleClick = () => {
     const token = localStorage.getItem("token"); // Check if the user is logged in (token exists)

     if (token) {
       // User is logged in, navigate to create blog page
       navigate("/create-blog");
     } else {
       // User is not logged in, redirect to login page
       alert("Please log in to create a blog.");
       navigate("/login");
     }
   };

  return (
    <>
      <div className="container7">
        <div className="box7">
          <h1>
            <span style={{color: "#f7dc6f"}}>
              <Typewriter
                words={["Create.", "Your.", "Blogs."]}
                loop={true} // Set to true so it loops after deleting
                cursor
                cursorStyle="|"
                typeSpeed={100} // Typing speed
                deleteSpeed={50} // Deleting speed
                delaySpeed={1000} // Delay before starting to delete
              />
            </span>
          </h1>
          <p>
            Publish your passions your way.
            <br />
            Create a unique and beautiful blog.
          </p>
          <div className="box7btn">
            {/* <h6 style={{color: "#FFFF66"}}>
              <AddIcon /> Create Blogs
            </h6> */}
            <h6
              style={{color: "#FFFF66", cursor: "pointer"}}
              onClick={handleClick}
            >
              <AddIcon /> Create Blogs
            </h6>
            <h6 style={{color: "#FFFF66"}}>
              <FavoriteIcon /> Get Started
            </h6>
          </div>
        </div>
      </div>
      {/* 2nd */}
      <div>
        <div className="container">
          <div className="box">
            <h1>
              From idea <br /> to production <br />
              <span>in record time</span>
            </h1>
            <h6 style={{color: "#fad7a0 "}}>
              {"\uD83E\uDC90"} {"\uD83E\uDC92"} Try for free
            </h6>
          </div>
        </div>
      </div>
      {/* 3d */}
      <div className="AboutContainer4">
        <div className="Aboutbox4">
          <div className="AboutBoxcontainer">
            <div className="SmallBox">
              <h1>
                <span
                  style={{
                    color: "#f4d03f",
                    fontFamily: '"Sofadi One", system-ui',
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  Accessible
                </span>
              </h1>
            </div>
            <div className="SmallBox">
              <p>
                We’re making Blogger accessible to all, empowering everyone to
                be a creator.
              </p>
            </div>
          </div>
          <div className="AboutBoxcontainer">
            <div className="SmallBox">
              <p>
                We provide people with the means to encourage and help each
                other.
              </p>
            </div>
            <div className="SmallBox">
              <h1>
                <span
                  style={{
                    color: "#fad7a0 ",
                    fontFamily: '"Sofadi One", system-ui',
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  Collaborative
                </span>
              </h1>
            </div>
          </div>
          <div className="AboutBoxcontainer">
            <div className="SmallBox">
              <h1>
                <span
                  style={{
                    color: "#f7dc6f",
                    fontFamily: '"Sofadi One", system-ui',
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  Empowering
                </span>
              </h1>
            </div>
            <div className="SmallBox">
              <p>
                We enable creators to feel like they can build without limits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
