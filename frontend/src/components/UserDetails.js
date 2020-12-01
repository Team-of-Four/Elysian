import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function UserDetails() {
    const classes = useStyles();
    const usernameEl = React.useRef(null);
    const nameEl = React.useRef(null);
    const emailEl = React.useRef(null);
    const upidEl = React.useRef(null);
    const groupName = React.useRef(null);
    const contactEl = React.useRef(null);
    const cityEl = React.useRef(null);
    const state = React.useRef(null);
    const profileEl = React.useRef(null);
    const categoryEl = React.useRef(null);
    const bioEl = React.useRef(null);
    const bookedEl = React.useRef(null);

    const handleSubmit = e => {
        // alert(JSON.stringify(e));
        e.preventDefault();
        const data = {
            username_artist: usernameEl.current.value,
            artist_name: nameEl.current.value,
            artist_category: categoryEl.current.value,
        }
        console.log(data)
        axios.post('http://localhost:8000/', {
            data
        })
        //     .then((res) => {
        //         console.log(nameEl, categoryEl)
        //     })
        //     .catch((err) => { });
    }

    // console.log(ref.fullname)
    return (
        <Grid container direction="row" justify="center">
            <Grid item >
                <form className={classes.root} onSubmit={handleSubmit}
                    noValidate autoComplete="off">
                    <input name="username" ref={usernameEl} />
                    <input name="category" ref={categoryEl} />
                    <input name="category" ref={nameEl} />
                    {/* <TextField name="email" label="E-mail" ref={register} onChange={(e) => setEmail(e.target.value)} />
                    <TextField name="email" label="E-mail" ref={register} onChange={(e) => setEmail(e.target.value)} />
                    <TextField name="email" label="E-mail" ref={register} onChange={(e) => setEmail(e.target.value)} />
                    <TextField name="email" label="E-mail" ref={register} onChange={(e) => setEmail(e.target.value)} />
                    <TextField name="email" label="E-mail" ref={register} onChange={(e) => setEmail(e.target.value)} />
                     */}
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Grid>

        </Grid>
    );
}