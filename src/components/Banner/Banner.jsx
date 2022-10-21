
import { Button, FormControl,  MenuItem, Select, TextField } from '@mui/material'

import React from 'react'
import '../Banner/banner.scss'
const Banner = () => {
    return (
        <section id="banner" style={{ backgroundImage: `url("https://comparassetsource.s3.amazonaws.com/media/blog/article/python-code-developer-programming.jpg")` }}>
            <div className="section-over">
                <div className="banner-text">
                    <h5>Learn From Home</h5>
                    <h1>Education Courses</h1>
                </div>
                <div className="banner-search">

                    <FormControl className="search-form" fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            label="Age"
                            
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <TextField id="outlined-basic" style={{width:"100%"}}  placeholder='Search' label="Outlined" variant="outlined" />
                        <Button style={{backgroundColor:"red"}} variant="contained">Search</Button>
                    </FormControl>
                </div>
            </div>
        </section>
    )
}

export default Banner