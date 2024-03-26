import inquirer from "inquirer";
let mybalance = 10000; // dollar
let mypin = 1234;
let pinanswer = await inquirer.prompt(
    [
        {
    name: "pin",
    message: "enter your pin",
    type: "number"
        }
    ]
);
// 12345 === 1234 - false
if (pinanswer.pin === mypin) {
    console.log("correct pin code!!!");
    let operationans = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "check balance"]
            }
        ]
    );
    if (operationans.operation === "withdraw") {
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
    } else if (operationans.oeration === "check balance"){
        console.log("yourbalance is: " + mybalance)
    }
}
else {
    console.log("incorrect pin number");
}
