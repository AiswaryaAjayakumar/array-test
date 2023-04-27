import { Avatar, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'

export default class Products extends Component {
    state={
        products:[]
    }
    fetchProducts=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                console.log(response.data)
                this.setState(
                    {
                        products:response.data
                    }
                )
            }
        )
    }
  render() {
    return (
      <div>
        <Grid container style={{padding:80}}>
            <Grid item xs={12}sm={12}md={12}lg={12}xl={12}>
               <Button
               variant='contained'
               color='success'
               fullWidth
               onClick={this.fetchProducts}
               >
              FIND PRODUCTS
               </Button>
            </Grid>
            <Grid item xs={12}sm={12}md={12}lg={12}xl={12}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell>Image</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Price</TableCell>

                                <TableCell>Description</TableCell>

                                <TableCell>Category</TableCell>
                               
                                <TableCell>Rating</TableCell>
                                <TableCell>Count</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.products.map(
                                (value,index)=>{
                                    return <TableRow>
                                         <TableCell>
                                            <Avatar
                                            variant='square'
                                            src={value.image}
                                            />
                                         </TableCell>
                                        <TableCell>{value.title}</TableCell>
                                        <TableCell>{value.price}</TableCell>
                                        <TableCell>{value.description}</TableCell>
                                        <TableCell>{value.category}</TableCell>
                                       
                                        <TableCell>{value.rating.rate}</TableCell>
                                        <TableCell>{value.rating.count}</TableCell>
                                    </TableRow>
                                }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
      </div>
    )
  }
}
