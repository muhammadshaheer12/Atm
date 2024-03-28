#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinanswer.pin === mypin) {
    console.log("correct pin code!!!");
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option ",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        }
    ]);
    if (operationans.operation === "withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (operationans.operation === "check balance") {
            console.log(`your balance is: {mybalance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationans.operation === "check balance") {
        console.log(`your remaining amount is: {mybalance}`);
    }
    if (operationans.operation === "fast cash") {
        let fastcashans = await inquirer.prompt([
            {
                name: "fast cash",
                message: "enter your amount ",
                type: "list",
                choices: ["2000", "5000", "7000", "9000"],
            }
        ]);
        mybalance -= fastcashans.fastcash;
        console.log(`your remaining amount is: {mybalance}`);
    }
}
else {
    console.log("incorrect pin code");
}
