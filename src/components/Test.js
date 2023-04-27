import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'

import React, { Component } from 'react'


export default class Test extends Component {
    state={
        posts:[]
    }
    
    fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                console.log(response.data)
                this.setState(
                    {
                        posts:response.data
                    }
                )
            
            }
        ) 
    }
  render() {
    return (
      <div>
        <Grid container>
            <Grid item xs={12}sm={12}md={12}lg={12}xl={12} >
           
           <Button
           variant='contained'
           color='success'
           fullWidth
           onClick={this.fetchData}
           >
            FETCH DATA
           </Button>
            </Grid>
            <Grid item xs={12}sm={12}md={12}lg={12}xl={12} >
             <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Body</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.posts.map(
                            (value,index)=>{
                                return <TableRow>
                                    <TableCell>{value.title}</TableCell>
                                    <TableCell>{value.body}</TableCell>

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
