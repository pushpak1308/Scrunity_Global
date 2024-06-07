import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import backgroundImage from "../../background.png";
import "./Style.css";
const AuthPage = ({ content }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      style={{ backgroundColor: "#E1F9FE" }}
    >
      <Grid
        container
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          width: "80%",
          background: "rgb(83,89,231)",
          background:
            "linear-gradient(0deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          spacing={0}
          display={{ xs: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <Card
            elevation="0"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <CardContent sx={{ color: "white", mb: 2 }}>
              <div className="vollkorn-hello">Hello !Welcome to </div>
              <div className="vollkorn-scrutiny">Srutiny Global</div>
            </CardContent>

            <CardMedia
              component="img"
              image={backgroundImage}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "42vh",
                height: "42vh",
                borderRadius: "50%",
                backgroundColor: "#0cdaff",
                // ml: 6,
                boxShadow: "5.77px 7.42px 8.74px 0px #13697978",
              }}
            />

            <CardContent sx={{ color: "white", mt: 2 }}>
              <div className="vollkorn-body">
                A Panel for project management
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          {content}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthPage;
