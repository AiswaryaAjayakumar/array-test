import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Heading extends Component {
  render() {
    return (
      <div>
        <AppBar>
            <Toolbar>
                <Typography>
          
                PRODUCTS
                
                </Typography>  
             <Grid container >
                <Grid item xs={12}sm={6}md={6}lg={6}xl={6}>
                <Link to="/">
            View  Products
           </Link> 
        

                </Grid>
                <Grid item xs={12}sm={6}md={6}lg={6}xl={6}>
                <Link to="/add">Add Products</Link>      
                </Grid>
                
                </Grid>   
          
               
            </Toolbar>
        </AppBar>
      </div>
    )
  }
}
