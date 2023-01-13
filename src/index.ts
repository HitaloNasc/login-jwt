// global
import 'dotenv/config';
// local
import app from './app';

const PORT = parseInt(process.env.PORT!) || 5555;

app.listen(PORT, () => {
  console.log(`Server is running  port ${PORT}`);
});
