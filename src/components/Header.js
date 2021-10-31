import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import CottageIcon from "@mui/icons-material/Cottage";

import "../Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <IconButton>
        <CottageIcon fontSize="large" className="header_icon" />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
