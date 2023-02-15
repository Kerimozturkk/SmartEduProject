const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');

const app = express();

mongoose.connect('mongodb://localhost/smartedu-db',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {console.log('DB connnected successfully')});

// Template Engine
app.set('view engine',"ejs");


// Middlewares
app.use(express.static("public"));

// bodyParser Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
