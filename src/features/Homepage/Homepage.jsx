import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./Homepage.css";

function Homepage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLevel = (level) => {
    localStorage.setItem("level", level);
    handleClose();
  };
  return (
    <div className="homepage">
      <div className="homepage-logo">
        <img
          src="https://i.pinimg.com/550x/e0/a5/c1/e0a5c187078ab355555ff7e4978c1e47.jpg"
          alt=""
        />
      </div>
      <div className="homepage-contain">
        <div className="homepage-contain-top">
          <h4>Welcome to Pokemon Game</h4>
          <Link className="homepage-link" to="/App">
            Quick Game
          </Link>
          <Link className="homepage-link" to="" onClick={handleOpen}>
            Level
          </Link>
        </div>
      </div>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="modal">
          <h2 id="child-modal-title">Choose Level Game</h2>
          <div className="level">
            <Button variant="contained" onClick={() => handleLevel(15)}>
              Easy
            </Button>
            <Button variant="contained" onClick={() => handleLevel(25)}>
              Normal
            </Button>
            <Button variant="contained" onClick={() => handleLevel(35)}>
              Hard
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Homepage;
