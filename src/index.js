const express = require('express');
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

sequelize.sync().then(() => console.log('Database connected.'));

app.use(express.json());

app.use('/', productRoutes);

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
