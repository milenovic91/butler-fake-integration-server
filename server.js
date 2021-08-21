const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const server = express();

server.use(bodyParser.json());
server.use(morgan('dev'));

const orderRouter = express.Router()

orderRouter.post('/accept', (req, res) => {
  res.json({
    paid: 1
  })
})

orderRouter.post('/reject', (req, res) => {
});

orderRouter.post('/assign-driver', (req, res) => {
	setTimeout(() => {
	  res.json({
		driverId: '202001',
		driverName: 'Driver MR2',
		driverPhone: '432432'
	  })
	}, 10000)
})

server.use('/services/delivery/order', orderRouter);

server.use('/services/delivery/courier', orderRouter);


server.listen(4000, () => console.log('server running at 4000 port'))