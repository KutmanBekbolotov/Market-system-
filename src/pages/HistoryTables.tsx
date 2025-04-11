import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField } from '@mui/material'

const mockHistory = [
  { id: 1, date: '2025-04-01', name: 'Молоко 3.2%"', category: 'Молочные продукты', quantity: 12, price: 56 },
  { id: 2, date: '2025-04-02', name: 'Сметана', category: 'Молочные продукты', quantity: 30, price: 89 },
  { id: 3, date: '2025-04-02', name: 'Кефир Ванильный', category: 'Молочные продукты', quantity: 8, price: 120 },
  { id: 4, date: '2025-04-03', name: 'Тархун', category: 'Напитки', quantity: 35, price: 45 },
  { id: 5, date: '2025-04-04', name: 'Султан-Чай', category: 'Напитки', quantity: 35, price: 65 },
]

const History = () => {
  const [filterDate, setFilterDate] = useState<string>('')
  const [filteredHistory, setFilteredHistory] = useState(mockHistory)

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value
    setFilterDate(date)

    if (date) {
      setFilteredHistory(mockHistory.filter((item) => item.date === date))
    } else {
      setFilteredHistory(mockHistory)
    }
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
            История товаров
          </Typography>

          <TextField
            label="Фильтр по дате"
            variant="outlined"
            type="date"
            value={filterDate}
            onChange={handleFilterChange}
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TableContainer component={Paper} sx={{ width: '100%', maxWidth: '1200px', mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Дата</TableCell>
                  <TableCell>Наименование</TableCell>
                  <TableCell>Категория</TableCell>
                  <TableCell align="right">Количество</TableCell>
                  <TableCell align="right">Цена (₸)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredHistory.map((historyItem) => (
                  <TableRow key={historyItem.id}>
                    <TableCell>{historyItem.date}</TableCell>
                    <TableCell>{historyItem.name}</TableCell>
                    <TableCell>{historyItem.category}</TableCell>
                    <TableCell align="right">{historyItem.quantity}</TableCell>
                    <TableCell align="right">{historyItem.price.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  )
}

export default History
