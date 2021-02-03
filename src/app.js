const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user");
const defaultRoutes = require("./routes/index");
const http = require('http')
const app = express();

// for handling request in the form of json.
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// set routings by using middleware function `use` to perticular path.
/*
 path for https://hostname:portnumber/user/..
 for information for what url contains see below link
 https://stackoverflow.com/questions/34849543/whats-different-between-uri-request-uri-and-url
 */
app.use("/user", userRoutes);

// default route path http://hostname:portnumber/
app.use("/", defaultRoutes);

/* 
        for wrong path we need to handle 404 error.
        means for handling request resource is not found
 */
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.json({
    message: "page not found",
    statusCode: 404,
  });
});

// run the server
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const requestHandler = (req, res) => {
//   const payload = req.Body();
//   // processing req
//   return res;
// }

// const server = http.createServer(requestHandler);

// server.listen(2000);


