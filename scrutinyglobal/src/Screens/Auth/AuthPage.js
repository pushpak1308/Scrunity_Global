import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import backgroundImage from "../../background.png";
import "./Style.css";
import logo from "../../logo_sg.png";
import { Link } from "react-router-dom";

const AuthPage = ({
  form,
  heading,
  cardActionLinkTo,
  cardActionLinkText,
  cardActionText,
  additionalComponent,
}) => {
  return (
    <Grid className="main-container">
      <Grid container className="container" md={10}>
        <Grid
          item
          xs={12}
          md={5}
          spacing={0}
          display={{ xs: "none", md: "flex" }}
          className="flex-and-center"
        >
          <Card
            elevation="0"
            // className="image-card"
            //background color issue!!!
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <CardContent sx={{ mb: 2 }}>
              <div className="vollkorn-hello">Hello !Welcome to </div>
              <div className="vollkorn-scrutiny">Srutiny Global</div>
            </CardContent>

            <CardMedia
              component="img"
              image={backgroundImage}
              className="image"
            />

            <CardContent sx={{ mt: 2 }}>
              <div className="vollkorn-body">
                A Panel for project management
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card className="card-form">
            <CardContent>
              <Typography className="vollkorn-Login" sx={{ mt: 2 }}>
                {heading}
              </Typography>
            </CardContent>
            <CardMedia component="img" image={logo} className="logo-image" />
            <CardContent sx={{ mx: { xs: 3, sm: 7, md: 13 }, mb: 4 }}>
              {form}
            </CardContent>
            <Grid container className="flex-and-center" sx={{ mb: 2 }}>
              <CardActions className="arimo-input-label cardAction-container">
                {cardActionText}
                <Link to={`/${cardActionLinkTo}`} className="cardAction-link">
                  {cardActionLinkText}
                </Link>
              </CardActions>
            </Grid>
          </Card>
        </Grid>
        <Grid>{additionalComponent}</Grid>
      </Grid>
    </Grid>
  );
};

export default AuthPage;
