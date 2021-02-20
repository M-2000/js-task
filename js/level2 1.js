function maopao(arr)
{
for(var i = 0; i < arr.length; i++)
{
    for (var j = 0; j < arr.length - i - 1; j++)
    {
        if(arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }  
    }
}
return arr;
}
var arr = [5, 2, 6, 3, 1];
arr = maopao(arr);
console.log(arr);