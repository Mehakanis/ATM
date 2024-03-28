#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // dollar
let myPin = 6373;

let pinAnswer = await inquirer.prompt([
  {
    name: "Pin",
    message: "enter your pin",
    type: "number",
  },
]);
if (pinAnswer.Pin === myPin) {
  console.log("correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["Withdraw", "Check balance", "Fast Cash"],
    },
  ]);
  console.log(operationAns);
  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insufficient Balance");
    } else if (amountAns.amount < myBalance) {
      myBalance -= amountAns.amount;
      console.log(`your remaining balance is: + ${myBalance}`);
    }
  } else if (operationAns.operation === "Check balance") {
    console.log("your balannce is:" + myBalance);
  }
  if (operationAns.operation === "Fast Cash" ){
    let cashAmount = await inquirer.prompt([
      {
        name:"cash",
        message:"select your amount!",
        type:"list",
        choices:["500","1000","5000","10000"]
      },
    ]);
    myBalance -= cashAmount.cash;
    console.log(`your remaining balance is: ${myBalance} `)
  }
} else {


  console.log("Incorrect pin code");
}
