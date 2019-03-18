import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
	const content = renderToString(<Home />);
	const html = `
		<html>
			<head />
			<body>
				<div>${content}</div>
				<script src="bundle.js" />
			</body>
		</html>
	`;
	res.send(html);
});

app.listen(3000, () => {
	console.log('listening port 3000');
});
