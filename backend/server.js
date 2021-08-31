const express = require('express')
const app = express()
const port = 8080
app.get('/', (req, res) => {
  
  res.send("Hello world");
})

app.get('/validateLoan', (req, res) => {

  let email = req.query.email;
  let fname = req.query.fname;
  let lname = req.query.lname;
  let loan = req.query.loan;
  let sourceIncome = req.query.sourceIncome;
  // let age = document.getElementById('age').value;
  let income = req.query.income;
  let reason = req.query.reason;


  if( parseInt(income)*5 >= parseInt(loan)){
    res.json({"result":"Loan Approved",status:200})
  }else{
    res.json({"result":"Invalid data",status:500})
  }
})


app.listen(port, (req,res) => {
  console.log("Listening on the port  : ",port)
})


