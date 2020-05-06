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
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import myimage from '../img/default-user.png';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions/data';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/FauzanAr">
        Magenta
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function DisplayData(props){
  const { classes, data } = props.classes;
  let i = 1;
  return (
    <Fade in={true} timeout={1000}>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {data.map((dat) => (
            <Grid item key={dat.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  // image="https://bit.ly/2W11VbL"
                  src = {myimage}
                  component = "img"
                  title="Profile Photo"
                />
                <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                    #{i++} {dat.nama_mahasiswa}
                  </Typography>
                  <br></br>
                  <Typography>
                    Score : {dat.score}
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
    </Fade>
  );
}

function AddData(props) {
  const { classes } = props.classes
  return (
    <Fade in={true} timeout={1000}>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* <h1>{data.map((data) => (
          data.id
        ))}</h1> */}
        Hi
      </Container>
    </Fade>
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
    paddingTop: '5%', // 16:9
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '10%'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

class Display extends Component {

  state = { isDisplay: false };

  componentDidMount(){
    this.props.dispatch(fetchData());
  }

  // handleDisplay(isDisplay){
  //   // this.setState(state => ({
  //   //   isDisplay: !state.isDisplay
  //   // }));

  //   this.setState({ isDisplay: !isDisplay});
  // }

  handleDisplay(){
    this.setState({ isDisplay: !this.state.isDisplay });
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
            <Fade in = {true} timeout={1500}>
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  SMK SPK
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary" paragraph>
                  SMK SPK Merupakan sebuah SMK bertaraf internasional yang sudah melalang buana di
                  Indonesia sejak tahun 1872 yang didirikan oleh Belanda bertujuan untuk mencerdaskan
                  bangsa Belanda yang berada di Indonesia untuk sementara waktu.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary" disabled={this.state.isDisplay} onClick={() => this.handleDisplay()}>
                        Tambah data
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" disabled={!this.state.isDisplay} onClick={() => this.handleDisplay()}>
                        Lihat beasiswa
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </Fade>
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

const mapStateToProps = state => ({
    isFetchSuccess: state.data.isFetchSuccess,
    isFetching: state.data.isFetching,
    isFetchFailure: state.data.isFetchFailure,
    data: state.data.data
});

export default withStyles(useStyles)(connect(mapStateToProps)(Display));