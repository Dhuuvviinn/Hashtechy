import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./CartTable.css"
import { Box, Button, Stack, Typography } from '@mui/material';
import { CartAddData } from '../CartData/CartData';
const ButtonCss = {background:"black",lineHeight:"1.2",minWidth:"20px",padding:"0"}


const CartTable = () => {
const [counter,setCounter] = React.useState(1) 
const [counterIndex,setCounterIndex] = React.useState("")
const PriceQunatity = (i,action) =>{
setCounterIndex(i)
if (action == "add") {
    if (counterIndex != i ) {
        setCounter(0)
    }else{
        setCounter(counter+1)
    }
}else{
    if (counterIndex != i ) {
        setCounter(0)
    }else{
        setCounter(counter-1)
    }
}

}
  return (
    <TableContainer >
    <Table  aria-label="simple table">
      <TableHead>
        <TableRow >
          <TableCell sx={{textAlign:"left",fontWeight:"800"}}>Name</TableCell>
          <TableCell sx={{textAlign:"left",fontWeight:"800"}} align="right">Price</TableCell>
          <TableCell sx={{textAlign:"left",fontWeight:"800"}} align="right">Qunatity</TableCell>
        </TableRow>
      </TableHead>
      
     {
        CartAddData?.map((items,index)=>(
            <TableBody>
    
            <TableRow
              key={index}
            >
              <TableCell sx={{width:"60%"}} component="th" scope="row">
                <Box sx={{display:"flex"}}>
                  <Box sx={{width:"130px",height:"130px",borderRadius:'20px',background:"grey"}}></Box>
                  <Box>
                      <Typography variant='h6' sx={{marginLeft:"1rem"}}>{items.title}</Typography>
                      <Typography variant='h6' sx={{marginLeft:"1rem"}}>{items.Detail}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell sx={{textAlign:"left"}}  align="right" >{items.Price}</TableCell>
              <TableCell sx={{textAlign:"left"}} align="right">
                  <Stack sx={{flexDirection:"row",gap:"5px"}}>
  
                      <Button sx={ButtonCss} onClick={()=>PriceQunatity(index,"add")}>+</Button>
                      <Typography>{counterIndex == index ? counter : 0 }</Typography>
                      <Button sx={ButtonCss} onClick={()=>PriceQunatity(index,"remove")}>-</Button>
  
                  </Stack>
              </TableCell>
            </TableRow>
          
        </TableBody>
        ))
     }
             <TableCell sx={{width:"60%"}} component="th" scope="row">
                
              </TableCell>
              <TableCell sx={{textAlign:"left"}} align="right">
                <Typography>Total</Typography>
              </TableCell>
              <TableCell sx={{textAlign:"left"}} align="right">
                  <Typography>$300</Typography>
              </TableCell>
      
    </Table>
  </TableContainer>
  )
}

export default CartTable
