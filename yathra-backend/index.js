require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const sendMailRoutes = require('./routes/email-send.js')
const sendSubscribe = require('./routes/subscribe-send.js')
const getDataRoute = require('./routes/testRoute')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

const port = process.env.PORT || process.env.API_PORT;

app.use('/inquiry', sendMailRoutes);
app.use('/newsletter', sendSubscribe);
app.use('/test', getDataRoute)

app.listen(port, () => console.log("server started"));
