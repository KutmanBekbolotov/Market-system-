import Sidebar from '../components/Sidebar';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import '../styles/TableStyles.css';

const mockProducts = [
  { id: 1, date: '2025-04-01', name: 'Молоко 3.2%"', category: 'Молочные продукты', quantity: 12, price: 56 },
  { id: 2, date: '2025-04-02', name: 'Сметана', category: 'Молочные продукты', quantity: 30, price: 89 },
  { id: 3, date: '2025-04-02', name: 'Кефир Ванильный', category: 'Молочные продукты', quantity: 8, price: 120 },
  { id: 4, date: '2025-04-03', name: 'Тархун', category: 'Напитки', quantity: 35, price: 45 },
  { id: 5, date: '2025-04-04', name: 'Султан-Чай', category: 'Напитки', quantity: 35, price: 65 },
]

export default function Home() {
  return (
    <>
      <Sidebar />
      <Container>
        <Box className="table-wrapper">
          <Typography variant="h4" className="table-title">
            Товары на складе
          </Typography>

          <TableContainer component={Paper} className="table-container">
            <Table>
              <TableHead>
                <TableRow className="table-header">
                  <TableCell className="table-cell">№</TableCell>
                  <TableCell className="table-cell">Наименование</TableCell>
                  <TableCell className="table-cell">Категория</TableCell>
                  <TableCell className="table-cell table-cell-right">Количество</TableCell>
                  <TableCell className="table-cell table-cell-right">Цена</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockProducts.map((product, index) => (
                  <TableRow key={product.id}>
                    <TableCell className="table-cell">{index + 1}</TableCell>
                    <TableCell className="table-cell">{product.name}</TableCell>
                    <TableCell className="table-cell">{product.category}</TableCell>
                    <TableCell className="table-cell table-cell-right">{product.quantity}</TableCell>
                    <TableCell className="table-cell table-cell-right">{product.price.toLocaleString()}</TableCell>
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
