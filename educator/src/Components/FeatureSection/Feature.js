import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import sizes from './sizes'

const styles = {
  features: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "10px",
    flexDirection: "column",
    borderRadius: '1rem',
    boxShadow: '2px 2px 10px lightgrey',
    maxWidth: "800px",
    margin: "10px auto",
    width: "100%",
    [sizes.up("xs")]: {
      flexDirection: props => props.features.reverse ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    }
  },
  image: {
    maxWidth: "20rem",
    [sizes.up("xs")]: {
      width: '50%'
    }
  },
  img: {
    width: '100%',
    borderRadius: '10px'
  },
  text: {
    textAlign: 'center',
    [sizes.up("xs")]: {
    textAlign: 'start',
      width: '48%',
      padding: '20px'
    }
  },
  head: {
    fontSize: "2rem",
    marginTop: ".3rem"
  },
  desc: {
    fontSize: "1.2rem"
  }
}

function Feature ({features, classes}) {
  const { img, heading, description, alt } = features;

  return (
    <div className={classes.features}>
      <div className={classes.image}>
        <img className={classes.img} src={img} alt={alt}/>
      </div>
      <div className={classes.text}>
        <h2 className={classes.head}>{heading}</h2>
        <p className={classes.desc}>{description}</p>
      </div>
    </div>
  )
}
export default withStyles(styles)(Feature)