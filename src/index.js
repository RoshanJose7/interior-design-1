// Dependencies section.
const logger = require('morgan');
const path = require('path');
const fs = require('fs');

// Get the port.
<<<<<<< HEAD
const port = process.env.PORT.replace(/\s/g, '') ?? 80;
=======
const port = process.env.PORT?.replace(/\s/g, '') ?? 80;
>>>>>>> dev-rosh

// Initialize the backend app.
const express = require('express');
const app = express();

// Set some basic stuff.
app.use(logger('dev'));
app.use(express.static(path.join(`${__dirname}/public`)));

// Handle routes.
app.get('/', (_, res) => res.sendFile(path.join(`${__dirname}/pages/index.html`)));
app.use((req, res) => {
	// Send the file if it exists, or send the 404 error page.
	const filePath = path.join(`${__dirname}/pages/${req.path}.html`);
	if (fs.existsSync(filePath)) return res.sendFile(filePath);
	return res.sendFile(path.join(`${__dirname}/pages/404.html`));
});

// Start the app by listening to the port.
<<<<<<< HEAD
app.listen(port, () => console.log(`Listening on http://localhost${port === '80' ? '/' : `:${port}/`}`));
=======
app.listen(port, () => console.log(`Listening on http://localhost${port === '80' ? '/' : `:${port}/`}`));
>>>>>>> dev-rosh
