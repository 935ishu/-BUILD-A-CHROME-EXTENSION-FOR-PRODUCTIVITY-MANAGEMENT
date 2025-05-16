// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productivityRoutes = require('./routes/productivityRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/productivity', productivityRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));


