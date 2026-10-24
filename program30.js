
class demo
{

  constructor(a,b)
  {
    this.no1=a;
    this.no2=b;

    console.log("inside constructoe");
  }

}

function main()
{
 dobj =new demo(51,101)
 console.log(dobj.no1)
 console.log(dobj.no2)
 
  
}

main()