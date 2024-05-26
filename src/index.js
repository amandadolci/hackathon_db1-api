const express = require('express');
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const app = express();

sequelize.sync().then(() => console.log('Database connected.'));

app.use(express.json());

app.use('/', productRoutes);

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
