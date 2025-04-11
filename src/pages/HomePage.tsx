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
  { id: 1, name: 'Монитор Samsung 24"', category: 'Электроника', quantity: 12, price: 12999 },
  { id: 2, name: 'Клавиатура Logitech', category: 'Периферия', quantity: 30, price: 3499 },
  { id: 3, name: 'Мышь A4Tech', category: 'Периферия', quantity: 25, price: 1999 },
  { id: 4, name: 'Смартфон Xiaomi', category: 'Электроника', quantity: 8, price: 23999 },
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
