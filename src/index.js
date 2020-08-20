require('dotenv').config();

// Dependencies section.
const logger = require('morgan');
const path = require('path');
const fs = require('fs');

// Get the port.
const port = parseInt(process.env.PORT, 10) || 80;

// Initialize the backend app.
const express = require('express');
const app = express();

// Set some basic stuff.
app.use(logger('dev'));
app.use(express.static(path.join(`${__dirname}/public`)));

// Parse post requests to json.
app.use(express.json());

// Parse get requests to json.
app.use(express.urlencoded({ extended: true }));

// Handle routes.
app.get('/', (_, res) => res.sendFile(path.join(`${__dirname}/pages/index.html`)));
app.use('/contact', require('./contact'));

app.use((req, res) => {
	// Send the file if it exists, or send the 404 error page.
	const filePath = path.join(`${__dirname}/pages/${req.path}.html`);
	if (fs.existsSync(filePath)) return res.sendFile(filePath);
	return res.sendFile(path.join(`${__dirname}/pages/404.html`));
});

// Start the app by listening to the port.
app.listen(port, () => console.log(`Listening on http://localhost${port === 80 ? '/' : `:${port}/`}`));
