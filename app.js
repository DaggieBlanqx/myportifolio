var express = require('express');
var path  =  require(`path`)
const app = express();

//import components
var {usageLogs,accessTime} = require('./Components/logger.js');

//import routes

const main = require('./routes/main.js');


//set the view engine
app.set('view engine','ejs');

//Set a folder for our views
app.set('views',path.join(__dirname, `views`))



//middleware for static resources eg images,css files etc
//Set Static Path
//public is the name of the folder , you can name it as you want
app.use(express.static(path.join(__dirname,`public`)))

//middleware to take logs and echo notes
app.use(usageLogs,accessTime);

//pass a request to a route
//app.get('/',main);

app.get('/',(req,res)=>{
	res.render(`index`);
})

//port listening
const port = process.env.PORT || 3000;
app.listen(port,()=>{
	console.info(`

		App is now running at port ${port}

		`)
})