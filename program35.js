/*
  Q.accept one number and check waither is divisible by 5 or not
*/


function divisible(no)

{
  if (no % 5 == 0)
        {
            console.log("Number is divisible by 5");
        }
        else
        {
            console.log("Number is not divisible by 5");
        }

}

function main()
{
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter your number: ", function(no) {

        no = Number(no);

        divisible(no);

        rl.close();
    });
}

main();


