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
import logo from "../../logo_sg.png";
import "../Auth/Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import AuthPage from "./AuthPage";
import MuiModal from "../../MuiComponents/MuiModal/Index";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const ResetPassword = ({ setView }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

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
            <MuiTextField
              name="newPassword"
              type="password"
              value={newPassword}
              className="arimo-input-label"
              label="New Password"
              sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeNewPassword}
              //   required
            />

            <MuiTextField
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
              <MuiContainedButton
                type="submit"
                buttonText="Save Password"
                width={true}
                mt={4}
              />
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
      <MuiModal
        show={show}
        handleClose={handleClose}
        heading={"Password Successfully changed 🎉"}
        buttonPrimaryText="Go to Log In"
        buttonAction={() => {
          console.log("Navigating to login");
        }}
      />
    </>
  );

  return <AuthPage content={content} />;
};

export default ResetPassword;
