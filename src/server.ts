import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import uploadFile from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadFile.directory));
app.use(routes);

app.listen(3333, () => {
  console.log();
  console.log();
  console.log();
  console.log();
  console.log('-----------------------------------');
  console.log('Server started on port 3333');
  console.log('-----------------------------------');
  console.log('Servidor iniciado na porta 3333');
  console.log('-----------------------------------');
});
