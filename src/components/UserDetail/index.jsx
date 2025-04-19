import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";


function UserDetail() {
  const { userId } = useParams();               
  const [user, setUser] = useState(null);      

  useEffect(() => {
    const userData = models.userModel(userId);  
    setUser(userData);                         
  }, [userId]);

  if (!user) {
    return <Typography>Loading user data...</Typography>;
  }

  return (
    <>
      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body1"><b>Location:</b> {user.location}</Typography>
      <Typography variant="body1"><b>Occupation:</b> {user.occupation}</Typography>
      <Typography variant="body1"><b>Description:</b> {user.description}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        <Link to={`/photos/${userId}`}>View Photos of {user.first_name}</Link>
      </Typography>
    </>
  );
}

export default UserDetail;