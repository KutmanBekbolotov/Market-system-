import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Container, Box, TextField, Button, Typography } from '@mui/material'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [quantity, setQuantity] = useState<number | string>('')
  const [price, setPrice] = useState<number | string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Добавить товар:', { name, category, quantity, price })
  }

  return (
    <>
      <Sidebar />
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 6,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Добавить товар
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
            <TextField
              label="Название товара"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Категория"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Количество"
              variant="outlined"
              fullWidth
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Цена"
              variant="outlined"
              fullWidth
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              sx={{ mb: 2 }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Добавить товар
            </Button>
          </form>
        </Box>
      </Container>
    </>
  )
}

export default AddProduct
