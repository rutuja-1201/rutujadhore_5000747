const express =require('express');
const bodyparser =require ("body-parser");
const router =require('./routes/routing');
const app=express();

app.use(bodyparser.urlencoded ({ extended :true}))
app.use(bodyparser.json());

app.use('',router);

app.listen(4000);
console.log('server started on :4000');