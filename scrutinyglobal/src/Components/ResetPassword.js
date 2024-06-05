import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormHelperText,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo_sg.png";
import "./Login.css";
import { CustomTextField } from "./Parts/CustomTextField";
import AuthPage from "./AuthPage"; // Ensure AuthPage is properly imported
import SuccessModal from "./Parts/SuccessModal";

const ResetPassword = ({ setView }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
    p: 4,
    borderRadius: "10px",
  };

  const onChangeNewPassword = (event) => {
    event.preventDefault();
    setNewPassword(event.target.value);
  };

  const onChangeConfirmPassword = (event) => {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const handleModalButtonClick = () => {
    setShow(false);
    navigate("/login");
    // setView("login");
  };

  const handleClose = () => {
    setShow(false);
  };

  const content = (
    <>
      <Card
        style={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: "10%",
          borderBottomLeftRadius: "10%",
          height: "100%",
          position: "relative",
        }}
      >
        <CardContent>
          <Typography
            className="vollkorn-Login"
            sx={{ fontWeight: "700", fontSize: "4vh", mt: 1 }}
            style={{ fontFamily: "Vollkorn ,serif", textAlign: "center" }}
          >
            Reset Password
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={logo}
          sx={{
            width: "10vh",
            position: "absolute",
            right: "1vh",
            top: "1vh",
          }}
        />

        <CardContent sx={{ mx: { xs: 3, sm: 7, md: 13 }, mb: 4 }}>
          <form onSubmit={handleSubmit}>
            <CustomTextField
              name="newPassword"
              type="password"
              value={newPassword}
              className="arimo-input-label"
              label="New Password"
              sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeNewPassword}
              //   required
            />

            <CustomTextField
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              className="arimo-input-label"
              label="Confirm Password"
              sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeConfirmPassword}
              //   required
            />

            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  // Responsive width
                  mt: 4,
                  width: { xs: "90%", sm: "70%", md: "50%" },
                  borderRadius: "10px",
                  boxShadow: "3px 3px 6px 0px #0cdaff",
                  "&:hover": {
                    boxShadow: "4px 4px 9px 0px #1976d2",
                  },
                  border: "1px solid white",
                  background: "rgb(83,89,231)",
                  background:
                    "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  style={{ fontSize: "18px" }}
                >
                  Save Password
                </Typography>
              </Button>
            </Box>
          </form>
        </CardContent>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ my: 3 }}
        >
          <CardActions
            className="arimo-input-label"
            style={{ fontSize: "2vh" }}
          >
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#0cdaff",
                cursor: "pointer",
              }}
            >
              Go Back to Log In
            </Link>
          </CardActions>
        </Grid>
      </Card>
      <SuccessModal showSuccess={show} handleCloseSuccess={handleClose} heading={"Password Successfully \n changed 🎉"} button={"Go to Log In"}/>
     
    </>
  );

  return <AuthPage content={content} />;
};

export default ResetPassword;
