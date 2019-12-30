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
  while(i < array.length) // was originally doing <= which caused it to go one over the length of the array, since the array starts at 0
  {
    array[i] = array[i].concat(ex);
    i++;
  }
  
  return array;
}

function iLoveTheBeatles(num)
{
  var emptyArray2 = [];
 
  do
  {
    emptyArray2.push("I love the Beatles!"); // originally did emptyArray2[num] = "I love the...", but then figured it wanted it put in only once 
    num++;
  }
  while (num < 15);
 return emptyArray2;
}