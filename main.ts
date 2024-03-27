#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 15000; // dollar
let mypin = 1597;
let pinanswer = await inquirer.prompt(
    [
        {
    name: "pin",
    message: "enter your pin",
    type: "number"
        }
    ]
);
// 12345 === 1597 - false
if (pinanswer.pin === mypin) {
    console.log("right pin code!!!");
    let cashans = await inquirer.prompt(
        [
            {
                name: "cash",
                message: "enter your amount ",
                type: "list",
                choices: ["withdraw", "check balance"]
            }
        ]
    );
    if (cashans.cash === "withdraw") {
        let amountans = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );
        // =, -=, +=
        mybalance -= amountans.amount;
        console.log("your remaining balance is: " + mybalance)
    } else if (cashans.cash === "check balance"){
        console.log("your balance is: " + mybalance)
    }
}
else {
    console.log("wrong pin number");
}
