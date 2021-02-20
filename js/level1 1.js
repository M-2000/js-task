var arr = 'ABCDEEF,GHJKKM';
var arrf = [];
function recur(arr){
  for(var i = 0; i < arr.length-1; i++)
  {
    var temp = 1;
    for (var j = i + 1; j <arr.length; j++)
    {
      if (arr[i] == arr[j])
      {
        temp++;
      }
    }
    if(temp > 1)
    {
      for (var i = 0; i < temp ; i++)
      {
        arrf.push(arr[i]);
      }
    }
  }
  console.log(arrf)
}
recur(arr)