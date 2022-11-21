const { config } = require('dotenv');
const express = require('express');
const connectDB = require('./src/db/connectionDB');
const userRouter = require('./src/routes/user');
const app = express();
config()



// Connect to database
connectDB();

// Init Middleware
app.use(express.json({ extended: true }));

// Define Routes
app.use('/api/user', userRouter);







const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started on port 3000');
});
