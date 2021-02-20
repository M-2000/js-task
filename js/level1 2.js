function count(arr,n){
    //code
    var num = 0;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] == n) num++;
    }
    return num
  }
  var arr = "today is a good day";
  var n = 'a';
  var num;
  num = count(arr,n);
  console.log(num);