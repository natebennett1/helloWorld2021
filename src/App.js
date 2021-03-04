import React, {useState, useEffect} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import { Link, Route} from 'react-router-dom';
import { auth } from './firebase';


export function SignIn(props) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        props.history.push("/app")
      }
      //do something when auth state changes
    })
    return unsubscribe
  }, [props.history])

  const handleSignIn = () => {
    auth.signInWithEmailAndPassword(email, password).then(() => {
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div>
      <AppBar position="static" color = "primary">
        <Toolbar>
          <Typography  variant = "h6" color="inherit">
            Sign In
          </Typography>
          <Button></Button>
        </Toolbar>
      </AppBar>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Paper style= {{width: 480, marginTop: 50, padding: 30}}>
          <TextField placeholder = 'email' fullWidth={true} value={email} onChange ={(e) => {setEmail(e.target.value)}}/>
          <TextField type={'password'} placeholder = 'password' fullWidth={true} style = {{ marginTop: 30}} value={password} onChange ={(e) => {setPassword(e.target.value)}}/>
          <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
            <Typography>Don't have an account? <Link to="/signup">Sign up!</Link></Typography>
            <Button color= 'primary' variant = "raised" onClick={handleSignIn}>Sign in</Button>
          </div>
        </Paper>
      </div>

    </div>
  );
}

export function SignUp(props) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        props.history.push("/app")
      }
      //do something when auth state changes
    })
    return unsubscribe
  }, [props.history])

  const handleSignIn = () => {
    auth.signInWithEmailAndPassword(email, password).then(() => {
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div>
      <AppBar position="static" color = "primary">
        <Toolbar>
          <Typography  variant = "h6" color="inherit">
            Sign Up
          </Typography>
          <Button></Button>
        </Toolbar>
      </AppBar>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Paper style= {{width: 480, marginTop: 50, padding: 30}}>
        <TextField placeholder = 'email' fullWidth={true} value={email} onChange ={(e) => {setEmail(e.target.value)}}/>
          <TextField type={'password'} placeholder = 'password' fullWidth={true} style = {{ marginTop: 30}} value={password} onChange ={(e) => {setPassword(e.target.value)}}/>
          <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
            <Typography>Already have an account? <Link to='/'>Sign in.</Link></Typography>
            <Button color= 'primary' variant = "raised" onClick={handleSignIn}>Sign Up</Button>
          </div>
        </Paper>
      </div>

    </div>
  );
}

export function App(props) {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u)
      }
      else {
        props.history.push('/')
      }
    })
    return unsubscribe
  }, [props.history])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignOut = () => {
    auth.signOut(email, password).then(() => {
      props.history.push("/app")
    }).catch((error) => {
      alert(error.message)
    })
  }

  const [drawer_open, setDrawerOpen] = useState(false)

  const handleMenuClick = () => {
    setDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setDrawerOpen(false)
  }

  if (!user){
    return <div/>
  }

  return (
    <div>
    <AppBar position="static" color = "primary">
        <Toolbar>
          <IconButton color = 'inherit' onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant = "h6" color="inherit" style ={{flexGrow: 1, marginLeft: 30}} >
            My app
          </Typography>
          <Typography color = "inherit" style={{marginRight: 30}}>Hi! {user.email}</Typography>
          <Button color="inherit" onClick={handleSignOut}>Sign Out</Button>
          <Button></Button>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer_open} onClose ={handleCloseDrawer}>
        <div>Hello</div>
      </Drawer>
      </div>
  );
}
