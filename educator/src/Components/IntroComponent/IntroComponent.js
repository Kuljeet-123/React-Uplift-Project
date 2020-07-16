import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import {
	makeStyles,
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@material-ui/core/styles";
import intro from "./img/gummy-coding.svg";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
	parent: {
		[theme.breakpoints.up("md")]: {
			height: "100vh",
		},
	},
	img: {
		[theme.breakpoints.down("sm")]: {
			height: "60vw",
		},
	},
	logoHeading: {
		color: "Blue",
		fontWeight: "700",
	},
	button: {
		marginRight: "2rem",
		marginBottom: "2rem",
		[theme.breakpoints.down("sm")]: {
			margin: "0 auto",
		},
	},
	textContainer: {
		textAlign: "left",
		padding: "2rem 2rem 2rem rem",
		[theme.breakpoints.down("sm")]: {
			padding: "2rem",
			textAlign: "center",
		},
	},
}));

export default function IntroComponent() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Grid	
				className={classes.parent}
				container
				justify="center"
				alignItems="center"
			>
				<Grid item container sm={10}>
					<Grid item md={6} sm={12} className={classes.img}>
						<img src={intro} xs={12} width="80%" alt="coding" />
					</Grid>
					<Grid item container md={6} sm={12} className={classes.textContainer}>
						<Grid
							item
							xs={12}
							container
							justify="space-evenly"
							direction="column"
						>
							<Typography variant="h1" className={classes.logoHeading}>
								Educator
							</Typography>
							<Typography variant="h4">
								Your new age up-to-date mentor
							</Typography>
							<Typography variant="h6" paragraph>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Architecto enim, tenetur, dicta consequatur provident quibusdam,
								iure nemo labore ab assumenda unde aliquid. Repellat asperiores
								ea, aliquam earum facere corrupti rerum?
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							container
							justify="flex-start"
							alignItems="center"
						>
							<Button
								className={classes.button}
								variant="contained"
								size="large"
								color="primary"
							>
								Sign Up
							</Button>
							<Button
								className={classes.button}
								variant="contained"
								size="large"
								color="secondary"
							>
								Log in
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
