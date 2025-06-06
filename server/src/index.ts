import express from 'express';
import cors from 'cors';
import instockRoutes from './routes/instock';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', instockRoutes);

const PORT = process.env.PORT || 5000;

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
