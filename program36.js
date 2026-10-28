



const readline = require("readline");

const rl = readline.createInterface(
{
    input: process.stdin,
    output: process.stdout
}
);

function check(iNo)
 {
    if (iNo % 5 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

rl.question("Enter the number: ", function(input)
 {
    let ivalue = Number(input);

    let bRet = check(ivalue);

    if (bRet === true) 
    {
        console.log("Number is divisible");
    } 
    else 
        
    {
        console.log("Number is not divisible");
    }

    rl.close();
}
);