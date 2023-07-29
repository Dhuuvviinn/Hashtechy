import React from 'react'
import ContentWrapper from '../../component/ContentWrapper/ContentWrapper'
import { Box, Button, Typography } from '@mui/material'
import CartData from './AllProductData'
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
 const navigator = useNavigate()
  return (
   <ContentWrapper>
    <Box>

    <Typography variant='h4' sx={{color:"black",marginBottom:"4rem",fontWeight:"700"}}> 
      All Products Listing
    </Typography>

    <Box sx={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(210px, 1fr) )"}}>

     {
      CartData.map((item,index)=>(
        <Box sx={{width:"200px",margin:"30px 0"}}>
        <Box sx={{width:"100%",borderRadius:"10px",height:"180px",background:"#E5EAE1"}}></Box>
        <Typography variant='h5' sx={{margin:"0.4rem 0"}}>
         Sweater
        </Typography>

        <Typography  sx={{width:"100%",fontSize:"13px"}}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim 
        </Typography>

        <Typography sx={{fontWeight:"600",margin:"0.4rem 0"}}>
         $200
        </Typography>

        <Button sx={{width:"100%",borderRadius:"0px",color:"white",background:"black",":hover":{background:"black"}}} onClick={()=>navigator("/cart")} variant="contained">Add to Cart</Button>
     </Box>
      ))
     }


    </Box>

    </Box>
   
   </ContentWrapper>
  )
}

export default AllProducts
