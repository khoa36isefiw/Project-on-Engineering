import React from 'react'
import { Container, Box } from '@mui/material'
import EmptyCard from '~/Components/EmptyCard/EmptyCard'
import ProductsInCard from '~/Components/ProductsInCard/ProductsInCard'

function Checkout() {
  return (
    <Container>
        <ProductsInCard/>
        <EmptyCard/>
    </Container>
  )
}

export default Checkout