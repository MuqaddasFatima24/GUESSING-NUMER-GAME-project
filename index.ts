import inquirer from "inquirer";

type ansType = {
    userGuess: number,
}

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answers: ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess between 1 to 10: ",

    }
])

const {userGuess} = answers;

if(userGuess === systemGeneratedNo){
    console.log(userGuess, "userGuess", systemGeneratedNo, "SYs")
    console.log("YEAAAA YOUR ANSWER IS CORRECT \ & YOU WINNN!")
} else {
    console.log("please try again BETTER LUCK next time")
}