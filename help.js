/*
      y=sqrt(x), y**2=x
      3=sqrt(9), 3**2=9
*/
function sqrt(x)
{
	y=1
	while (y**2 <x)
	{
	     y=y+1
	}
	if ( y**2 ===x)
	{
	       console.log(`sqrt(${x})=${y}`)
	}
	else
	{
	       console.log("no exect root")
	}
}

sqrt(625)
sqrt(25)
sqrt(152415765279684)
console.log(12345678**2)
