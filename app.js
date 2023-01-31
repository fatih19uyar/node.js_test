const express = require('express');

const app = express();

app.use ('/',(req,res,next)=> {
    console.log("This Always Runs!!");
    next();
})


app.use('/add-product',(req, res, next) => { 
    console.log('in another middleware here!');
    res.send('<h1>Hello from Add Product Page!</h1>');
});


app.use('/',(req, res, next) => { 
    console.log('in another middleware here!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);