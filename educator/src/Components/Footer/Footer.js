import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

function Copyright() {
  return (
    <Typography
      variant="subtitle1"
      align="center"
      style={{ color: "white", paddingTop: "15px" }}
    >
      {"Copyright © "}
      <Link href="/" style={{ color: "white" }}>
        EDUCATOR
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
    
  const array = [
    { key: "HomePage", link: "#" },
    { key: "Courses", link: "#" },
    { key: "Login", link: "" },
    { key: "Signup", link: "#" },
    { key: "Discussion Blog", link: "#" },
    { key: "My Profile", link: "#" },
    { key: "Courses", link: "#" },
    { key: "User Review", link: "#" }
  ];

  const footerStyle = {
    textAlign: "center",
    backgroundColor: "black",
    paddingTop: "15px",
    paddingBottom: "15px"
  };

  return (
    <footer style={footerStyle}>
      <Grid container>
        {/* Navigation Link Section */}
        <Grid item xs={12} sm={8}>
          <Grid container>
            <Grid xs={12} item>
              <Typography variant="subtitle1" color="primary">
                Navigate :
              </Typography>
            </Grid>
            {array.map((item, index) => {
              return (
                <Grid key={index} item xs={6}>
                  <Typography style={{ marginTop: "10px", fontWeight: "bold" }}>
                    <Link
                      href={item.link}
                      onClick={() => console.log("Link clicked")}
                      color="secondary"
                    >
                      {item.key}
                    </Link>
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        {/* Social Media Section*/}
        <Grid item xs={12} sm={4}>
          <Grid
            container
            justify="space-evenly"
            spacing={0}
            alignItems="center"
            style={{ minHeight: 100 }}
          >
            <Grid item>
              <Link href="https://facebook.com">
                <FacebookIcon fontSize="large" />
              </Link>
            </Grid>{" "}
            <Grid item>
              <Link href="https://instagram.com">
                <InstagramIcon fontSize="large" />
              </Link>
            </Grid>{" "}
            <Grid item>
              <Link href="https://twitter.com">
                <TwitterIcon fontSize="large" />
              </Link>
            </Grid>{" "}
            <Grid item>
              <Link href="https://github.com">
                <GitHubIcon fontSize="large" />
              </Link>
            </Grid>
          </Grid>
        </Grid>

        {/* About Section  */}
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
