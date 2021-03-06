import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import Whatshot from '@material-ui/icons/Whatshot'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  grid: {
    height: '100vh',
    width: '100wh',
    margin: 0,
    backgroundImage: 'url("/img/splashbg.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  button: {
    margin: theme.spacing.unit,
    marginBottom: '2em',
    paddingLeft: '3em',
    paddingRight: '3em',
    borderRadius: '25px'
  },
  cssRoot: {
    '&:hover': {
      backgroundColor: 'lightblue'
    }
  },
  display2: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '2.8125rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    lineHeight: '1.06667em'
  },
  colorPrimary: {
    color: 'white',
    marginBottom: '1em'
  }
})

const Login = props => {
  const { classes } = props
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      className={classes.grid}
    >
      <Whatshot className={classes.colorPrimary} />
      <Typography className={classes.display2}>SWIPE</Typography>
      <Typography className={classes.display2}>MATCH</Typography>
      <Typography className={classes.display2} gutterBottom>
        EAT
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classNames(classes.button, classes.cssRoot)}
        href="http://localhost:5000/auth/"
      >
        Log in with Facebook
      </Button>
    </Grid>
  )
}

export default withStyles(styles)(Login)
