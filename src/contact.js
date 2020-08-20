const path = require('path');
const mysql = require('mysql');

const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => res.sendFile(path.join(`${__dirname}/pages/contact.html`)));

router.post('/', (req, res) => {
	const connection = mysql.createConnection({
		host: process.env.DB_HOST || 'localhost',
		user: process.env.DB_NAME || 'me',
		password: process.env.DB_PASS || 'myTopSecretPassword',
		port: process.env.DB_PORT || 81,
		database: process.env.DB_NAME
	});

	const data = {
		formDate: new Date(),
		...req.body
	};

	connection.query('INSERT INTO contact SET ?', data, (err, result, _fields) => {
		// End the program in case of an error.
		if (err) return console.log(err);

		// Log the result to the console to see what happened.
		return console.log(result);
	});

	connection.end();
	return res.redirect('/contact/done');
});

router.get('/done', (_req, res) => res.sendFile(path.join(`${__dirname}/pages/contact-done.html`)));

module.exports = router;
