import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 3748; //password
let pinAnswer = await inquirer.prompt([
    {
        name: "ATM",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.ATM === myPin) {
    // console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check balance"]
        }
    ]);
    if (operationAns.Operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAnswer.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.Operation === "Check balance")
        console.log("Your balance is: ", myBalance);
}
else {
    console.log("Inncorrect pin code");
}
