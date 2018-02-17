// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';


// styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';


// routes
import routes from './routes/app.routes.jsx';


ReactDOM.render(routes, document.getElementById('app'));