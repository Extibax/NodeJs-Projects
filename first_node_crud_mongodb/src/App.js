const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

// Import routes
const indexRoutes = require('./routes/index.js');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + 'views'));
app.set('view engine', 'ejs');

//  Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', indexRoutes);

// Start server
app.listen(app.get('port'), () => {
    console.log(`Server On Port ${app.get('port')}`);
});
