import express from 'express';
import calendarRouter from './calenderApp/routes/index'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json)
app.use('/calendar', calendarRouter)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
