/*

  Q.accept one number from user and print that number of * on screen.

*/


const readline=require('readline');
r1=readline.createInterface({

input:process.stdin,
output:process.stdout
});


function accept(ino)
{
  let icnt=0;

  for(icnt=1;icnt<=ino;icnt++)
  {
    console.log("*\n");
  }
}

function main()
{
  r1.question("enter number\n",function(input){

    let ivalue=Number(input);

    accept(ivalue);

    r1.close();
  });


}
main();
