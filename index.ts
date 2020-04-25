/**
 * @author: El Mehdi Moumni
 */


const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

const app = express()
export {};

app.use(helmet());
app.use(cors());
app.use(express.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));



// Members API Routes
app.use('/clients', require('./routes/clients'));
app.use('/providers', require('./routes/providers'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));