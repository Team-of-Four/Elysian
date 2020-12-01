import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import { Grid } from '@material-ui/core';
import './UserDetails.css'
import { useForm } from "react-hook-form";


import Axios from 'axios';

import { Form } from 'antd'
const FormItem = Form.Item;

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function UserDetails() {
    //const url = `http://127.0.0.1:8000/`
    const classes = useStyles();
    const width = 400
    const [switchChange, setSwitchChange] = useState(false)
    const [data, setData] = useState()
    console.log(switchChange)


    // const [data, setData] = useState("");
    // let dataForm = new FormData();

    // const onChangeHandler = event => {
    //     dataForm.append(event.target.value)
    //     Axios.post('http://127.0.0.1:8000/', data)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // };
    const submitForm = (e) => {
        console.log(e.target.getAttribute('email').value);
    }
    return (
        <div className='user-details'>
            <div className='paper'>
                <Grid container direction="row" justify="center">
                    <Grid item>
                        <Form noValidate autoComplete="off">
                            <FormItem label="">
                                <TextField name="email" id="standard-secondary" style={{ width }} label="Email address" color="secondary" />
                            </FormItem>
                            <FormItem label="">
                                <TextField id="standard-secondary" style={{ width }} label="Full name" color="secondary" />
                            </FormItem>
                            <FormItem label="">
                                <TextField id="standard-secondary" style={{ width }} label="username" color="secondary" />
                            </FormItem><FormItem label="">
                                <TextField id="standard-secondary" style={{ width }} label="UPI id" color="secondary" />
                            </FormItem>
                            <FormItem label="">
                                <TextField id="standard-secondary" style={{ width }} label="Group name" color="secondary" />
                            </FormItem>
                            <FormItem label="">
                                <TextField id="standard-secondary" style={{ width }} label="contact number" color="secondary" />
                            </FormItem>
                            <FormItem label="">
                                <TextField id="standard-secondary" style={{ width }} label="city" color="secondary" />
                            </FormItem>
                            <FormItem label="">
                                <TextField id="standard-secondary" style={{ width }} label="state" color="secondary" />
                            </FormItem>
                            <FormItem label="">
                                <TextField id="standard-secondary" style={{ width }} label="country" color="secondary" />
                            </FormItem>
                            <FormItem label="">
                                <TextField id="standard-secondary" style={{ width }} label="category" color="secondary" />
                            </FormItem>
                            <FormItem label="">
                                <TextField id="standard-secondary" style={{ width }} label="city" color="secondary" />
                            </FormItem>
                            <FormItem label="">
                                <p>
                                    Are you availbale ?
                                <Switch value="checkedC" onClick={() => setSwitchChange(!switchChange)} />
                                </p>
                            </FormItem>
                            <FormItem >
                                <Button type='submit' variant="contained" color="primary" onClick={submitForm} >
                                    Submit
                                </Button>
                            </FormItem>
                        </Form>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default UserDetails;
