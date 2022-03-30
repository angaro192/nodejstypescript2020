import express from 'express';

const app = express();
app.get('/', (req, res) => res.json({ message: 'Ola mundo TS' }));
app.listen(3000);
