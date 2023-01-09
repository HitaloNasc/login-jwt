// import dotenv from 'dotenv';
import 'dotenv/config';
import app from './app';

// dotenv.config();

const PORT = parseInt(process.env.PORT!) || 5555;

app.listen(PORT, () => {
  console.log(`Server is running  port ${PORT}`);
});
