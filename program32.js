/*

  Q.program to divide two number.

*/ 

function divide( ino1 , ino2)

{

  let ians=0;

  if(ino2==0)
  {
    process.exit(1);
  }

  ians=ino1/ino2;

  return ians;
}


function main()

{

  let ivalue1=15, ivalue2=5;
  let iret=0;

  iret=divide(ivalue1,ivalue2);

  console.log("division is",iret);


}

main()