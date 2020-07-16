import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: "10px",
    margin: "10px",
    flexDirection: props => props.features.reverse ? 'row-reverse' : 'row',
    borderRadius: '1rem',
    boxShadow: '2px 2px 10px lightgrey'
  },
  image: {
    width: "40%",
  },
  img: {
    width: '100%',
    borderRadius: '10px'
  },
  text: {
    width: "50%",
  },
  head: {
    fontSize: "2rem",
    marginTop: ".3rem"
  },
  desc: {
    fontSize: "1.2rem"
  }
})

export default function Feature (props) {
  const { img, heading, description, alt, reverse } = props.features;
  const classes = useStyles(props);
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
