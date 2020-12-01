import React, { useState } from 'react';
import './Home.css';
import { Button, TextField, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import axios from 'axios';

export default function Home() {
    const [CITY, setCity] = useState('');
    const [STATE, setState] = useState('');
    const [CATEGORY, setCategory] = useState('');

    const handleSubmit = () => {
        axios.get('http://localhost:8000/?city=Bagaha')
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleCity = e => {
        setCity(e.target.value)
    }
    const handleState = e => {
        setState(e.target.value)
    }
    const handleCategory = e => {
        setCategory(e.target.value)
    }

    return (
        <div className='home1'>
            <div className='paper'>
                <form autoComplete='off'>
                    <TextField onChange={handleCity} id="standard-basic" label="City" />
                    <TextField onChange={handleState} id='standard-basic' label='State' />
                    <TextField onChange={handleCategory} id='standard-basic' label='Category' />
                    <div className='search'>
                        <Button onClick={handleSubmit}>
                            Search
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

