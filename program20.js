/*
problrms on number
*/

 function sumfactors(ino)
{
  icnt=0;
  isum=0;

  
  for(icnt=1;icnt<=ino/2;icnt++)
  {
    if(ino%icnt==0)
    {
      isum=isum+icnt;
    }
  }

  return isum;

}

function main()
{
  let iret=0;

 iret= sumfactors(12);

 console.log("sumation factors:",iret);

}

main()