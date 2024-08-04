const conditionals = [
    {
        edit: false,
        category: "conditionals",
        title: "if statement - satisfy condition",
        scenario: `
        In this exercise we will work with our first if-statement. In the code below we declare a variable num with a value 0. Then, we have an if-statement. The if-statement consists of a condition – the part inside the parentheses – and some code inside a pair of curly braces. The code will assign the variable num a new value 1. But it will only run if the condition is met.
        Adjust the condition such that the code inside the curly braces will execute and the console.log() statement logs true.
        `,
        codeScenario: `
        let num = 0;
        if (1 > 2) {
           num = 1;
        }
        console.log(num === 1);
        `,
        javascript: [`
        let num = 0;
        if (1 < 2) {
           num = 1;
        }
        console.log(num === 1);
        `]
    },
    {
        edit: false,
        category: "conditionals",
        title: "if statement - add missing condition",
        scenario: `
        Time to practice what we've learnt so far. In the code below, the if...statement will assign a new value to the variable text. But only if its condition is met. Currently, the condition is missing.
        Add any condition that will be satisfied such that the console.log() statement logs true.
        `,
        codeScenario: `
        let text = 'hello';
        if () {
           text = text + ' world';
        }
        console.log(text === 'hello world');
        `,
        javascript: [`
        let text = 'hello';
        if (text === 'hello') {
           text = text + ' world';
        }
        console.log(text === 'hello world');
        `]
    },
    
]
module.exports = conditionals;