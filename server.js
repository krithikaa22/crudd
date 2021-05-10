const express =  require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');

const connectdb = require('./server/database/connection');

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

connectdb();

//log request
app.use(morgan('tiny'))

//pass requests to bp
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs");

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT, ()=> console.log(`server is running on http://localhost:${PORT}`))