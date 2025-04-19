import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

function TopBar() {
  const location = useLocation();
  const params = useParams();
  const [viewTitle, setViewTitle] = useState("");

  useEffect(() => {
    const { pathname } = location;

    if (pathname.startsWith("/users/") && params.userId) {
      const u = models.userModel(params.userId);
      setViewTitle(u ? `${u.first_name} ${u.last_name}` : "");
    } else if (pathname.startsWith("/photos/") && params.userId) {
      const u = models.userModel(params.userId);
      setViewTitle(u ? `Photos of ${u.first_name}` : "");
    } else {
      setViewTitle("");
    }
  }, [location, params.userId]);

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {}
        <Typography variant="h6" color="inherit">
          Đinh Ngọc Hân
        </Typography>

        {}
        <Typography variant="h6" color="inherit">
          {viewTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;