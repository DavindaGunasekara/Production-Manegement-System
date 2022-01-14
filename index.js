require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/user/user.router');
const orderRouter = require('./api/orders/order.router');
const orderRouterRegular = require('./api/orders/order.router');
const orderRouterOnetime = require('./api/orders/order.router');
const qualityRouter = require('./api/quality/quality.router');
const displayStock = require('./api/stock/stock.router');
const updateStock = require('./api/stock/stock.router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/orders', orderRouter);
app.use('/select', orderRouter);
app.use('/selectRegular', orderRouterRegular);
app.use('/selectOnetime', orderRouterOnetime);
app.use('/quality', qualityRouter);
app.use('/displayStock', displayStock);
app.use('/updateStock', updateStock);

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running on PORT:', process.env.APP_PORT);
});