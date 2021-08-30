const express = require('express')
var path = require('path');
const app = express()
const port = 8080
app.get('/', (req, res) => {
  let jsonPath = path.join(__dirname, 'index.html');
  res.sendFile(jsonPath);
})

app.get('/validateLoan', (req, res) => {
  let name = req.query.name;
  let salary = req.query.salary;
  let loan = req.query.loan;
  let creditscore = req.query.creditscore;

  if(salary && loan && creditscore){
    res.json({"result":"Loan Approved",status:200})
  }else{
    res.json({"result":"Invalid data",status:500})
  }
})

app.listen(port, (req,res) => {
  console.log("Listening on the port  : ",port)
})

