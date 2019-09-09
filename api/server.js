const express = require('express');

const app = express();

// Init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Cabeam API...' }));

// Define routes
app.use('/api/quotes', require('./routes/quotes'));
