import React, { useState, useEffect } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import {addUser } from "../../Service/api.js";
import {useNavigate} from 'react-router-dom';


const initialValue = {
  title: "",
  desc: "",
};


function PostAdd() {
    const navigate = useNavigate();
    const id = localStorage.getItem("userD");
    const [user, setUser] = useState(initialValue);
  
    const onValueChange = (e) => {
      console.log(e.target.value);
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    const updatePost = async(e) => {
      e.preventDefault();
  
      await addUser({title: user.title, desc: user.desc, userId: id});
      navigate("/")
    };

    console.log(user);
    return (
      <div className="updateProfileContainer">
        <div className="updateProfileBox">
          <h2 className="updateProfileHeading">Create Post</h2>
  
          <form
            className="updateProfileForm"
            encType="multipart/form-data"
            onSubmit={(e) => updatePost(e)}
          >
            <div className="updateProfileName">
              <FaceIcon />
              <input
                type="text"
                placeholder="Title"
                required
                name="title"
                value={user.title}
                onChange={(e) => onValueChange(e)}
              />
            </div>
            <div className="updateProfileEmail">
              <MailOutlineIcon />
              <input
                type="text"
                placeholder="Desc"
                required
                name="desc"
                value={user.desc}
                onChange={(e) => onValueChange(e)}
              />
            </div>
  
            <input type="submit" value="Update" className="updateProfileBtn" />
          </form>
        </div>
      </div>
    );
  };

export default PostAdd