import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { postData } from '../store/actions/data';

const useStyles = theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    }
  });


class AddData extends Component {

    state = { 
        nama_mahasiswa        : "",
        ipk                   : "",
        tagihan_listrik       : "",
        prestasi              : "",
        bahasa_asing          : "",
        penghasilan_orangtua  : ""
      };

    handleNameChange = ({ target }) => {
        this.setState({ nama_mahasiswa: target.value })
    }

    handleIpkChange = ({ target }) => {
        this.setState({ ipk: target.value })
    }

    handleListrikChange = ({ target }) => {
        this.setState({ tagihan_listrik: target.value })
    }

    handlePrestasiChange = ({ target }) => {
        this.setState({ prestasi: target.value })
    }

    handleBahasaChange = ({ target }) => {
        this.setState({ bahasa_asing: target.value })
    }

    handlePenghasilanChange = ({ target }) => {
        this.setState({ penghasilan_orangtua: target.value })
    }  

    handleSubmit = () => {
        const data = {
            nama_mahasiswa: this.state.nama_mahasiswa,
            ipk: this.state.ipk,
            tagihan_listrik: this.state.tagihan_listrik,
            prestasi: this.state.prestasi,
            bahasa_asing: this.state.bahasa_asing,
            penghasilan_orangtua: this.state.penghasilan_orangtua
        }
        
        this.props.dispatch(postData(data));
    }
    render(){
        const { classes } = this.props
        return(
            <Fade in={true} timeout={1000}>
            <Container className={classes.cardGrid} maxWidth="md">
            <Typography component="h3" variant="h6" align="center" color="textPrimary" gutterBottom>
                Tambah Data Baru
            </Typography>
            <TextField
                variant = "outlined"
                margin = "normal"
                fullWidth
                id = "nama_mahasiswa"
                label = "Nama Mahasiswa"
                name = "nama_mahasiswa"
                onChange = {this.handleNameChange}
            />
            <TextField 
                variant = "outlined"
                margin = "normal"
                fullWidth
                id = "ipk"
                label = "IPK"
                type = "number"
                name = "ipk"
                onChange = {this.handleIpkChange}
            />
            <TextField 
                variant = "outlined"
                margin = "normal"
                fullWidth
                id = "tagihan_listrik"
                name = "tagihan_listrik"
                label = "Tagihan Listrik"
                type = "number"
                onChange = {this.handleListrikChange}
            />
            <TextField
                variant = "outlined"
                margin = "normal"
                fullWidth
                id = "prestasi"
                name = "prestasi"
                label = "Prestasi Akademik"
                type = "number"
                onChange = {this.handlePrestasiChange}
            />
            <TextField
                variant = "outlined"
                margin = "normal"
                fullWidth
                id = "bahasa_asing"
                name = "bahasa_asing"
                label = "Kemampuan Bahasa Asing"
                type = "number"
                onChange = {this.handleBahasaChange}
            />
            <TextField
                variant = "outlined"
                margin = "normal"
                fullWidth
                id = "penghasilan_orangtua"
                name = "penghasilan_orangtua"
                label = "Penghasilan Orang Tua"
                type = "number"
                onChange = {this.handlePenghasilanChange}
            />
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                Tambah data
            </Button>
            </Container>
        </Fade>
        )
    }
}

const mapStateToProps = state => ({
    isPosting: state.data.isPosting,
    isPostSuccess: state.data.isPostSuccess,
    isPostFailure: state.data.isPostFailure,
});


export default withStyles(useStyles)(connect(mapStateToProps)(AddData));