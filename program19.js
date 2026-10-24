/*
problrms on number
*/

 function displayfactors(ino)
{
  icnt=0;

  console.log("factors of :",ino);
  
  for(icnt=1;icnt<=ino/2;icnt++)
  {
    if(ino%icnt==0)
    {
      console.log(icnt);
    }
  }

}

function main()
{
  displayfactors(12);

}

main()