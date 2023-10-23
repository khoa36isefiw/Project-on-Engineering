import React from 'react'
import { Container, Box } from '@mui/material'
import EmptyCard from '~/Components/EmptyCard/EmptyCard'
import ProductsInCard from '~/Components/ProductsInCard/ProductsInCard'

function Checkout() {
  return (
    <Box>
        <ProductsInCard/>
        <EmptyCard/>
    </Box>
  )
}

export default Checkout