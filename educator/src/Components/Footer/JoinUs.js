import React from "react";
import { Grid, Button, Paper, Typography } from "@material-ui/core";

// This Component contains link for code above the Footer Part
const JoinUs = () => {

  return (
    <Paper elevation={3} style={{textAlign: "center"}}>
        <Grid container alignItems="center">
            <Grid item xs={6} sm={4}>
            <img
                src="https://www.freevector.com/uploads/vector/preview/29408/Nerd-Girl.jpg"
                alt="sample_image"
                height="150"
                width="180"
                style={{ borderRadius: "10%" }}
            />
            </Grid>

            <Grid item xs={6} sm={8}>
                <Grid container>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h5">
                            Team up with other students and learn together
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button
                            onClick={() => console.log("Button clicked")}
                            variant="contained"
                            color="primary"
                            style={{ margin: "10px" }}
                        >
                            Join us
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
  );
};

export default JoinUs;
