const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => res.status(200).json({ message: 'Tudo certo!' }));

app.listen(PORT, () => {
  console.log(`Funfando, tudo certo na porta ${PORT}`);
});
