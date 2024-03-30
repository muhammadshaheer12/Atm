#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000; 
let mypin = 1234;
let pinanswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number",
        }
    ]
);
if (pinanswer.pin === mypin) {
    console.log("correct pin code");
    let operationans = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option ",
                type: "list",
                choices: ["withdraw","checkbalance","fastcash"],
            }
        ]
    );
    if (operationans.operation === "withdraw") {
        let amountans = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
            ]
        );
        if (mybalance -= amountans.amount) {
            console.log(`your remaining amount is: ${mybalance}`);
        }
        if (amountans.amount > mybalance) {
            console.log("insufficient balance");
        }
    }
        if (operationans.operation === "checkbalance") {
            console.log(`your balance is: ${mybalance}`);
        }
        if (operationans.operation === "fastcash") {
            let fastcashans = await inquirer.prompt(
                [
                    {
                        name: "fastcash",
                        message: "enter your amount ",
                        type: "list",
                        choices: ["2000", "5000", "7000", "9000"],
                    }
                ]
            );
             mybalance -= fastcashans.fastcash
             console.log(`your remaining amount is: ${mybalance}`);
            }
        }
        else {
             console.log("incorrect pin code")
        }