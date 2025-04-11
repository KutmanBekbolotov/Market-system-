import React from 'react'
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material'
import '../styles/ReferencePage.css'
import Sidebar from '../components/Sidebar';

const ReferencePage: React.FC = () => {
  const errors = [
    {
      code: 403,
      message: 'Доступ запрещён. У вас нет прав для просмотра этой страницы.',
    },
    {
      code: 404,
      message: 'Страница не найдена. Проверьте правильность URL.',
    },
    {
      code: 502,
      message: 'Ошибка шлюза (Bad Gateway). Сервер временно недоступен.',
    },
  ]

  return (
    <Box className="reference-container">
    <Sidebar />
      <Typography variant="h4" gutterBottom>
        Справочник
      </Typography>
      <Typography variant="h6" gutterBottom className="reference-subtitle">
        Возможные ошибки
      </Typography>
      <List>
        {errors.map((error) => (
          <ListItem key={error.code} className="reference-list-item">
            <ListItemText
              primary={`Ошибка ${error.code}`}
              secondary={error.message}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h5" gutterBottom className="reference-subtitle">
        Если вы видите такие ошибки, это проблемы на стороне сервера или сети.
      </Typography>
      <Typography variant="h6" gutterBottom className="reference-subtitle">
        1. Проверьте подключение к интернету.
      </Typography>
      <Typography variant="h6" gutterBottom className="reference-subtitle">
        2. Попробуйте обновить страницу. (Ctrl + R или F5).
      </Typography>
      <Typography variant="h6" gutterBottom className="reference-subtitle">
        Если проблема не исчезает, обратитесь к администратору системы или интернет-провайдеру.
      </Typography>
      <Typography variant="h6" gutterBottom className="reference-subtitle">
        Телефон техподдержки: 550-09-29-03/550-43-42-04
      </Typography>
    </Box>
  )
};

export default ReferencePage
