// add solution here

function theBeatlesPlay(array1, array2)
{
  var emptyArray = [];
  var i = 0;
  for (i; i < 4; i++)
  {
    emptyArray[i] = `${array1[i]} plays ${array2[i]}`;
  }
  
return emptyArray;  
}

function johnLennonFacts(array)
{
  var i = 0;
  var ex = "!!!";
  while(i <= array.length)
  {
    array[i] = array[i].concat(ex);
    i++;
  }
  
  return array;
}


/*function iLoveTheBeatles(num)
{
  var emptyArray2 = [];
 
  do
  {
    emptyArray2[num] = "I love the Beatles!";
    num++;
  }
  while (num < 15);
 return emptyArray2;
}
*/