import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../logo_sg.png";
import "./Login.css";
import { CustomTextField } from "../MuiComponents/CustomTextField";
import AuthPage from "./Parts/AuthPage"; // Ensure AuthPage is properly imported
import CustomContainedButton from "../MuiComponents/CustomContainedButton";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isItEmail, setIsItEmail] = useState(true);

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const onChangeNumber = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/resetPassword");
  };

  const content = (
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
          style={{ fontFamily: "Vollkorn ,serif" }}
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
          {isItEmail ? (
            <CustomTextField
              name="email"
              type="text"
              value={email}
              className="arimo-input-label"
              label="Email"
              sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeEmail}
              required
            />
          ) : (
            <CustomTextField
              name="number"
              type="text"
              value={number}
              className="arimo-input-label"
              label="Number"
              sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeNumber}
              required
            />
          )}

          <FormHelperText
            sx={{ color: "#175f93", mb: 6, fontSize: "1.5vh" }}
            className="arimo-input-label"
            style={{ cursor: "pointer" }}
            onClick={() => setIsItEmail(!isItEmail)}
          >
            {isItEmail ? "Use number instead" : "Use email instead"}
          </FormHelperText>

          <Box display="flex" justifyContent="center" alignItems="center">
            <CustomContainedButton
              type="submit"
              buttonText="Send Reset Link"
              width={true}
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
        <CardActions className="arimo-input-label" style={{ fontSize: "2vh" }}>
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
  );

  return <AuthPage content={content} />;
};

export default ForgotPassword;
