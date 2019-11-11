// Express to run server and routes
//We are requiring Express, which we have allready installed
const express = require('express');

// Start up an instance of app
//with Express
const app = express();

/* Dependencies */
//And then, come the dependencies,
//the middleware, bodyParser, so we can parse our data
//Here we use, the use() method, just to tell bodyParser
//exactly how we want our data to be dealt with.
//We are going to mostly want JSON.
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
//Here, similar to the bodyParser package, we are requiring a package called cors
//cors is a package that lets the browser and server talk to each other without any security interruptions
const cors = require('cors');
app.use(cors());


//Initialize the main project folder
//Here we are pointing our app to the folder that we want them to look at
//This line of code is the one that allows to write server-side code that
//then connects to client-side code, which will be in a folder called demo
app.use(express.static('demo'));



//THEN we set up the server. We choose the port, we call up the listen method (set up a listener), we pass it to our callback function
//and we got ourselves a server!
const port = 8000;
//Spin up the server
const server = app.listen(port, listening);
//const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
//Callback to debug
function listening() {
    console.log("server running");
    console.log(`Running on localhost: ${port}`);
}

/*
const fakeData = {
    animal : 'lion',
    fact   : 'lions are fun'
}


app.get('/all', getData)

function getData(req, res) {
    res.send(animalData)
    console.log(animalData)
}
*/