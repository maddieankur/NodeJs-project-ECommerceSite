// Javascript core Module

const path = require('path')
const http = require('http')
const fs = require('fs');

// JavaScript Third Party Module (Production Environment)

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin.js');

const shopRoutes = require('./routes/shop.js');

const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);