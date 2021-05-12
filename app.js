const database = require('./config/database');
const app = require('./config/express');

const routes = require('./routes/advert.route');
const joiMiddleware = require('./middlewares/joiMiddleware');

const port = app.get('port');

app.use('/api', routes);
app.use(joiMiddleware);
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'Error',
    message: 'Not Found',
  });
});

const startServer = async () => {
  try {
    await database();
    app.listen(port, () => console.log(`Server started on port: ${port}`));
  } catch(err) {
    console.error(err.message);
    process.exit();
  }
}

startServer();