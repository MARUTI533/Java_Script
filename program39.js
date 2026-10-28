/*

 Q.accept one number from user and print that number of * on screen .

*/

const readline=require('readline');

r1=readline.createInterface({

  input:process.stdin,
  output:process.stout

});


function display(ino)
{
  if(ino<=0)
  {
    ino=-ino;
  }

  while(ino>=0)
  {
    console.log(ino,"\n");
    ino--;
  }
}



function main()
{
  r1.question("enter number\n",function(input){

    let ivalue=Number(input);

    display(ivalue);

    r1.close();
  });

}
  main();