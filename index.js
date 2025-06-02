const express = require("express");

const app = express();

// use: Middleware (Function)
app.use(express.json());

//API
app.get("/", (req, res) => {
  res.send("server is running....");
});

// query_Params
app.get("/query_Params", (req, res) => {

    console.log(req.query);
    console.log(req.query.firstName);
    console.log(req.query["lastName"]);
    
    res.send("query_Params");

  });

// body
app.get("/body", (req, res) => {

    console.log(req.body);
    console.log(req.body.firstName);
    console.log(req.body["lastName"]);

    res.send("body");
    
});

// dynamic_URL
app.get("/dynamic_URL/:DD", (req, res) => {

    console.log(req.params);
    console.log(req.params.DD);

    res.send("dynamic_URL");

});

// Port
app.listen(8000);
