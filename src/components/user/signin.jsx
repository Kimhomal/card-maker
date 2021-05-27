import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';

const useStyles = makeStyles((theme) => ({
  wrap: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}));

const SignIn = ({ authService }) => {
  const classes = useStyles();

  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  const onLogin = (name) => {
    authService.login(name).then((result) => {
      const credential = result.credential;

      const token = credential.accessToken;
      const user = result.user;

      goToMaker(user.uid);
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <Container maxWidth="xs">
      <Header></Header>
      <CssBaseline />
      <div className={classes.wrap}>
        {/* <Box className={classes.header}>
          <img className={classes.avatar} alt="logo" src="/images/logo.png" />
          <Typography component="h1" variant="h4">
            Business Card Maker
          </Typography>
        </Box> */}
        <Box className={classes.content}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <List className={classes.list}>
            <ListItem
              button
              onClick={() => {
                onLogin('Google');
              }}
            >
              <ListItemAvatar>
                <Avatar>G</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Google 아이디로 로그인"></ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                onLogin('Github');
              }}
            >
              <ListItemAvatar>
                <Avatar>E</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Github 아이디로 로그인"></ListItemText>
            </ListItem>
          </List>
        </Box>
      </div>
      <Footer></Footer>
    </Container>
  );
};

export default SignIn;
