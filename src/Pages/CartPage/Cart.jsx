import React from 'react'
import ContentWrapper from '../../component/ContentWrapper/ContentWrapper'
import { Box, Stack, Typography } from '@mui/material'
import CartTable from './CartTable/CartTable'

const Cart = () => {
  return (
    <>
    <ContentWrapper>
      <Stack sx={{alignItems:'center'}}>

      <Typography variant='h4'>My Cart</Typography>
      
      </Stack>
     <Box>
      <CartTable/>
     </Box>
    </ContentWrapper>
    </>
  )
}

export default Cart
