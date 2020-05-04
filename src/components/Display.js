import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/FauzanAr">
        Fauzan and Friend
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function DisplayData(props){
  const { classes } = props.classes;
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://picsum.photos/200"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function AddData(props) {
  const { classes } = props.classes
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <h1>Hello</h1>
    </Container>
  );
}

const useStyles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Display extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDisplay: false,
      nama_mahasiswa:"", 
      ipk:"", 
      tagihan_listrik:"", 
      prestasi:"", 
      bahasa_asing:"", 
      penghasilan_orangtua:""
    }

    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay(){
    this.setState(state => ({
      isDisplay: !state.isDisplay
    }));
  }

  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <SchoolOutlinedIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Beasiswa SMK SPK
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                SMK SPK
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                SMK SPK Merupakan sebuah SMK bertaraf internasional yang sudah melalang buana di
                Indonesia sejak tahun 1872 yang didirikan oleh Belanda bertujuan untuk mencerdaskan
                bangsa Belanda yang berada di Indonesia untuk sementara waktu.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" disabled={this.state.isDisplay} onClick={this.handleDisplay}>
                      Tambah data
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary" disabled={!this.state.isDisplay} onClick={this.handleDisplay}>
                      Lihat beasiswa
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          {
            this.state.isDisplay
            ? <AddData classes = {this.props}/>
            : <DisplayData classes={this.props}/>
          }
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Created with love! ❤️
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(Display);