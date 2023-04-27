import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'

export default class AddProducts extends Component {
    state={
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
        rate:"",
        count:""
    }
    submitData=()=>{
      console.log(this.state)
      axios.post("https://fakestoreapi.com/addproducts",this.state).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status=="success"){
                alert("Added Successfully")
            }
            else{
               alert("Something went wrong")
            }

        }
      )

    }
    handleData=(event)=>{
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )


    }
  render() {
    return (
      <div>
        <Grid container style={{padding:70}}>
            <Grid style={{padding:4}} item xs={12}sm={6}md={6}lg={6}xl={6}>
                <TextField
                type="text"
                variant='outlined'
                fullWidth
                margin='normal'
                label="Title"
                name='title'
                 />
            </Grid>
            <Grid style={{padding:6}}item xs={12}sm={6}md={6}lg={6}xl={6}>
            <TextField
            type="number"
            name='price'
                variant='outlined'
                fullWidth
                margin='normal'
                label="Price"
                 />
            </Grid>
            <Grid style={{padding:6}}item xs={12}sm={6}md={6}lg={6}xl={6}>
            <TextField
            type="text"
            name='description'
                variant='outlined'
                fullWidth
                margin='normal'
                label="Description"
                 />
            </Grid>
            <Grid style={{padding:6}}item xs={12}sm={6}md={6}lg={6}xl={6}>
            <TextField
            type="text"
            name='category'
                variant='outlined'
                fullWidth
                margin='normal'
                label="Category"
                 />
            </Grid>
            <Grid style={{padding:6}} item xs={12}sm={6}md={6}lg={6}xl={6}>
            <TextField
            
            name='image'
                variant='outlined'
                fullWidth
                margin='normal'
                label="Image"
                 />
            </Grid>
            <Grid style={{padding:6}} item xs={12}sm={6}md={6}lg={6}xl={6}>
            <TextField
            type="number"
            name='rate'
                variant='outlined'
                fullWidth
                margin='normal'
                label="Rating"
                 />
            </Grid>
            <Grid style={{padding:6}}item xs={12}sm={6}md={6}lg={6}xl={6}>
            <TextField
            type="number"
            name='count'
                variant='outlined'
                fullWidth
                margin='normal'
                label="Count"
                 />
            </Grid>
            <Grid style={{padding:6}}item xs={12}sm={12}md={12}lg={12}xl={12}>
                <Button
                color='secondary'
                variant='contained'
                fullWidth
                type='submit'

                >
                    SUBMIT
                </Button>
            </Grid>


        </Grid>
      </div>
    )
  }
}
