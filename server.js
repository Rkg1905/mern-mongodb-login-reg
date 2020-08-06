var express = require("express")
var bodyParser = require('body-parser')
var cors = require('cors')
// body parser added
var mongoose=require("mongoose")
var port=process.env.PORT || 5000;

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Allow cross origin requests
app.use(cors())

const mongoURI= 'mongodb://localhost:27017/mernLoginReg'
mongoose.connect(mongoURI,{ useNewUrlParser: true , useUnifiedTopology: true })
.then(() => console.log("mongoDB connected"))
.catch(err=> console.log(err))

var Users = require('./routes/Users')

app.use('/Users',Users)



app.listen(port,()=> {
    console.log("server is running on port: " +port)
})