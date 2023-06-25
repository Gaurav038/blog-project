import React, { useState, useEffect } from "react";
import "./UpdatePost.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import {editUser, getSinglePost } from "../../Service/api.js";
import {useNavigate, useParams} from 'react-router-dom';


const UpdatePost = () => {
  const navigate = useNavigate();
  const params = useParams()
  const {id} = params
  const [postData, setPostData] = useState({
    title: "",
    desc: "",
  });

  const onValueChange = (e) => {
    console.log(e.target.value);
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const updateProfileSubmit = async(e) => {
    e.preventDefault();

    await editUser(id, {title: postData.title, desc: postData.desc});
    navigate("/")
  };

  useEffect(() => {
    getAllUsers();
    
  }, []);

  const getAllUsers = async () => {
    let response = await getSinglePost(id);
    console.log(response?.data[0]);
    const rslt = response?.data[0]
    setPostData({title: rslt?.title, desc: rslt?.desc})

  };

  return (
    <div className="updateProfileContainer">
      <div className="updateProfileBox">
        <h2 className="updateProfileHeading">Update Profile</h2>

        <form
          className="updateProfileForm"
          encType="multipart/form-data"
          onSubmit={(e) => updateProfileSubmit(e)}
        >
          <div className="updateProfileName">
            <FaceIcon />
            <input
              type="text"
              placeholder="title"
              required
              name="title"
              value={postData.title}
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className="updateProfileEmail">
            <MailOutlineIcon />
            <input
              type="text"
              placeholder="desc"
              required
              name="desc"
              value={postData.desc}
              onChange={(e) => onValueChange(e)}
            />
          </div>

          <input type="submit" value="Update" className="updateProfileBtn" />
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
