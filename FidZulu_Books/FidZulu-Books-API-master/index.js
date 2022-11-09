// import
const express = require("express");
const bodyParser = require("body-parser");

// express app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// import routes
const bookRoute = require('./route/books.route');

// setup route
app.use('', bookRoute)

// setup server
const PORT = 3032;
app.listen(PORT, () => {
  console.log(
    `Books API is running on port ${PORT}`
  );
});

// handle unhandled promises rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${ err.message }`)
    server.close(()=> process.exit(1))
})

app.get('/', function (req, res) {
  console.log("received /")
});