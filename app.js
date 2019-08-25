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

const adminData = require('./routes/admin.js');

const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).render('404',{pageTitle : 'Page Not Found',path : ''});
})

app.listen(3000);